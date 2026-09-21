---
type: detection_rule
title: "Kubernetes Unauthorized or Unauthenticated Access"
rule_id: 0d933542-1f1f-420d-97d4-21b2c3c492d9
platform: application
level: low
status: test
tags: [detection, sigma, application]
---

# Kubernetes Unauthorized or Unauthenticated Access

## Description
Detects when a request to the Kubernetes API is rejected due to lack of authorization or due to an expired authentication token being used.
This may indicate an attacker attempting to leverage credentials they have obtained.

## Log Source
```yaml
product: kubernetes
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  responseStatus.code:
  - 401
  - 403
```

## False Positives
- A misconfigured RBAC policy, a mistake by a valid user, or a wider issue with authentication tokens can also generate these errors.

## References
- https://kubernetes.io/docs/reference/config-api/apiserver-audit.v1/
- https://www.datadoghq.com/blog/monitor-kubernetes-audit-logs/#monitor-api-authentication-issues

## Metadata
- **Author:** kelnage
- **Date:** 2024-04-12
- **Rule ID:** `0d933542-1f1f-420d-97d4-21b2c3c492d9`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_unauthorized_unauthenticated_actions.yml`
