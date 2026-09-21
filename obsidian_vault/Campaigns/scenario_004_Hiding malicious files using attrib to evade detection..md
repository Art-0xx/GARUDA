---
type: campaign
scenario_id: 4
tactic: Defense Evasion
technique: "T1564.001: Hidden Files and Directories"
technique_id: T1564.001
tags: [campaign, lotl, defense_evasion]
---

# Hiding malicious files using attrib to evade detection.

## Threat Description
Hiding malicious files using attrib to evade detection.

## Attack Command
```
attrib +h +s $(echo payload$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 10).exe)
```

## Detection Logic
Search for hidden/system files: `dir /a:h /s`; Monitor file creation events: Event ID 4663.

## Mitigation
Disable hidden attributes: `attrib -h -s *.* /s /d`; Enable file system auditing.

## AI Training Prompt
Train AI to detect hidden file creation and suggest auditing configurations.

## References
- MITRE ATT&CK T1564.001: https://attack.mitre.org/techniques/T1564/001/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
