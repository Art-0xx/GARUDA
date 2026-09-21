---
type: campaign
scenario_id: 73
tactic: Privilege Escalation
technique: "T1548.005: Temporary Elevated Cloud Access"
technique_id: T1548.005
tags: [campaign, lotl, privilege_escalation]
---

# Abusing AWS CLI to escalate privileges via temporary credentials.

## Threat Description
Abusing AWS CLI to escalate privileges via temporary credentials.

## Attack Command
```
aws sts assume-role --role-arn arn:aws:iam::$(cat /dev/urandom | tr -dc '0-9' | head -c 12):role/$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8) --role-session-name $(cat /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
```

## Detection Logic
Monitor AWS STS: `aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=AssumeRole`; Audit IAM logs.

## Mitigation
Restrict STS assume-role: `aws iam update-assume-role-policy --role-name <role> --policy-document file://restrict.json`; Enable MFA for roles.

## AI Training Prompt
Train AI to detect unauthorized AWS role assumptions and suggest MFA enforcement.

## References
- MITRE ATT&CK T1548.005: https://attack.mitre.org/techniques/T1548/005/
- CWE-269: https://cwe.mitre.org/data/definitions/269.html
