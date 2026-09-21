---
type: campaign
scenario_id: 288
tactic: Lateral Movement
technique: "T1021.004: Remote Services: SSH"
technique_id: T1021.004
tags: [campaign, lotl, lateral_movement]
---

# Using sshpass to automate SSH authentication for lateral movement.

## Threat Description
Using sshpass to automate SSH authentication for lateral movement.

## Attack Command
```
sshpass -p $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) ssh $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com "bash -c '/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh'"
```

## Detection Logic
Monitor sshpass: `ps aux | grep sshpass | grep bash`; Monitor SSH traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict sshpass: `chmod 700 /usr/bin/sshpass`; Block SSH outbound: `iptables -A OUTPUT -p tcp --dport 22 -j DROP`.

## AI Training Prompt
Train AI to detect sshpass automated SSH and suggest SSH restrictions.

## References
- MITRE ATT&CK T1021.004: https://attack.mitre.org/techniques/T1021/004/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
