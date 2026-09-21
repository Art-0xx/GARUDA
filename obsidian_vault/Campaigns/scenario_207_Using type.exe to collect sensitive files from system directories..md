---
type: campaign
scenario_id: 207
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using type.exe to collect sensitive files from system directories.

## Threat Description
Using type.exe to collect sensitive files from system directories.

## Attack Command
```
type %windir%\System32\drivers\etc\hosts > $(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor type: `wmic process where name='type.exe' get commandline | findstr hosts`; Event ID 4663.

## Mitigation
Restrict type: `icacls %windir%\System32\type.exe /deny Everyone:RX`; Protect sensitive files: `icacls %windir%\System32\drivers\etc\hosts /deny Everyone:R`.

## AI Training Prompt
Train AI to detect type.exe data collection and suggest file protections.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
