---
type: campaign
scenario_id: 277
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using PowerShell to collect process information.

## Threat Description
Using PowerShell to collect process information.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-Process | Out-File C:\$(echo proc$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor process collection: `wmic process where name='powershell.exe' get commandline | findstr Get-Process`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Audit file creation: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell process collection and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
