---
type: campaign
scenario_id: 332
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse tracert for network reconnaissance.

## Threat Description
Using PowerShell to abuse tracert for network reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; tracert $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com | Out-File C:\$(echo trace$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor tracert: `wmic process where name='tracert.exe' get commandline | findstr .com`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Audit file creation: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell tracert reconnaissance and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
