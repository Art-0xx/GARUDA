---
type: detection_rule
title: "Suspicious Inbox Manipulation Rules"
rule_id: ceb55fd0-726e-4656-bf4e-b585b7f7d572
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1140]
---

# Suspicious Inbox Manipulation Rules

## Description
Detects suspicious rules that delete or move messages or folders are set on a user's inbox.

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: mcasSuspiciousInboxManipulationRules
```

## MITRE ATT&CK
- T1140

## False Positives
- Actual mailbox rules that are moving items based on their workflow.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#suspicious-inbox-manipulation-rules
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-03
- **Rule ID:** `ceb55fd0-726e-4656-bf4e-b585b7f7d572`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_inbox_manipulation.yml`
