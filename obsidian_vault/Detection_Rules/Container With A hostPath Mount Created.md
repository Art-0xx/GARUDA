---
type: detection_rule
title: "Container With A hostPath Mount Created"
rule_id: 402b955c-8fe0-4a8c-b635-622b4ac5f902
platform: application
level: low
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1611]
---

# Container With A hostPath Mount Created

## Description
Detects creation of a container with a hostPath mount.
A hostPath volume mounts a directory or a file from the node to the container.
Attackers who have permissions to create a new pod in the cluster may create one with a writable hostPath volume and chroot to escape to the underlying node.

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
  hostPath: '*'
  objectRef.resource: pods
  verb: create
```

## MITRE ATT&CK
- T1611

## False Positives
- The DaemonSet controller creates pods with hostPath volumes within the kube-system namespace.

## References
- https://microsoft.github.io/Threat-Matrix-for-Kubernetes/techniques/Writable%20hostPath%20mount/
- https://blog.appsecco.com/kubernetes-namespace-breakout-using-insecure-host-path-volume-part-1-b382f2a6e216

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `402b955c-8fe0-4a8c-b635-622b4ac5f902`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_hostpath_mount.yml`
