---
type: detection_rule
title: "Suspicious Inbox Forwarding Identity Protection"
rule_id: 27e4f1d6-ae72-4ea0-8a67-77a73a289c3d
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1114.003]
---

# Suspicious Inbox Forwarding Identity Protection

## Description
Indicates suspicious rules such as an inbox rule that forwards a copy of all emails to an external address

## Log Source
```yaml
product: azure
service: riskdetection
```

## Detection Logic
```yaml
condition: selection
selection:
  riskEventType: suspiciousInboxForwarding
```

## MITRE ATT&CK
- T1114.003

## False Positives
- A legitimate forwarding rule.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks#suspicious-inbox-forwarding
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-user-accounts#unusual-sign-ins

## Metadata
- **Author:** Mark Morowczynski '@markmorow', Gloria Lee, '@gleeiamglo'
- **Date:** 2023-09-03
- **Rule ID:** `27e4f1d6-ae72-4ea0-8a67-77a73a289c3d`
- **Source file:** `cloud/azure/identity_protection/azure_identity_protection_inbox_forwarding_rule.yml`
