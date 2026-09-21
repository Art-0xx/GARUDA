---
type: detection_rule
title: "Kubernetes Admission Controller Modification"
rule_id: eed82177-38f5-4299-8a76-098d50d225ab
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1078, attack.t1552, attack.t1552.007]
---

# Kubernetes Admission Controller Modification

## Description
Detects when a modification (create, update or replace) action is taken that affects mutating or validating webhook configurations, as they can be used by an adversary to achieve persistence or exfiltrate access credentials.

## Log Source
```yaml
product: kubernetes
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  objectRef.apiGroup: admissionregistration.k8s.io
  objectRef.resource:
  - mutatingwebhookconfigurations
  - validatingwebhookconfigurations
  verb:
  - create
  - delete
  - patch
  - replace
  - update
```

## MITRE ATT&CK
- T1078
- T1552
- T1552.007

## False Positives
- Modifying the Kubernetes Admission Controller may need to be done by a system administrator.
- Automated processes may need to take these actions and may need to be filtered.

## References
- https://kubernetes.io/docs/reference/config-api/apiserver-audit.v1/
- https://security.padok.fr/en/blog/kubernetes-webhook-attackers

## Metadata
- **Author:** kelnage
- **Date:** 2024-07-11
- **Rule ID:** `eed82177-38f5-4299-8a76-098d50d225ab`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_change_admission_controller.yml`
