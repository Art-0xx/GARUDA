---
type: detection_rule
title: "RBAC Permission Enumeration Attempt"
rule_id: 84b777bd-c946-4d17-aa2e-c39f5a454325
platform: application
level: low
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1069.003, attack.t1087.004]
---

# RBAC Permission Enumeration Attempt

## Description
Detects identities attempting to enumerate their Kubernetes RBAC permissions.
In the early stages of a breach, attackers will aim to list the permissions they have within the compromised environment.
In a Kubernetes cluster, this can be achieved by interacting with the API server, and querying the SelfSubjectAccessReview API via e.g. a "kubectl auth can-i --list" command.
This will enumerate the Role-Based Access Controls (RBAC) rules defining the compromised user's authorization.

## Log Source
```yaml
category: application
product: kubernetes
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  apiGroup: authorization.k8s.io
  objectRef.resource: selfsubjectrulesreviews
  verb: create
```

## MITRE ATT&CK
- T1069.003
- T1087.004

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/kubernetes-suspicious-self-subject-review.html

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `84b777bd-c946-4d17-aa2e-c39f5a454325`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_rbac_permisions_listing.yml`
