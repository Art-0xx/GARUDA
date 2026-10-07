"""
Test the FULL RAG pipeline with multi-turn conversation.
"""
import sys
import ollama
sys.path.insert(0, r"D:\GARUDA\rag\scripts")
import assistant

conversation = [
    "How do attackers use certutil?",
    "What about detection for that?",
    "Show me a real Sigma rule.",
    "Now tell me about mshta instead.",
    "How does that compare to certutil?",
]

history = []

for i, q in enumerate(conversation, 1):
    print(f"\n{'='*72}")
    print(f"Turn {i}")
    print(f"{'='*72}")
    print(f"USER: {q}\n")

    # REWRITE using history
    search_q = assistant.rewrite_query(q, history)
    if search_q != q:
        print(f"🔄 Rewritten: {search_q}")
    else:
        print(f"🔄 (no rewrite)")
    print()

    # Retrieve using the REWRITTEN query
    collection, entity = assistant.classify_query(search_q)
    print(f"📂 Collection: {collection} | Entity: {entity}")
    docs, metas = assistant.retrieve(search_q, collection, entity, top_k=5)
    context = assistant.build_context(docs, metas)

    # Generate using the ORIGINAL question + history
    user_prompt = f"""Retrieved from collection '{collection}'.

Context:

{context}

---

Question: {q}

Answer using only the context above."""

    messages = [{"role": "system", "content": assistant.SYSTEM_PROMPT}]
    messages.extend(history)
    messages.append({"role": "user", "content": user_prompt})

    resp = ollama.chat(
        model=assistant.LLM_MODEL,
        messages=messages,
        options={"num_predict": 1024},
    )

    msg = getattr(resp, "message", None) or resp["message"]
    content = getattr(msg, "content", "") or ""
    thinking = getattr(msg, "thinking", "") or ""
    raw = content if content.strip() else thinking
    reply = assistant.clean_reply(raw)
    reply = assistant.ensure_references(reply, metas)

    print(f"\nASSISTANT:\n{reply[:1200]}")
    print(f"\nSources retrieved: {sorted(set(m.get('source') for m in metas))}")

    history.append({"role": "user", "content": q})
    history.append({"role": "assistant", "content": reply})