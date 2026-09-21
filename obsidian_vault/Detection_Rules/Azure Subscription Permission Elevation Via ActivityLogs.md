---
type: detection_rule
title: "Azure Subscription Permission Elevation Via ActivityLogs"
rule_id: 09438caa-07b1-4870-8405-1dbafe3dad95
platform: cloud
level: high
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078.004]
---

# Azure Subscription Permission Elevation Via ActivityLogs

## Description
Detects when a user has been elevated to manage all Azure Subscriptions.
This change should be investigated immediately if it isn't planned.
This setting could allow an attacker access to Azure subscriptions in your environment.

## Log Source
```yaml
product: azure
service: activitylogs
```

## Detection Logic
```yaml
condition: selection
selection:
  operationName: MICROSOFT.AUTHORIZATION/ELEVATEACCESS/ACTION
```

## MITRE ATT&CK
- T1078.004

## False Positives
- If this was approved by System Administrator.

## References
- https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftauthorization

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-11-26
- **Rule ID:** `09438caa-07b1-4870-8405-1dbafe3dad95`
- **Source file:** `cloud/azure/activity_logs/azure_subscription_permissions_elevation_via_activitylogs.yml`
