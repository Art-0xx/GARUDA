---
type: campaign
scenario_id: 93
tactic: Credential Access
technique: "T1552.005: Cloud Instance Metadata API"
technique_id: T1552.005
tags: [campaign, lotl, credential_access]
---

# Accessing cloud instance metadata to steal credentials.

## Threat Description
Accessing cloud instance metadata to steal credentials.

## Attack Command
```
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/$(cat /dev/urandom | tr -dc 'A-Za-z' | head -c 8)
```

## Detection Logic
Monitor metadata access: `tcpdump -i eth0 host 169.254.169.254`; Audit cloud logs: AWS CloudTrail.

## Mitigation
Restrict metadata access: `aws ec2 modify-instance-metadata-options --instance-id i-1234567890abcdef0 --http-tokens required`; Enable IMDSv2.

## AI Training Prompt
Train AI to detect cloud metadata access and suggest IMDSv2 enforcement.

## References
- MITRE ATT&CK T1552.005: https://attack.mitre.org/techniques/T1552/005/
- CWE-522: https://cwe.mitre.org/data/definitions/522.html
