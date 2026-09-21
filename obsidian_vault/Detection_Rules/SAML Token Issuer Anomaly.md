---
type: detection_rule
title: "SAML Token Issuer Anomaly"
rule_id: e3393cba-31f0-4207-831e-aef90ab17a8c
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1606]
---

# SAML Token Issuer Anomaly

## Description
Indicates the SAML token issuer for the associated SAML token is potentially compromised. The claims included in the token are unusual or match known attacker patterns

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: tokenIssuerAnomaly
```

## MITRE ATT&CK
- T1606

## False Positives
- We recommend investigating the sessions flagged by this detection in the context of other sign-ins from the user.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#token-issuer-anomaly
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-03
- **Rule ID:** `e3393cba-31f0-4207-831e-aef90ab17a8c`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_token_issuer_anomaly.yml`
