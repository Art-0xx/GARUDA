---
type: detection_rule
title: "Creation Of Pod In System Namespace"
rule_id: a80d927d-ac6e-443f-a867-e8d6e3897318
platform: application
level: medium
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1036.005]
---

# Creation Of Pod In System Namespace

## Description
Detects deployments of pods within the kube-system namespace, which could be intended to imitate system pods.
System pods, created by controllers such as Deployments or DaemonSets have random suffixes in their names.
Attackers can use this fact and name their backdoor pods as if they were created by these controllers to avoid detection.
Deployment of such a backdoor container e.g. named kube-proxy-bv61v, could be attempted in the kube-system namespace alongside the other administrative containers.

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
  objectRef.namespace: kube-system
  objectRef.resource: pods
  verb: create
```

## MITRE ATT&CK
- T1036.005

## False Positives
- System components such as daemon-set-controller and kube-scheduler also create pods in the kube-system namespace

## References
- https://microsoft.github.io/Threat-Matrix-for-Kubernetes/techniques/Pod%20or%20container%20name%20similarily/

## Metadata
- **Author:** Leo Tsaousis (@laripping)
- **Date:** 2024-03-26
- **Rule ID:** `a80d927d-ac6e-443f-a867-e8d6e3897318`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_pod_in_system_namespace.yml`
