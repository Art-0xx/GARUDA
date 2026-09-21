---
type: detection_rule
title: "New Kubernetes Service Account Created"
rule_id: e31bae15-83ed-473e-bf31-faf4f8a17d36
platform: application
level: low
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1136]
---

# New Kubernetes Service Account Created

## Description
Detects creation of new Kubernetes service account, which could indicate an attacker's attempt to persist within a cluster.

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
  objectRef.resource: serviceaccounts
  verb: create
```

## MITRE ATT&CK
- T1136

## False Positives
- Unknown

## References
- https://microsoft.github.io/Threat-Matrix-for-Kubernetes/techniques/container%20service%20account/

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `e31bae15-83ed-473e-bf31-faf4f8a17d36`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_serviceaccount_creation.yml`
