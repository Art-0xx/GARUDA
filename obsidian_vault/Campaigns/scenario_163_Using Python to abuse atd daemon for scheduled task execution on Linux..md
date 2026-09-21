---
type: campaign
scenario_id: 163
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse atd daemon for scheduled task execution on Linux.

## Threat Description
Using Python to abuse atd daemon for scheduled task execution on Linux.

## Attack Command
```
python -c "import os; os.system('echo \"bash -c \\\"/tmp/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\\\"\" | at now + 1 minute')"
```

## Detection Logic
Monitor atd jobs: `atq | grep bash`; Audit atd: `auditctl -w /var/spool/at -p wa`.

## Mitigation
Restrict atd: `systemctl disable atd`; Restrict at jobs: `chmod 700 /usr/bin/at`.

## AI Training Prompt
Train AI to detect atd task scheduling and suggest service restrictions.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
