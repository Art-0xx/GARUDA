---
type: detection_rule
title: "Potential Sidecar Injection Into Running Deployment"
rule_id: ad9012a6-e518-4432-9890-f3b82b8fc71f
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1609]
---

# Potential Sidecar Injection Into Running Deployment

## Description
Detects attempts to inject a sidecar container into a running deployment.
A sidecar container is an additional container within a pod, that resides alongside the main container.
One way to add containers to running resources like Deployments/DeamonSets/StatefulSets, is via a "kubectl patch" operation.
By injecting a new container within a legitimate pod, an attacker can run their code and hide their activity, instead of running their own separated pod in the cluster.

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
  apiGroup: apps
  objectRef.resource: deployments
  verb: patch
```

## MITRE ATT&CK
- T1609

## False Positives
- Unknown

## References
- https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch
- https://microsoft.github.io/Threat-Matrix-for-Kubernetes/techniques/Sidecar%20Injection/

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `ad9012a6-e518-4432-9890-f3b82b8fc71f`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_sidecar_injection.yml`
