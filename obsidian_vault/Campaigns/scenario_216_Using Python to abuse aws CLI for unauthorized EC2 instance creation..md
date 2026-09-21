---
type: campaign
scenario_id: 216
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse aws CLI for unauthorized EC2 instance creation.

## Threat Description
Using Python to abuse aws CLI for unauthorized EC2 instance creation.

## Attack Command
```
python -c "import os; os.system('aws ec2 run-instances --image-id ami-$(cat /dev/urandom | tr -dc 'a-f0-9' | head -c 8) --count 1 --instance-type t2.micro --user-data file://$(echo evil$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).sh)')"
```

## Detection Logic
Monitor aws CLI: `wmic process where name='python.exe' get commandline | findstr aws`; Audit AWS logs: CloudTrail.

## Mitigation
Restrict aws CLI: `icacls %userprofile%\.aws /deny Everyone:RX`; Enforce MFA: AWS IAM policies.

## AI Training Prompt
Train AI to detect unauthorized aws CLI execution and suggest MFA enforcement.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
