---
type: campaign
scenario_id: 232
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using dir to collect sensitive file listings.

## Threat Description
Using dir to collect sensitive file listings.

## Attack Command
```
dir C:\Users\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\Documents /s /b | findstr .docx > $(echo files$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor dir: `wmic process where name='dir.exe' get commandline | findstr docx`; Event ID 4663.

## Mitigation
Restrict dir: `icacls %windir%\System32\dir.exe /deny Everyone:RX`; Protect sensitive directories: `icacls C:\Users /deny Everyone:R`.

## AI Training Prompt
Train AI to detect dir file collection and suggest directory protections.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
