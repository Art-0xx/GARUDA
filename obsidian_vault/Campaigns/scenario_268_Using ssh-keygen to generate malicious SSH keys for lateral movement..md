---
type: campaign
scenario_id: 268
tactic: Lateral Movement
technique: "T1021.004: Remote Services: SSH"
technique_id: T1021.004
tags: [campaign, lotl, lateral_movement]
---

# Using ssh-keygen to generate malicious SSH keys for lateral movement.

## Threat Description
Using ssh-keygen to generate malicious SSH keys for lateral movement.

## Attack Command
```
ssh-keygen -t rsa -f /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) -N '' && cat /tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).pub >> ~/.ssh/authorized_keys
```

## Detection Logic
Monitor ssh-keygen: `ps aux | grep ssh-keygen | grep tmp`; Audit SSH key changes: `auditctl -w ~/.ssh/authorized_keys -p wa`.

## Mitigation
Restrict ssh-keygen: `chmod 700 /usr/bin/ssh-keygen`; Protect SSH keys: `chmod 600 ~/.ssh/authorized_keys`.

## AI Training Prompt
Train AI to detect ssh-keygen key generation and suggest SSH key protections.

## References
- MITRE ATT&CK T1021.004: https://attack.mitre.org/techniques/T1021/004/
- CWE-284: https://cwe.mitre.org/data/definitions/284.html
