---
type: campaign
scenario_id: 312
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse gpresult for group policy reconnaissance.

## Threat Description
Using PowerShell to abuse gpresult for group policy reconnaissance.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; gpresult /R | Out-File C:\$(echo gp$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt)"
```

## Detection Logic
Monitor gpresult: `wmic process where name='gpresult.exe' get commandline | findstr /R`; Event ID 4663.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Audit file creation: `auditpol /set /subcategory:'File System' /success:enable`.

## AI Training Prompt
Train AI to detect PowerShell gpresult reconnaissance and suggest execution policy restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
