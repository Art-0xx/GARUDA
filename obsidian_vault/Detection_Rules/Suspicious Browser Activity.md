---
type: detection_rule
title: "Suspicious Browser Activity"
rule_id: 944f6adb-7a99-4c69-80c1-b712579e93e6
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078]
---

# Suspicious Browser Activity

## Description
Indicates anomalous behavior based on suspicious sign-in activity across multiple tenants from different countries in the same browser

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: suspiciousBrowser
```

## MITRE ATT&CK
- T1078

## False Positives
- We recommend investigating the sessions flagged by this detection in the context of other sign-ins from the user.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#suspicious-browser
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-03
- **Rule ID:** `944f6adb-7a99-4c69-80c1-b712579e93e6`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_suspicious_browser.yml`
