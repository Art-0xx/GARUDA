---
type: detection_rule
title: "User Risk and MFA Registration Policy Updated"
rule_id: d4c7758e-9417-4f2e-9109-6125d66dabef
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
---

# User Risk and MFA Registration Policy Updated

## Description
Detects changes and updates to the user risk and MFA registration policy.
Attackers can modified the policies to Bypass MFA, weaken security thresholds, facilitate further attacks, maintain persistence.

## Log Source
```yaml
product: azure
service: auditlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  Category: Policy
  LoggedByService: AAD Management UX
  OperationName: Update User Risk and MFA Registration Policy
```

## False Positives
- Known updates by administrators.

## References
- https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-mfa-policy
- https://learn.microsoft.com/en-us/entra/identity/monitoring-health/reference-audit-activities

## Metadata
- **Author:** Harjot Singh (@cyb3rjy0t)
- **Date:** 2024-08-13
- **Rule ID:** `d4c7758e-9417-4f2e-9109-6125d66dabef`
- **Source file:** `cloud/azure/audit_logs/azure_update_risk_and_mfa_registration_policy.yml`
