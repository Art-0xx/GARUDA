---
type: detection_rule
title: "Malicious IP Address Sign-In Suspicious"
rule_id: 36440e1c-5c22-467a-889b-593e66498472
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1090]
---

# Malicious IP Address Sign-In Suspicious

## Description
Indicates sign-in from a malicious IP address known to be malicious at time of sign-in.

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: suspiciousIPAddress
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
- **Rule ID:** `36440e1c-5c22-467a-889b-593e66498472`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_malicious_ip_address_suspicious.yml`
