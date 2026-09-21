---
type: detection_rule
title: "Suspicious SignIns From A Non Registered Device"
rule_id: 572b12d4-9062-11ed-a1eb-0242ac120002
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078]
---

# Suspicious SignIns From A Non Registered Device

## Description
Detects risky authentication from a non AD registered device without MFA being required.

## Log Source
```yaml
product: azure
service: signinlogs
```

## Detection Logic
```yaml
condition: selection_main and 1 of selection_empty*
selection_empty1:
  DeviceDetail.trusttype: ''
selection_empty2:
  DeviceDetail.trusttype: null
selection_main:
  AuthenticationRequirement: singleFactorAuthentication
  RiskState: atRisk
  Status: Success
```

## MITRE ATT&CK
- T1078

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-devices#non-compliant-device-sign-in

## Metadata
- **Author:** Harjot Singh, '@cyb3rjy0t'
- **Date:** 2023-01-10
- **Rule ID:** `572b12d4-9062-11ed-a1eb-0242ac120002`
- **Source file:** `cloud/azure/signin_logs/azure_ad_risky_sign_ins_with_singlefactorauth_from_unknown_devices.yml`
