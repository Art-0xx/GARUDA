"""
Evaluate retrieval quality on 20 diverse queries.
Shows: collection used, entity extracted, top sources.
"""

from assistant import classify_query, retrieve

QUERIES = [
    # Binary-specific (should go to lolbins)
    "How do attackers use certutil for downloading files?",
    "What is mshta used for?",
    "How to detect rundll32 abuse?",
    "regsvr32 scriptlet execution",
    "bitsadmin download techniques",
    "wmic lateral movement",
    "cmstp UAC bypass",
    "esentutl credential theft",
    # Technique-specific (should go to techniques)
    "What is T1218.011?",
    "Explain T1059.001",
    "T1564.004 alternate data streams",
    # Tactic-level (should go to tactics)
    "defense evasion techniques",
    "credential dumping tactics",
    # Malware
    "Tell me about FlawedAmmyy malware",
    # Natural language (hard)
    "why does Windows Defender flag rundll32",
    "how do attackers hide files",
    "how to persist on a Windows machine",
    "living off the land basics",
    "built-in tool to download files",
    "what does the attacker do after initial access",
]

def main():
    print(f"{'#':<3} {'Coll':<11} {'Entity':<10} Query / Top Sources")
    print("=" * 100)
    for i, q in enumerate(QUERIES, 1):
        coll, entity = classify_query(q)
        docs, metas = retrieve(q, coll, entity, top_k=3)
        srcs = [m.get("source", "?").split("\\")[-1] for m in metas]
        print(f"{i:<3} {coll:<11} {str(entity or ''):<10} {q[:60]}")
        for s in srcs:
            print(f"    → {s}")
        print()

if __name__ == "__main__":
    main()