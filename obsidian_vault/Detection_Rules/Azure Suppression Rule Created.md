---
type: detection_rule
title: "Azure Suppression Rule Created"
rule_id: 92cc3e5d-eb57-419d-8c16-5c63f325a401
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
---

# Azure Suppression Rule Created

## Description
Identifies when a suppression rule is created in Azure. Adversary's could attempt this to evade detection.

## Log Source
```yaml
product: azure
service: activitylogs
```

## Detection Logic
```yaml
condition: selection
selection:
  operationName: MICROSOFT.SECURITY/ALERTSSUPPRESSIONRULES/WRITE
```

## False Positives
- Suppression Rule being created may be performed by a system administrator.
- Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- Suppression Rule created from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations

## Metadata
- **Author:** Austin Songer
- **Date:** 2021-08-16
- **Rule ID:** `92cc3e5d-eb57-419d-8c16-5c63f325a401`
- **Source file:** `cloud/azure/activity_logs/azure_suppression_rule_created.yml`
