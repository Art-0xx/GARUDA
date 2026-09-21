---
type: campaign
scenario_id: 33
tactic: Privilege Escalation
technique: "T1548.003: Sudo and Sudo Caching"
technique_id: T1548.003
tags: [campaign, lotl, privilege_escalation]
---

# Abusing sudo caching on Linux to execute privileged commands.

## Threat Description
Abusing sudo caching on Linux to execute privileged commands.

## Attack Command
```
sudo -n $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh -c 'whoami > /root/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).txt'
```

## Detection Logic
Monitor sudo logs: `journalctl -u sudo`; Check for non-standard sudo commands.

## Mitigation
Disable sudo caching: `echo 'Defaults timestamp_timeout=0' >> /etc/sudoers`; Restrict sudo access: `visudo`.

## AI Training Prompt
Train AI to detect sudo caching abuse and suggest timeout configurations.

## References
- MITRE ATT&CK T1548.003: https://attack.mitre.org/techniques/T1548/003/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
