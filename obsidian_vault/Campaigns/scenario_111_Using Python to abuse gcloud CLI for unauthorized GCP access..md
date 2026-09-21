---
type: campaign
scenario_id: 111
tactic: Execution
technique: "T1059.006: Python"
technique_id: T1059.006
tags: [campaign, lotl, execution]
---

# Using Python to abuse gcloud CLI for unauthorized GCP access.

## Threat Description
Using Python to abuse gcloud CLI for unauthorized GCP access.

## Attack Command
```
python -c "import os; os.system('gcloud compute instances list --filter=\"name:$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)\" --format=\"value(name)\" | xargs -I {} gcloud compute ssh {} --command=\"bash -c \"$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)sh\""')"
```

## Detection Logic
Monitor gcloud CLI: `wmic process where name='python.exe' get commandline | findstr gcloud`; Audit GCP logs: Cloud Audit Logs.

## Mitigation
Restrict gcloud CLI: `icacls %userprofile%\.config\gcloud /deny Everyone:RX`; Require MFA: GCP IAM policies.

## AI Training Prompt
Train AI to detect unauthorized gcloud CLI execution and suggest MFA enforcement.

## References
- MITRE ATT&CK T1059.006: https://attack.mitre.org/techniques/T1059/006/
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
