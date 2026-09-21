---
type: detection_rule
title: "Azure Kubernetes RoleBinding/ClusterRoleBinding Modified and Deleted"
rule_id: 25cb259b-bbdc-4b87-98b7-90d7c72f8743
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1485, attack.t1496, attack.t1489]
---

# Azure Kubernetes RoleBinding/ClusterRoleBinding Modified and Deleted

## Description
Detects the creation or patching of potential malicious RoleBinding/ClusterRoleBinding.

## Log Source
```yaml
product: azure
service: activitylogs
```

## Detection Logic
```yaml
condition: selection
selection:
  operationName:
  - MICROSOFT.KUBERNETES/CONNECTEDCLUSTERS/RBAC.AUTHORIZATION.K8S.IO/CLUSTERROLEBINDINGS/WRITE
  - MICROSOFT.KUBERNETES/CONNECTEDCLUSTERS/RBAC.AUTHORIZATION.K8S.IO/CLUSTERROLEBINDINGS/DELETE
  - MICROSOFT.KUBERNETES/CONNECTEDCLUSTERS/RBAC.AUTHORIZATION.K8S.IO/ROLEBINDINGS/WRITE
  - MICROSOFT.KUBERNETES/CONNECTEDCLUSTERS/RBAC.AUTHORIZATION.K8S.IO/ROLEBINDINGS/DELETE
```

## MITRE ATT&CK
- T1485
- T1496
- T1489

## False Positives
- RoleBinding/ClusterRoleBinding being modified and deleted may be performed by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- RoleBinding/ClusterRoleBinding modification from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://learn.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftkubernetes
- https://www.microsoft.com/security/blog/2021/03/23/secure-containerized-environments-with-updated-threat-matrix-for-kubernetes/
- https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/
- https://medium.com/mitre-engenuity/att-ck-for-containers-now-available-4c2359654bf1

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-07
- **Rule ID:** `25cb259b-bbdc-4b87-98b7-90d7c72f8743`
- **Source file:** `cloud/azure/activity_logs/azure_kubernetes_rolebinding_modified_or_deleted.yml`
