---
type: campaign
scenario_id: 103
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse wbadmin for malicious backup script execution.

## Threat Description
Using PowerShell to abuse wbadmin for malicious backup script execution.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; wbadmin START BACKUP -backupTarget:C: -include:C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).ps1) -quiet"
```

## Detection Logic
Monitor wbadmin: `wmic process where name='wbadmin.exe' get commandline`; Event ID 4688.

## Mitigation
Restrict wbadmin: `icacls %windir%\System32\wbadmin.exe /deny Everyone:RX`; Audit backup operations: Event ID 8220.

## AI Training Prompt
Train AI to detect wbadmin abuse and suggest access restrictions.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
