---
type: campaign
scenario_id: 356
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with Azure metadata service for C2.

## Threat Description
Using curl to communicate with Azure metadata service for C2.

## Attack Command
```
curl -H Metadata:true http://169.254.169.254/metadata/instance?api-version=$(cat /dev/urandom | tr -dc '0-9' | head -c 4)-$(cat /dev/urandom | tr -dc '0-9' | head -c 2)-$(cat /dev/urandom | tr -dc '0-9' | head -c 2) -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).json
```

## Detection Logic
Monitor curl metadata access: `ps aux | grep curl | grep 169.254.169.254`; Network traffic: `tcpdump -i any host 169.254.169.254`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block metadata access: `iptables -A OUTPUT -d 169.254.169.254 -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via Azure metadata service by analyzing HTTP headers, metadata endpoint access, and file creation patterns; recommend network filtering.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
