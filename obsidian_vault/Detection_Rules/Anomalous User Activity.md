---
type: detection_rule
title: "Anomalous User Activity"
rule_id: 258b6593-215d-4a26-a141-c8e31c1299a6
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098]
---

# Anomalous User Activity

## Description
Indicates that there are anomalous patterns of behavior like suspicious changes to the directory.

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: anomalousUserActivity
```

## MITRE ATT&CK
- T1098

## False Positives
- We recommend investigating the sessions flagged by this detection in the context of other sign-ins from the user.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#anomalous-user-activity
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-03
- **Rule ID:** `258b6593-215d-4a26-a141-c8e31c1299a6`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_anomalous_user.yml`
