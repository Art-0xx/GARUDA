"""
Convert GTFOBins YAML files into Obsidian markdown notes.

Source:  D:/GARUDA/gtfobins-source/_gtfobins/<binary>
Format:  Plain YAML files (no extension) with a 'functions:' top-level key
Output:  D:\GARUDA\obsidian_vault\GTFOBins\<binary>.md
"""

import yaml
from pathlib import Path

# --- Config ---
GTFO_SRC = Path(r"D:\GARUDA\gtfobins-source\_gtfobins")
VAULT_OUT = Path(r"D:\GARUDA\obsidian_vault\GTFOBins")
# --------------

VAULT_OUT.mkdir(parents=True, exist_ok=True)

count = 0
skipped = 0

for gtfo_file in GTFO_SRC.iterdir():
    if gtfo_file.is_dir():
        continue

    try:
        text = gtfo_file.read_text(encoding="utf-8")
    except Exception as e:
        print(f"skip {gtfo_file.name}: {e}")
        skipped += 1
        continue

    # Some files may use multi-document YAML (---)
    try:
        docs = list(yaml.safe_load_all(text))
    except Exception as e:
        print(f"YAML parse fail {gtfo_file.name}: {e}")
        skipped += 1
        continue

    # Merge all docs
    merged = {}
    for d in docs:
        if isinstance(d, dict):
            merged.update(d)

    functions = merged.get("functions") if isinstance(merged, dict) else None
    if not functions:
        skipped += 1
        continue

    binary_name = gtfo_file.name  # e.g., "bash", "curl", "wget"

    lines = []
    lines.append("---")
    lines.append("type: gtfobin")
    lines.append(f"name: {binary_name}")
    lines.append("platform: Unix")
    lines.append(f"functions: [{', '.join(str(k) for k in functions.keys())}]")
    lines.append("tags: [gtfobin, unix, lotl]")
    lines.append("---")
    lines.append("")
    lines.append(f"# {binary_name}")
    lines.append("")

    for func_name, examples in functions.items():
        if not isinstance(examples, list):
            continue
        lines.append(f"## {func_name}")
        lines.append("")

        for ex in examples:
            if not isinstance(ex, dict):
                continue

            code = ex.get("code", "")
            desc = ex.get("comment", "")
            contexts = ex.get("contexts", {})

            if code:
                lines.append("```bash")
                lines.append(str(code).strip())
                lines.append("```")
            if desc:
                lines.append(f"_{str(desc).strip()}_")

            # Contexts are usually a dict of {sudo: null, suid: null, ...}
            if isinstance(contexts, dict) and contexts:
                ctx_list = [k for k in contexts.keys() if contexts.get(k) is not None or contexts.get(k) is None]
                # Simplify: just take the keys
                ctx_list = list(contexts.keys())
                if ctx_list:
                    lines.append(f"**Contexts:** {', '.join(ctx_list)}")
            elif isinstance(contexts, list) and contexts:
                lines.append(f"**Contexts:** {', '.join(str(c) for c in contexts)}")

            lines.append("")

    out_file = VAULT_OUT / f"{binary_name}.md"
    out_file.write_text("\n".join(lines), encoding="utf-8")
    count += 1

print(f"✅ Generated {count} GTFOBins notes in {VAULT_OUT}")
print(f"   Skipped: {skipped} files")