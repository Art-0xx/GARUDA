---
type: campaign
scenario_id: 237
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using esentutl to collect database files.

## Threat Description
Using esentutl to collect database files.

## Attack Command
```
esentutl /y %windir%\System32\config\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).edb /d $(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).edb)
```

## Detection Logic
Monitor esentutl: `wmic process where name='esentutl.exe' get commandline | findstr edb`; Event ID 4663.

## Mitigation
Restrict esentutl: `icacls %windir%\System32\esentutl.exe /deny Everyone:RX`; Protect database files: `icacls %windir%\System32\config /deny Everyone:R`.

## AI Training Prompt
Train AI to detect esentutl database collection and suggest file protections.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
