"""
Convert LOTL APT Red Team Dataset (JSONL) into Obsidian notes.
"""

import json
import re
from pathlib import Path

# ============ CONFIG ============
DATASET_DIR = Path(r"D:\GARUDA\lotl_dataset")
VAULT_OUT   = Path(r"D:\GARUDA\obsidian_vault\Campaigns")
# ================================

VAULT_OUT.mkdir(parents=True, exist_ok=True)

def extract_technique_id(technique_str):
    m = re.search(r"T\d{4}(\.\d{3})?", str(technique_str))
    return m.group(0) if m else ""

def main():
    jsonl_files = list(DATASET_DIR.glob("*.jsonl"))
    if not jsonl_files:
        print(f"❌ No .jsonl file found in {DATASET_DIR}")
        return

    jsonl_path = jsonl_files[0]
    print(f"Reading: {jsonl_path}")

    count = 0
    skipped = 0

    with jsonl_path.open("r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue

            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                skipped += 1
                continue

            scenario_id = obj.get("id", line_num)
            tactic = str(obj.get("tactic", ""))
            technique = str(obj.get("technique", ""))
            threat = str(obj.get("threat", ""))
            command = str(obj.get("command", ""))
            detection = str(obj.get("detection", ""))
            mitigation = str(obj.get("mitigation", ""))
            ai_prompt = str(obj.get("ai_training_prompt", ""))
            references = obj.get("references", [])

            if not threat and not command:
                skipped += 1
                continue

            tech_id = extract_technique_id(technique)

            lines = []
            lines.append("---")
            lines.append("type: campaign")
            lines.append(f"scenario_id: {scenario_id}")
            lines.append(f"tactic: {tactic}")
            lines.append(f"technique: \"{technique}\"")
            lines.append(f"technique_id: {tech_id}")
            lines.append(f"tags: [campaign, lotl, {tactic.lower().replace(' ', '_')}]")
            lines.append("---")
            lines.append("")

            title = (threat[:80] if threat else f"Scenario {scenario_id}")
            lines.append(f"# {title}")
            lines.append("")

            if threat:
                lines.append("## Threat Description")
                lines.append(threat)
                lines.append("")

            if command:
                lines.append("## Attack Command")
                lines.append("```")
                lines.append(command.strip())
                lines.append("```")
                lines.append("")

            if detection:
                lines.append("## Detection Logic")
                lines.append(detection.strip())
                lines.append("")

            if mitigation:
                lines.append("## Mitigation")
                lines.append(mitigation.strip())
                lines.append("")

            if ai_prompt:
                lines.append("## AI Training Prompt")
                lines.append(ai_prompt.strip())
                lines.append("")

            if references:
                lines.append("## References")
                for ref in references:
                    lines.append(f"- {ref}")
                lines.append("")

            safe = re.sub(r"[^\w\-\. ]", "_", title)[:80].strip()
            out_file = VAULT_OUT / f"scenario_{scenario_id:0>3}_{safe}.md"
            out_file.write_text("\n".join(lines), encoding="utf-8")
            count += 1

    print(f"✅ Generated {count} campaign notes in {VAULT_OUT}")
    print(f"   Skipped: {skipped}")

if __name__ == "__main__":
    main()