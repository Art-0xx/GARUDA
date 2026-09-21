---
type: detection_rule
title: "Malicious IP Address Sign-In Failure Rate"
rule_id: a3f55ebd-0c01-4ed6-adc0-8fb76d8cd3cd
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1090]
---

# Malicious IP Address Sign-In Failure Rate

## Description
Indicates sign-in from a malicious IP address based on high failure rates.

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: maliciousIPAddress
```

## MITRE ATT&CK
- T1090

## False Positives
- We recommend investigating the sessions flagged by this detection in the context of other sign-ins from the user.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#malicious-ip-address
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-07
- **Rule ID:** `a3f55ebd-0c01-4ed6-adc0-8fb76d8cd3cd`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_malicious_ip_address.yml`
