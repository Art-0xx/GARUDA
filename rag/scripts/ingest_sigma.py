"""
Convert Sigma detection rules (YAML) into Obsidian markdown notes.
Filters to keep rules relevant to LOTL / LOLBins / common attack techniques.
"""

import re
import yaml
from pathlib import Path

# ============ CONFIG ============
SIGMA_SRC = Path(r"D:\GARUDA\sigma-rules\rules")
VAULT_OUT = Path(r"D:\GARUDA\obsidian_vault\Detection_Rules")
# ================================

# Keywords that make a Sigma rule relevant to our project
LOTL_KEYWORDS = [
    # Windows LOLBins
    "certutil", "mshta", "rundll32", "regsvr32", "wmic", "powershell",
    "bitsadmin", "msbuild", "installutil", "schtasks", "vssadmin",
    "wbadmin", "nslookup", "netsh", "cmstp", "cscript", "wscript",
    "xcopy", "reg.exe", "cmdkey", "cmdl32", "esentutl", "eventvwr",
    "expand", "extrac32", "findstr", "forfiles", "fsutil", "gpscript",
    "certoc", "certreq", "pcalua", "pcwrun", "mavinject", "msiexec",
    "odbcconf", "regasm", "regsvcs", "sc.exe", "scriptrunner",
    "tttracer", "verclsid", "wsl", "wsreset", "xwizard",
    # Unix binaries (GTFOBins)
    "curl", "wget", "bash", "ncat", "netcat", "socat", "python",
    "perl", "ruby", "nc ", "nmap", "ssh",
    # General attack concepts
    "credential dumping", "lsass", "mimikatz", "kerberoast",
    "dll injection", "process injection", "lateral movement",
    "persistence", "defense evasion", "command and control",
    "exfiltration", "privilege escalation", "uac bypass",
    "scheduled task", "wmi event", "registry run",
    "suspicious", "malicious", "attacker", "adversary",
]

VAULT_OUT.mkdir(parents=True, exist_ok=True)

count = 0
skipped = 0
filtered = 0


def is_relevant(rule: dict) -> bool:
    """Check if a rule mentions LOTL-relevant keywords."""
    # Combine all text fields
    text = " ".join([
        str(rule.get("title", "")),
        str(rule.get("description", "")),
        str(rule.get("detection", "")),
    ]).lower()
    
    return any(kw in text for kw in LOTL_KEYWORDS)


def rule_id_from_path(fp: Path) -> str:
    """Use the filename (minus .yml) as a unique ID."""
    return fp.stem


for sigma_file in SIGMA_SRC.rglob("*.yml"):
    try:
        text = sigma_file.read_text(encoding="utf-8")
    except Exception as e:
        skipped += 1
        continue

    try:
        rule = yaml.safe_load(text)
    except Exception:
        skipped += 1
        continue

    if not isinstance(rule, dict):
        skipped += 1
        continue

    if not is_relevant(rule):
        filtered += 1
        continue

    # Extract fields
    title = rule.get("title", "Untitled Rule")
    rule_id = rule.get("id", rule_id_from_path(sigma_file))
    status = rule.get("status", "")
    description = rule.get("description", "")
    level = rule.get("level", "")
    logsource = rule.get("logsource", {})
    detection = rule.get("detection", {})
    falsepositives = rule.get("falsepositives", [])
    tags = rule.get("tags", [])
    references = rule.get("references", [])
    author = rule.get("author", "")
    date = rule.get("date", "")

    # Platform detection from path
    rel_path = str(sigma_file.relative_to(SIGMA_SRC)).replace("\\", "/")
    platform = rel_path.split("/")[0] if "/" in rel_path else "unknown"

    # MITRE technique tags (filter only attack.* tags)
    mitre_tags = [t for t in tags if isinstance(t, str) and t.startswith("attack.t")]

    # Build note
    lines = []
    lines.append("---")
    lines.append("type: detection_rule")
    lines.append(f"title: \"{title}\"")
    lines.append(f"rule_id: {rule_id}")
    lines.append(f"platform: {platform}")
    lines.append(f"level: {level}")
    lines.append(f"status: {status}")
    lines.append(f"tags: [detection, sigma, {platform}]")
    if mitre_tags:
        lines.append(f"mitre_tags: [{', '.join(mitre_tags)}]")
    lines.append("---")
    lines.append("")
    lines.append(f"# {title}")
    lines.append("")

    if description:
        lines.append("## Description")
        lines.append(description.strip())
        lines.append("")

    # Log source
    if logsource:
        lines.append("## Log Source")
        lines.append("```yaml")
        lines.append(yaml.dump(logsource, default_flow_style=False).strip())
        lines.append("```")
        lines.append("")

    # Detection logic
    if detection:
        lines.append("## Detection Logic")
        lines.append("```yaml")
        lines.append(yaml.dump(detection, default_flow_style=False).strip())
        lines.append("```")
        lines.append("")

    # MITRE tags
    if mitre_tags:
        lines.append("## MITRE ATT&CK")
        for tag in mitre_tags:
            tech_id = tag.replace("attack.", "").upper()
            lines.append(f"- {tech_id}")
        lines.append("")

    # False positives
    if falsepositives:
        lines.append("## False Positives")
        for fp_item in falsepositives:
            lines.append(f"- {fp_item}")
        lines.append("")

    # References
    if references:
        lines.append("## References")
        for ref in references[:5]:  # limit to 5
            lines.append(f"- {ref}")
        lines.append("")

    # Metadata
    lines.append("## Metadata")
    if author:
        lines.append(f"- **Author:** {author}")
    if date:
        lines.append(f"- **Date:** {date}")
    lines.append(f"- **Rule ID:** `{rule_id}`")
    lines.append(f"- **Source file:** `{rel_path}`")
    lines.append("")

    # Write
    safe_name = re.sub(r"[^\w\-\. ]", "_", title)[:100]
    out_file = VAULT_OUT / f"{safe_name}.md"
    out_file.write_text("\n".join(lines), encoding="utf-8")
    count += 1

print(f"✅ Generated {count} detection rule notes in {VAULT_OUT}")
print(f"   Skipped (parse errors): {skipped}")
print(f"   Filtered out (not LOTL-relevant): {filtered}")