---
type: detection_rule
title: "Multifactor Authentication Interrupted"
rule_id: 5496ff55-42ec-4369-81cb-00f417029e25
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078.004, attack.t1110, attack.t1621]
---

# Multifactor Authentication Interrupted

## Description
Identifies user login with multifactor authentication failures, which might be an indication an attacker has the password for the account but can't pass the MFA challenge.

## Log Source
```yaml
product: azure
service: signinlogs
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_500121:
  ResultDescription|contains: Authentication failed during strong authentication request
  ResultType: 500121
selection_50074:
  ResultDescription|contains: Strong Auth required
  ResultType: 50074
```

## MITRE ATT&CK
- T1078.004
- T1110
- T1621

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-privileged-accounts

## Metadata
- **Author:** AlertIQ
- **Date:** 2021-10-10
- **Rule ID:** `5496ff55-42ec-4369-81cb-00f417029e25`
- **Source file:** `cloud/azure/signin_logs/azure_mfa_interrupted.yml`
