---
type: campaign
scenario_id: 97
tactic: Privilege Escalation
technique: "T1548.003: Sudo and Sudo Caching"
technique_id: T1548.003
tags: [campaign, lotl, privilege_escalation]
---

# Abusing sudoers file misconfiguration on Linux for privilege escalation.

## Threat Description
Abusing sudoers file misconfiguration on Linux for privilege escalation.

## Attack Command
```
echo "$(whoami) ALL=(ALL) NOPASSWD: /bin/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh" >> /etc/sudoers.d/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor sudoers changes: `cat /etc/sudoers.d/*`; Audit file changes: `auditctl -w /etc/sudoers.d -p wa`.

## Mitigation
Restrict sudoers writes: `chmod 440 /etc/sudoers.d/*`; Validate sudoers: `visudo -c`.

## AI Training Prompt
Train AI to detect sudoers misconfigurations and suggest file protections.

## References
- MITRE ATT&CK T1548.003: https://attack.mitre.org/techniques/T1548/003/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
