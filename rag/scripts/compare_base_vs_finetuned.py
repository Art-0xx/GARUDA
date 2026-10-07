"""
Compare base model vs fine-tuned model through the real pipeline (RAG + prompt).
Runs the same 5 queries through both and prints side-by-side.
"""
import os
import sys
sys.path.insert(0, r"D:\GARUDA\rag\scripts")

os.environ["GARUDA_MODEL"] = "lotl-deepseek"
import assistant

QUERIES = [
    "How do attackers use certutil?",
    "How to detect mshta execution?",
    "Explain T1059.",
    "Sigma rule for suspicious rundll32 usage.",
    "What is Mimikatz?",
]

def run_with_model(model_name):
    # point assistant at the given model
    assistant.LLM_MODEL = model_name
    assistant._ollama_client = None
    results = []
    for q in QUERIES:
        reply, sources = assistant.answer(q, verbose=False)
        results.append((q, reply, sources))
    return results

print("Running with BASE model (deepseek-r1:14b)...")
try:
    base = run_with_model("deepseek-r1:14b")
except Exception as e:
    print(f"Base model failed: {e}")
    print("Install first: ollama pull deepseek-r1:14b")
    sys.exit(1)

print("\nRunning with FINE-TUNED model (lotl-deepseek)...")
ft = run_with_model("lotl-deepseek-v2")

for i, q in enumerate(QUERIES):
    print("\n" + "=" * 80)
    print(f"QUERY: {q}")
    print("=" * 80)
    print("\n--- BASE MODEL ---")
    print((base[i][1] or "(none)")[:800])
    print("\n--- FINE-TUNED MODEL ---")
    print((ft[i][1] or "(none)")[:800])