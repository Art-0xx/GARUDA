---
type: campaign
scenario_id: 333
tactic: Collection
technique: "T1005: Data from Local System"
technique_id: T1005
tags: [campaign, lotl, collection]
---

# Using PowerShell to collect system motherboard information.

## Threat Description
Using PowerShell to collect system motherboard information.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-CimInstance -ClassName Win32_BaseBoard | Out-File C:\$(echo mb$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor motherboard collection: `wmic process where name='powershell.exe' get commandline | findstr Win32_BaseBoard`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Audit file creation: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell motherboard information collection and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1005: https://attack.mitre.org/techniques/T1005/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
