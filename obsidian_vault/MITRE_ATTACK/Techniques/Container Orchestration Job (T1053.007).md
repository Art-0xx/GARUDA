---
mitre_data:
  id: T1053.007
  linker_tags:
  - mitre/attack/linker/execution/container_orchestration_job
  - mitre/attack/linker/persistence/container_orchestration_job
  - mitre/attack/linker/privilege_escalation/container_orchestration_job
  name: Container Orchestration Job
  related_tactics:
  - execution
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Container Orchestration Job (`T1053.007`)

Adversaries may abuse task scheduling functionality provided by container orchestration tools such as Kubernetes to schedule deployment of containers configured to execute malicious code. Container orchestration jobs run these automated tasks at a specific date and time, similar to cron jobs on a Linux system. Deployments of this type can also be configured to maintain a quantity of containers over time, automating the process of maintaining persistence within a cluster.

In Kubernetes, a CronJob may be used to schedule a Job that runs one or more containers to perform specific tasks.[^fn2][^fn1] An adversary therefore may utilize a CronJob to schedule deployment of a Job that executes malicious code in various nodes within a cluster.[^fn3]


# Platform(s)

- Containers

# Parent Technique(s)

- [[../Techniques/Scheduled Task_Job (T1053)|Scheduled Task/Job]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1053.007](https://attack.mitre.org/techniques/T1053/007)

[^fn1]: [The Kubernetes Authors. (n.d.). Kubernetes CronJob. Retrieved March 29, 2021.](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)
[^fn2]: [The Kubernetes Authors. (n.d.). Kubernetes Jobs. Retrieved March 30, 2021.](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
[^fn3]: [Weizman, Y. (2020, April 2). Threat Matrix for Kubernetes. Retrieved March 30, 2021.](https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/)