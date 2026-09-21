---
type: detection_rule
title: "Google Cloud Kubernetes CronJob"
rule_id: cd3a808c-c7b7-4c50-a2f3-f4cfcd436435
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
---

# Google Cloud Kubernetes CronJob

## Description
Identifies when a Google Cloud Kubernetes CronJob runs in Azure Cloud. Kubernetes Job is a controller that creates one or more pods and ensures that a specified number of them successfully terminate.
Kubernetes Job can be used to run containers that perform finite tasks for batch jobs. Kubernetes CronJob is used to schedule Jobs.
An Adversary may use Kubernetes CronJob for scheduling execution of malicious code that would run as a container in the cluster.

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
  - io.k8s.api.batch.v*.Job
  - io.k8s.api.batch.v*.CronJob
```

## False Positives
- Google Cloud Kubernetes CronJob/Job may be done by a system administrator.
- If known behavior is causing false positives, it can be exempted from the rule.

## References
- https://cloud.google.com/kubernetes-engine/docs
- https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/
- https://kubernetes.io/docs/concepts/workloads/controllers/job/

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-11-22
- **Rule ID:** `cd3a808c-c7b7-4c50-a2f3-f4cfcd436435`
- **Source file:** `cloud/gcp/audit/gcp_kubernetes_cronjob.yml`
