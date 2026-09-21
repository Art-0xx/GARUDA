---
type: campaign
scenario_id: 218
tactic: Lateral Movement
technique: "T1021.004: Remote Services: SSH"
technique_id: T1021.004
tags: [campaign, lotl, lateral_movement]
---

# Using ssh to execute commands on remote Linux host.

## Threat Description
Using ssh to execute commands on remote Linux host.

## Attack Command
```
ssh $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com "bash -c '/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh'"
```

## Detection Logic
Monitor ssh: `ps aux | grep ssh | grep bash`; Monitor SSH traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict ssh: `chmod 700 /usr/bin/ssh`; Block SSH outbound: `iptables -A OUTPUT -p tcp --dport 22 -j DROP`.

## AI Training Prompt
Train AI to detect SSH remote execution and suggest firewall rules.

## References
- MITRE ATT&CK T1021.004: https://attack.mitre.org/techniques/T1021/004/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
