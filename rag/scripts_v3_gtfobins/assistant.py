"""
LOTL Assistant — RAG with classification + hybrid search + reranking.
Usage:
    python assistant.py "your question"
    python assistant.py                (interactive)
"""

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
LLM_MODEL       = "llama3.2:3b"
TOP_K           = 5
CANDIDATES      = 25
# ================================

SYSTEM_PROMPT = """You are a LOTL (Living Off the Land) cybersecurity assistant.
Answer ONLY using the provided context. If the context lacks the answer, say so.

Structure every answer EXACTLY:
**Summary:** One sentence.
**Commands:** Command examples from context verbatim. If none: "Not in context."
**Detection:** Specific indicators from context. If none: "Not in context."
**Mitigation:** Specific restrictions from context. If none: "Not in context."

RULES:
- Never invent commands, flags, tool names, or MITRE IDs.
- Never give generic advice like "apply patches", "monitor suspicious activity", "restrict privileges".
- Cite sources with [Source: filename].
- Keep answers under 250 words.
"""

# ---------- Patterns (Windows) ----------
BINARY_PATTERN = re.compile(
    r"\b(certutil|mshta|rundll32|regsvr32|wmic|powershell|bitsadmin|msbuild|"
    r"installutil|schtasks|vssadmin|wbadmin|nslookup|netsh|cmstp|cscript|"
    r"wscript|xcopy|reg\.exe|cmdkey|cmdl32|esentutl|eventvwr|expand|extrac32|"
    r"findstr|forfiles|fsutil|ftp|gpscript|certoc|certreq|pcalua|pcwrun|"
    r"presentationhost|replace|rpcping|runonce|sc\.exe|scriptrunner|tttracer|"
    r"verclsid|wsl|wsreset|msiexec|odbcconf|regasm|regsvcs|mavinject)"
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

# ---------- Patterns (MITRE technique IDs) ----------
TECHNIQUE_PATTERN = re.compile(r"\bT\d{4}(\.\d{3})?\b", re.IGNORECASE)


def classify_query(q: str):
    """Route the query to the best collection."""
    # 1. Technique ID
    m = TECHNIQUE_PATTERN.search(q)
    if m:
        return "techniques", m.group(0).upper()

    # 2. Windows binaries
    m = BINARY_PATTERN.search(q)
    if m:
        return "lolbins", m.group(1).lower().replace(".exe", "")

    # 3. Unix binaries (GTFOBins)
    m = UNIX_BINARIES.search(q)
    if m:
        return "gtfobins", m.group(1).lower()

    ql = q.lower()

    # 4. Malware keywords
    if any(w in ql for w in ["malware", "trojan", "ransomware", "backdoor", "rat "]):
        return "malware", None

    # 5. Capability phrases (LOLBins)
    if any(w in ql for w in ["download file", "download files", "fetch file",
                              "fetch files", "built-in tool", "built-in binary",
                              "system binary", "encode file", "decode file"]):
        return "lolbins", None

    # 6. Tools / tactics
    if any(w in ql for w in ["mitre tool", "attack tool", "utility software"]):
        return "tools", None
    if any(w in ql for w in ["tactic", "phase", "stage", "kill chain"]):
        return "tactics", None

    # 7. Default
    return "techniques", None


_reranker = None
def get_reranker():
    global _reranker
    if _reranker is None:
        _reranker = CrossEncoder(RERANK_MODEL)
    return _reranker


def retrieve(question, collection_name, entity, top_k=TOP_K, candidates=CANDIDATES):
    client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)
    embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=EMBED_MODEL
    )
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

    # Semantic search + rerank
    results = coll.query(query_texts=[question], n_results=candidates)
    docs = results["documents"][0]
    metas = results["metadatas"][0]

    if not docs:
        return [], []

    reranker = get_reranker()
    pairs = [(question, d) for d in docs]
    scores = reranker.predict(pairs)

    scored = []
    for doc, meta, score in zip(docs, metas, scores):
        bonus = 0.0
        if entity:
            if entity in meta.get("source", "").lower():
                bonus += 5.0
            if entity in doc.lower():
                bonus += 1.0
        scored.append((score + bonus, doc, meta))

    scored.sort(key=lambda x: -x[0])
    top = scored[:top_k]
    return [t[1] for t in top], [t[2] for t in top]


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
    )
    return response["message"]["content"]


def build_context(docs, metas):
    parts = []
    for i, (doc, meta) in enumerate(zip(docs, metas), start=1):
        src = meta.get("source", "unknown")
        parts.append(f"[Chunk {i}] source={src}\n{doc}")
    return "\n\n---\n\n".join(parts)


def answer(question):
    collection, entity = classify_query(question)
    print(f"\n🔍 Question: {question}")
    print(f"📂 Collection: {collection}" + (f"  |  Entity: {entity}" if entity else ""))
    print("⏳ Retrieving...")

    docs, metas = retrieve(question, collection, entity)
    if not docs:
        print("❌ No results found.")
        return

    print(f"✓ Retrieved {len(docs)} chunks (post-rerank)")
    print("🧠 Generating answer...\n")

    context = build_context(docs, metas)
    reply = ask_llm(question, context, collection)

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