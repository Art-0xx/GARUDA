---
type: campaign
scenario_id: 141
tactic: Privilege Escalation
technique: "T1134.002: Create Process with Token"
technique_id: T1134.002
tags: [campaign, lotl, privilege_escalation]
---

# Using PowerShell to create process with stolen token for privilege escalation.

## Threat Description
Using PowerShell to create process with stolen token for privilege escalation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; $token = [System.Security.Principal.WindowsIdentity]::GetCurrent().Token; Start-Process -Token $token cmd.exe -ArgumentList '/c I$(echo malicious | base64 -w0)'"
```

## Detection Logic
Monitor token usage: `wmic process where name='powershell.exe' get commandline | findstr Token`; Event ID 4692.

## Mitigation
Enable token auditing: `auditpol /set /category:'System' /subcategory:'Security System Extension' /success:enable`; Use EDR for token abuse detection.

## AI Training Prompt
Train AI to detect token-based process creation and suggest auditing.

## References
- MITRE ATT&CK T1134.002: https://attack.mitre.org/techniques/T1134/002/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
