"""
Test the fine-tuned model's multi-turn conversation ability.
No RAG, no format scoring — just raw model behavior over a conversation.
"""
import ollama

MODEL = "deepseek-r1:14b"

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
    print(f"USER: {q}")

    history.append({"role": "user", "content": q})

    resp = ollama.chat(model=MODEL, messages=history)
    msg = resp.message
    reply = (msg.content or "").strip() or (msg.thinking or "").strip()

    # strip think blocks for readability
    import re
    reply_clean = re.sub(r"<think>.*?</think>", "", reply, flags=re.DOTALL)
    reply_clean = re.sub(r"</?think>", "", reply_clean).strip()
    if not reply_clean:
        reply_clean = reply  # keep if it was all in thinking

    print(f"\nASSISTANT:\n{reply_clean[:1200]}")
    if len(reply_clean) > 1200:
        print(f"\n... [{len(reply_clean)-1200} more chars]")

    history.append({"role": "assistant", "content": reply_clean})