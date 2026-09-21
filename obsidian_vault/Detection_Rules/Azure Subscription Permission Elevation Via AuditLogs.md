---
type: detection_rule
title: "Azure Subscription Permission Elevation Via AuditLogs"
rule_id: ca9bf243-465e-494a-9e54-bf9fc239057d
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078]
---

# Azure Subscription Permission Elevation Via AuditLogs

## Description
Detects when a user has been elevated to manage all Azure Subscriptions.
This change should be investigated immediately if it isn't planned.
This setting could allow an attacker access to Azure subscriptions in your environment.

## Log Source
```yaml
product: azure
service: auditlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  Category: Administrative
  OperationName: Assigns the caller to user access admin
```

## MITRE ATT&CK
- T1078

## False Positives
- If this was approved by System Administrator.

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-privileged-accounts#assignment-and-elevation

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-11-26
- **Rule ID:** `ca9bf243-465e-494a-9e54-bf9fc239057d`
- **Source file:** `cloud/azure/audit_logs/azure_subscription_permissions_elevation_via_auditlogs.yml`
