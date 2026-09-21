---
type: detection_rule
title: "Azure Kubernetes Events Deleted"
rule_id: 225d8b09-e714-479c-a0e4-55e6f29adf35
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1685]
---

# Azure Kubernetes Events Deleted

## Description
Detects when Events are deleted in Azure Kubernetes. An adversary may delete events in Azure Kubernetes in an attempt to evade detection.

## Log Source
```yaml
product: azure
service: activitylogs
```

## Detection Logic
```yaml
condition: selection
selection:
  operationName: MICROSOFT.KUBERNETES/CONNECTEDCLUSTERS/EVENTS.K8S.IO/EVENTS/DELETE
```

## MITRE ATT&CK
- T1685

## False Positives
- Event deletions may be done by a system or network administrator. Verify whether the username, hostname, and/or resource name should be making changes in your environment. Events deletions from unfamiliar users or hosts should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftkubernetes
- https://github.com/elastic/detection-rules/blob/da3852b681cf1a33898b1535892eab1f3a76177a/rules/integrations/azure/defense_evasion_kubernetes_events_deleted.toml

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-07-24
- **Rule ID:** `225d8b09-e714-479c-a0e4-55e6f29adf35`
- **Source file:** `cloud/azure/activity_logs/azure_kubernetes_events_deleted.yml`
