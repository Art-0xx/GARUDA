---
type: campaign
scenario_id: 308
tactic: Collection
technique: "T1119: Automated Collection"
technique_id: T1119
tags: [campaign, lotl, collection]
---

# Using PowerShell to collect system logon events.

## Threat Description
Using PowerShell to collect system logon events.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Get-WinEvent -LogName Security -FilterXPath '*[System[EventID=4624]]' | Out-File C:\$(echo logon$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor logon event collection: `wmic process where name='powershell.exe' get commandline | findstr Get-WinEvent`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Protect event logs: `icacls %windir%\System32\winevt\Logs /deny Everyone:R`.

## AI Training Prompt
Train AI to detect PowerShell logon event collection and suggest log protections.

## References
- MITRE ATT&CK T1119: https://attack.mitre.org/techniques/T1119/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
