---
type: campaign
scenario_id: 261
tactic: Execution
technique: "T1059.001: PowerShell"
technique_id: T1059.001
tags: [campaign, lotl, execution]
---

# Using PowerShell to abuse schtasks for persistent task creation.

## Threat Description
Using PowerShell to abuse schtasks for persistent task creation.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; schtasks /create /tn $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) /tr 'powershell -c ''I$(echo malicious | base64 -w0)''' /sc daily /f"
```

## Detection Logic
Monitor schtasks: `wmic process where name='schtasks.exe' get commandline | findstr create`; Event ID 4698.

## Mitigation
Restrict schtasks: `icacls %windir%\System32\schtasks.exe /deny Everyone:RX`; Audit task creation: `auditpol /set /subcategory:'Security System Extension' /success:enable`.

## AI Training Prompt
Train AI to detect schtasks abuse and suggest task auditing.

## References
- MITRE ATT&CK T1059.001: https://attack.mitre.org/techniques/T1059/001/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
