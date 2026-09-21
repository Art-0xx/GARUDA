---
type: detection_rule
title: "Kubernetes CronJob/Job Modification"
rule_id: 0c9b3bda-41a6-4442-9345-356ae86343dc
platform: application
level: medium
status: test
tags: [detection, sigma, application]
---

# Kubernetes CronJob/Job Modification

## Description
Detects when a Kubernetes CronJob or Job is created or modified.
A Kubernetes Job creates one or more pods to accomplish a specific task, and a CronJob creates Jobs on a recurring schedule.
An adversary can take advantage of this Kubernetes object to schedule Jobs to run containers that execute malicious code within a cluster, allowing them to achieve persistence.

## Log Source
```yaml
product: kubernetes
service: audit
```

## Detection Logic
```yaml
condition: selection
selection:
  objectRef.apiGroup: batch
  objectRef.resource:
  - cronjobs
  - jobs
  verb:
  - create
  - delete
  - patch
  - replace
  - update
```

## False Positives
- Modifying a Kubernetes Job or CronJob may need to be done by a system administrator.
- Automated processes may need to take these actions and may need to be filtered.

## References
- https://kubernetes.io/docs/reference/config-api/apiserver-audit.v1/
- https://www.redhat.com/en/blog/protecting-kubernetes-against-mitre-attck-persistence#technique-33-kubernetes-cronjob

## Metadata
- **Author:** kelnage
- **Date:** 2024-07-11
- **Rule ID:** `0c9b3bda-41a6-4442-9345-356ae86343dc`
- **Source file:** `application/kubernetes/audit/kubernetes_audit_cronjob_modification.yml`
