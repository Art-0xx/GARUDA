---
type: detection_rule
title: "Google Cloud Kubernetes RoleBinding"
rule_id: 0322d9f2-289a-47c2-b5e1-b63c90901a3e
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
---

# Google Cloud Kubernetes RoleBinding

## Description
Detects the creation or patching of potential malicious RoleBinding. This includes RoleBindings and ClusterRoleBinding.

## Log Source
```yaml
product: gcp
service: gcp.audit
```

## Detection Logic
```yaml
condition: selection
selection:
  gcp.audit.method_name:
  - io.k8s.authorization.rbac.v*.clusterrolebindings.create
  - io.k8s.authorization.rbac.v*.rolebindings.create
  - io.k8s.authorization.rbac.v*.clusterrolebindings.patch
  - io.k8s.authorization.rbac.v*.rolebindings.patch
  - io.k8s.authorization.rbac.v*.clusterrolebindings.update
  - io.k8s.authorization.rbac.v*.rolebindings.update
  - io.k8s.authorization.rbac.v*.clusterrolebindings.delete
  - io.k8s.authorization.rbac.v*.rolebindings.delete
```

## False Positives
- RoleBindings and ClusterRoleBinding being modified or deleted may be performed by a system administrator. Verify whether the user identity, user agent, and/or hostname should be making changes in your environment.
- RoleBindings and ClusterRoleBinding modified or deleted from unfamiliar users should be investigated. If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://github.com/elastic/detection-rules/pull/1267
- https://kubernetes.io/docs/reference/kubernetes-api/authorization-resources/cluster-role-v1/#ClusterRole
- https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control
- https://kubernetes.io/docs/reference/access-authn-authz/rbac/
- https://cloud.google.com/kubernetes-engine/docs/how-to/audit-logging

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-09
- **Rule ID:** `0322d9f2-289a-47c2-b5e1-b63c90901a3e`
- **Source file:** `cloud/gcp/audit/gcp_kubernetes_rolebinding.yml`
