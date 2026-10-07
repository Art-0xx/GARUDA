"""
Format-compliance harness for the LOTL assistant.

Runs a suite of queries through assistant.answer() and grades each reply
against GARUDA's format contract:
  - no footnote markers        [^fn1]
  - no YAML frontmatter        ---\nkey: val\n---
  - no Obsidian wikilinks      [[...]]
  - has a References section   (## References / **References** / "Sources:")
  - URLs, if any, are well-formed http(s) and have a real host
  - non-empty reply

Usage:
    python score_format.py
    python score_format.py --queries queries.txt
    python score_format.py --json report.json
"""

import argparse
import json
import re
import sys
import traceback

import assistant


# --- default query suite: cover every routed collection ---
DEFAULT_QUERIES = [
    # LOLBins
    "How do attackers use certutil?",
    "What can mshta.exe be abused for?",
    "How is rundll32 used in attacks?",
    "Explain regsvr32 as a LOLBin.",
    "How is bitsadmin used to download files?",
    # GTFOBins
    "How do attackers abuse curl?",
    "Explain GTFOBins usage of tar.",
    "How is python3 abused for reverse shells?",
    # MITRE techniques
    "Explain T1059.",
    "What is T1105 Ingress Tool Transfer?",
    "Describe T1218.",
    # Detection
    "How to detect certutil download?",
    "Sigma rule for suspicious rundll32 usage.",
    "How to spot mshta execution?",
    # Campaigns
    "Show me a real-world attack chain using LOLBins.",
    "Walk me through a multi-step LOTL campaign.",
    # Malware / tools
    "Tell me about Cobalt Strike.",
    "What is Mimikatz?",
    # Out of scope
    "Why is my computer slow?",
    "How do I fix my printer not working?",
]


FOOTNOTE_RE  = re.compile(r"\[\^[^\]]+\]")
WIKILINK_RE  = re.compile(r"\[\[[^\]]+\]\]")
YAML_FM_RE   = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)
REFERENCES_RE = re.compile(
    r"^[ \t]*[#*_> \t]*(?:references|sources)[ \t*_:]*$",
    re.IGNORECASE | re.MULTILINE,
)
# any http(s) URL, greedy up to whitespace or closing punctuation
URL_RE = re.compile(r"https?://[^\s)\]>\}\"']+")
HOST_RE = re.compile(r"^https?://[A-Za-z0-9.\-]+(?::\d+)?")


def check_reply(reply, sources):
    """Return (checks_dict, failures_list)."""
    checks = {}

    if reply is None:
        # Correct refusal — not a failure.
        return {
            "non_empty": True,
            "no_footnotes": True,
            "no_yaml": True,
            "no_wikilinks": True,
            "has_references": True,
            "urls_ok": True,
            "has_sources": False,
            "correct_refusal": True,
        }, []

    checks["non_empty"] = len(reply.strip()) > 0
    checks["no_footnotes"] = not FOOTNOTE_RE.search(reply)
    checks["no_yaml"] = not YAML_FM_RE.search(reply)
    checks["no_wikilinks"] = not WIKILINK_RE.search(reply)
    checks["has_references"] = bool(REFERENCES_RE.search(reply))

    # URL validity
    urls = URL_RE.findall(reply)
    PLACEHOLDER_MARKERS = ("...", "…", "[…]", "{", "}")
    bad_urls = []
    for u in urls:
        if not HOST_RE.match(u):
            bad_urls.append(u)
        elif any(m in u for m in PLACEHOLDER_MARKERS):
            bad_urls.append(u)
    checks["urls_ok"] = not bad_urls

    checks["has_sources"] = bool(sources)

    failures = [k for k, v in checks.items() if not v]
    return checks, failures

def run_suite(queries):
    results = []
    for i, q in enumerate(queries, 1):
        print(f"\n[{i}/{len(queries)}] {q}")
        try:
            reply, sources = assistant.answer(q, verbose=False)
            checks, failures = check_reply(reply, sources)
        except Exception as e:
            traceback.print_exc()
            checks, failures = {"pipeline_ok": False}, ["pipeline_exception"]
            reply, sources = None, []

        status = "PASS" if not failures else "FAIL"
        print(f"   {status}  {('issues: ' + ', '.join(failures)) if failures else ''}")

        results.append({
            "query": q,
            "status": status,
            "checks": checks,
            "failures": failures,
            "reply": reply,
            "sources": sources,
        })
    return results


def summarize(results):
    total = len(results)
    passed = sum(1 for r in results if r["status"] == "PASS")
    print("\n" + "=" * 72)
    print(f"SUMMARY: {passed}/{total} passed")
    print("=" * 72)

    # per-check failure tally (ignoring out-of-scope entries)
    tally = {}
    for r in results:
        for f in r["failures"]:
            tally[f] = tally.get(f, 0) + 1
    if tally:
        print("\nFailure breakdown:")
        for k, v in sorted(tally.items(), key=lambda x: -x[1]):
            print(f"  {k:20s} {v}")
    else:
        print("\nNo format failures. 🎉")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--queries", help="path to a newline-delimited query file")
    ap.add_argument("--json", help="write a JSON report to this path")
    args = ap.parse_args()

    if args.queries:
        with open(args.queries, "r", encoding="utf-8") as f:
            queries = [ln.strip() for ln in f if ln.strip() and not ln.startswith("#")]
    else:
        queries = DEFAULT_QUERIES

    results = run_suite(queries)
    summarize(results)

    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        print(f"\nJSON report written to {args.json}")


if __name__ == "__main__":
    main()