---
type: detection_rule
title: "Kubernetes Events Deleted"
rule_id: 3132570d-cab2-4561-9ea6-1743644b2290
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1070]
---

# Kubernetes Events Deleted

## Description
Detects when events are deleted in Kubernetes.
An adversary may delete Kubernetes events in an attempt to evade detection.

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
  objectRef.resource: events
  verb: delete
```

## MITRE ATT&CK
- T1070

## False Positives
- Unknown

## References
- https://microsoft.github.io/Threat-Matrix-for-Kubernetes/techniques/Delete%20K8S%20events/

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `3132570d-cab2-4561-9ea6-1743644b2290`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_events_deleted.yml`
