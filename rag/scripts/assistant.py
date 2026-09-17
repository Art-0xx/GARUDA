"""
LOTL Assistant (Alpha) — RAG + Ollama LLM
Usage:
    python assistant.py "your question"
    python assistant.py                (interactive mode)
"""

import sys
import chromadb
import ollama
from chromadb.utils import embedding_functions

# ============ CONFIG ============
CHROMA_HOST     = "localhost"
CHROMA_PORT     = 8000
COLLECTION_NAME = "lotl_knowledge"
EMBED_MODEL     = "all-MiniLM-L6-v2"
LLM_MODEL       = "llama3.2:3b"    # change to llama3.1:8b if you have >= 16GB RAM
TOP_K           = 5
# ================================

SYSTEM_PROMPT = """You are a LOTL (Living Off the Land) cybersecurity assistant.
You answer questions about attacker techniques, LOLBins, detection, and mitigation.

RULES:
1. Answer ONLY using the provided context. If the context lacks the answer, say so.

2. Cite sources at the end using [Source: filename].

3. Structure every answer EXACTLY like this:

   **Summary:** One sentence.

   **Commands:** Exact command examples that appear VERBATIM in the context.
   If the context has no command examples, write: "No command examples in context."

   **Detection:** Specific indicators from the context (process names, flags, 
   parent processes, file paths, network patterns, log sources).
   If none are in the context, write: "No detection details in context."

   **Mitigation:** Specific restrictions from the context (AppLocker rules, 
   Sysmon configs, allowed-listing, etc.).
   If none are in the context, write: "No mitigation details in context."

4. ABSOLUTE PROHIBITIONS — never do any of these:
   - Invent command-line examples (no made-up flags or tool names)
   - Invent MITRE technique IDs
   - Give generic advice like "apply patches", "implement security controls", 
     "restrict privileges", "monitor for suspicious activity", "update software"
   - Add commentary beyond the context

5. Keep answers under 250 words.
"""

def build_context(chunks, metas):
    parts = []
    for i, (doc, meta) in enumerate(zip(chunks, metas), start=1):
        source = meta.get("source", "unknown")
        tech = meta.get("technique_id", "")
        header = f"[Chunk {i}] source={source}"
        if tech:
            header += f" technique={tech}"
        parts.append(f"{header}\n{doc}")
    return "\n\n---\n\n".join(parts)

def query_rag(question):
    """Hybrid retrieval: semantic search + keyword boost for binary names."""
    client = chromadb.HttpClient(host=CHROMA_HOST, port=CHROMA_PORT)
    embed_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name=EMBED_MODEL
    )
    coll = client.get_collection(name=COLLECTION_NAME, embedding_function=embed_fn)

    # Binary names to look for in the query
    BINARIES = [
        "certutil", "mshta", "rundll32", "regsvr32", "wmic",
        "powershell", "bitsadmin", "msbuild", "installutil",
        "curl", "wget", "bash", "python", "schtasks",
        "at.exe", "vssadmin", "wbadmin", "nslookup", "netsh",
        "cmstp", "cscript", "wscript", "xcopy", "reg.exe",
        "certoc", "certreq", "cmdkey", "cmdl32", "esentutl",
        "eventvwr", "expand", "extrac32", "findstr", "forfiles",
        "fsutil", "ftp", "gpscript", "hh", "installutil",
    ]

    ql = question.lower()
    matching_bin = None
    for b in BINARIES:
        stem = b.replace(".exe", "")
        if stem in ql:
            matching_bin = stem
            break

    # Over-fetch candidates
    results = coll.query(query_texts=[question], n_results=max(TOP_K * 3, 15))
    docs, metas = results["documents"][0], results["metadatas"][0]

    # Re-rank: boost binary-specific chunks
    scored = []
    for rank, (doc, meta) in enumerate(zip(docs, metas)):
        src = meta.get("source", "").lower()
        doc_l = doc.lower()
        score = 0.0

        if matching_bin:
            if matching_bin in src:
                score += 100            # source filename match
            if matching_bin in doc_l:
                score += 20             # text mention

        if "lolbin" in src:
            score += 5                  # prefer LOLBin notes generally

        score -= rank * 0.01            # preserve base ranking for ties
        scored.append((score, doc, meta))

    scored.sort(key=lambda x: -x[0])
    top = scored[:TOP_K]
    return [t[1] for t in top], [t[2] for t in top]
def ask_llm(question, context):
    user_prompt = f"""Context from the knowledge base:

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

def answer(question):
    print(f"\n🔍 Question: {question}\n")
    print("⏳ Retrieving relevant notes...")
    docs, metas = query_rag(question)
    print(f"✓ Retrieved {len(docs)} chunks")

    print("🧠 Generating answer...\n")
    context = build_context(docs, metas)
    reply = ask_llm(question, context)

    print("=" * 72)
    print(reply)
    print("=" * 72)
    print("\n📚 Sources consulted:")
    seen = set()
    for meta in metas:
        src = meta.get("source", "unknown")
        if src not in seen:
            seen.add(src)
            print(f"  - {src}")

def interactive():
    print("LOTL Assistant (Alpha). Type 'exit' to quit.\n")
    while True:
        try:
            q = input("You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            break
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