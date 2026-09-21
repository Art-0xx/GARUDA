---
type: campaign
scenario_id: 125
tactic: Privilege Escalation
technique: "T1548.001: Setuid and Setgid"
technique_id: T1548.001
tags: [campaign, lotl, privilege_escalation]
---

# Abusing setgid binary on Linux to escalate privileges.

## Threat Description
Abusing setgid binary on Linux to escalate privileges.

## Attack Command
```
chmod g+s $(echo /tmp/evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) && $(echo /tmp/evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))
```

## Detection Logic
Monitor setgid changes: `find / -perm -2000`; Audit file changes: `auditctl -w /tmp -p wa`.

## Mitigation
Remove unnecessary setgid: `chmod g-s /tmp/*`; Restrict setgid: `sysctl -w fs.protected_regular=1`.

## AI Training Prompt
Train AI to detect setgid binary abuse and suggest file system protections.

## References
- MITRE ATT&CK T1548.001: https://attack.mitre.org/techniques/T1548/001/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
