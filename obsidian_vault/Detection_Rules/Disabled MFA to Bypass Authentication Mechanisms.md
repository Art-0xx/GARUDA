---
type: detection_rule
title: "Disabled MFA to Bypass Authentication Mechanisms"
rule_id: 7ea78478-a4f9-42a6-9dcd-f861816122bf
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1556]
---

# Disabled MFA to Bypass Authentication Mechanisms

## Description
Detection for when multi factor authentication has been disabled, which might indicate a malicious activity to bypass authentication mechanisms.

## Log Source
```yaml
product: azure
service: auditlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  operationName: Disable Strong Authentication
  properties.result: success
```

## MITRE ATT&CK
- T1556

## False Positives
- Authorized modification by administrators

## References
- https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates
- https://learn.microsoft.com/en-us/entra/identity/monitoring-health/reference-audit-activities#core-directory
- https://research.splunk.com/cloud/482dd42a-acfa-486b-a0bb-d6fcda27318e/
- https://analyticsrules.exchange/analyticrules/65c78944-930b-4cae-bd79-c3664ae30ba7/
- https://www.elastic.co/docs/reference/security/prebuilt-rules/rules/integrations/azure/persistence_entra_id_mfa_disabled_for_user

## Metadata
- **Author:** @ionsor
- **Date:** 2022-02-08
- **Rule ID:** `7ea78478-a4f9-42a6-9dcd-f861816122bf`
- **Source file:** `cloud/azure/audit_logs/azure_mfa_disabled.yml`
