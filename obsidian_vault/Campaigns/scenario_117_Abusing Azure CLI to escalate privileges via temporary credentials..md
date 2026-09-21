---
type: campaign
scenario_id: 117
tactic: Privilege Escalation
technique: "T1548.005: Temporary Elevated Cloud Access"
technique_id: T1548.005
tags: [campaign, lotl, privilege_escalation]
---

# Abusing Azure CLI to escalate privileges via temporary credentials.

## Threat Description
Abusing Azure CLI to escalate privileges via temporary credentials.

## Attack Command
```
az account get-access-token --resource $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8) > $(echo token$(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8).json)
```

## Detection Logic
Monitor Azure CLI: `wmic process where name='az.cmd' get commandline | findstr get-access-token`; Audit Azure logs: Azure Activity Logs.

## Mitigation
Restrict Azure CLI: `icacls %userprofile%\.azure /deny Everyone:RX`; Require MFA: Azure AD policies.

## AI Training Prompt
Train AI to detect unauthorized Azure CLI token access and suggest MFA enforcement.

## References
- MITRE ATT&CK T1548.005: https://attack.mitre.org/techniques/T1548/005/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
