---
type: campaign
scenario_id: 49
tactic: Privilege Escalation
technique: "T1548.001: Setuid and Setgid"
technique_id: T1548.001
tags: [campaign, lotl, privilege_escalation]
---

# Abusing setuid binary on Linux to escalate privileges.

## Threat Description
Abusing setuid binary on Linux to escalate privileges.

## Attack Command
```
chmod u+s $(echo /tmp/evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)) && $(echo /tmp/evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8))
```

## Detection Logic
Monitor setuid changes: `find / -perm -4000`; Audit file changes: `auditctl -w /tmp -p wa`.

## Mitigation
Remove unnecessary setuid: `chmod u-s /tmp/*`; Restrict setuid: `sysctl -w fs.protected_regular=1`.

## AI Training Prompt
Train AI to detect setuid binary abuse and suggest file system protections.

## References
- MITRE ATT&CK T1548.001: https://attack.mitre.org/techniques/T1548/001/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
