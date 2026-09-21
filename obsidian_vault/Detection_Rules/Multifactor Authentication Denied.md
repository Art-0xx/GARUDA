---
type: detection_rule
title: "Multifactor Authentication Denied"
rule_id: e40f4962-b02b-4192-9bfe-245f7ece1f99
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078.004, attack.t1110, attack.t1621]
---

# Multifactor Authentication Denied

## Description
User has indicated they haven't instigated the MFA prompt and could indicate an attacker has the password for the account.

## Log Source
```yaml
product: azure
service: signinlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  AuthenticationRequirement: multiFactorAuthentication
  Status|contains: MFA Denied
```

## MITRE ATT&CK
- T1078.004
- T1110
- T1621

## False Positives
- Users actually login but miss-click into the Deny button when MFA prompt.

## References
- https://www.microsoft.com/security/blog/2022/03/22/dev-0537-criminal-actor-targeting-organizations-for-data-exfiltration-and-destruction/

## Metadata
- **Author:** AlertIQ
- **Date:** 2022-03-24
- **Rule ID:** `e40f4962-b02b-4192-9bfe-245f7ece1f99`
- **Source file:** `cloud/azure/signin_logs/azure_mfa_denies.yml`
