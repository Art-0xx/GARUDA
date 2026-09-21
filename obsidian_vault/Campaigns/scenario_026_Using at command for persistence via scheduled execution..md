---
type: campaign
scenario_id: 26
tactic: Persistence
technique: "T1053.002: At (Windows)"
technique_id: T1053.002
tags: [campaign, lotl, persistence]
---

# Using at command for persistence via scheduled execution.

## Threat Description
Using at command for persistence via scheduled execution.

## Attack Command
```
at $(date +%H:%M -d '+1 minute') cmd /c powershell -c 'I$(echo payload | base64 -w0)'
```

## Detection Logic
Monitor at commands: `at | findstr cmd`; Event ID 4698.

## Mitigation
Disable at command: `sc config schedule start= disabled`; Restrict task scheduling: `icacls %windir%\System32\at.exe /deny Everyone:RX`.

## AI Training Prompt
Train AI to detect at command scheduling and suggest service restrictions.

## References
- MITRE ATT&CK T1053.002: https://attack.mitre.org/techniques/T1053/002/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
