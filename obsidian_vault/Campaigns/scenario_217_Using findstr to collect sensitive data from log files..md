---
type: campaign
scenario_id: 217
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using findstr to collect sensitive data from log files.

## Threat Description
Using findstr to collect sensitive data from log files.

## Attack Command
```
findstr /s /i password C:\Logs\*.log > $(echo data$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)
```

## Detection Logic
Monitor findstr: `wmic process where name='findstr.exe' get commandline | findstr password`; Event ID 4663.

## Mitigation
Restrict findstr: `icacls %windir%\System32\findstr.exe /deny Everyone:RX`; Protect log files: `icacls C:\Logs /deny Everyone:R`.

## AI Training Prompt
Train AI to detect findstr log data collection and suggest file protections.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
