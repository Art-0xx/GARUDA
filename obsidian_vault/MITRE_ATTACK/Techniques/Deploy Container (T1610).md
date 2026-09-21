---
mitre_data:
  id: T1610
  linker_tags:
  - mitre/attack/linker/execution/deploy_container
  name: Deploy Container
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Deploy Container (`T1610`)

Adversaries may deploy a container into an environment to facilitate execution or evade defenses. In some cases, adversaries may deploy a new container to execute processes associated with a particular image or deployment, such as processes that execute or download malware. In others, an adversary may deploy a new container configured without network rules, user limitations, etc. to bypass existing defenses within the environment. In Kubernetes environments, an adversary may attempt to deploy a privileged or vulnerable container into a specific node in order to [Escape to Host](https://attack.mitre.org/techniques/T1611) and access other containers running on the node. [^fn1]

Containers can be deployed by various means, such as via Docker's <code>create</code> and <code>start</code> APIs or via a web application such as the Kubernetes dashboard or Kubeflow. [^fn3][^fn6][^fn5] In Kubernetes environments, containers may be deployed through workloads such as ReplicaSets or DaemonSets, which can allow containers to be deployed across multiple nodes.[^fn4] Adversaries may deploy containers based on retrieved or built malicious images or from benign images that download and execute malicious payloads at runtime.[^fn2]


# Platform(s)

- Containers

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1610](https://attack.mitre.org/techniques/T1610)

[^fn1]: [Abhisek Datta. (2020, March 18). Kubernetes Namespace Breakout using Insecure Host Path Volume — Part 1. Retrieved January 16, 2024.](https://blog.appsecco.com/kubernetes-namespace-breakout-using-insecure-host-path-volume-part-1-b382f2a6e216)
[^fn2]: [Assaf Morag. (2020, July 15). Threat Alert: Attackers Building Malicious Images on Your Hosts. Retrieved March 29, 2021.](https://blog.aquasec.com/malicious-container-image-docker-container-host)
[^fn3]: [DockerDocs. (n.d.). Retrieved December 8, 2025.](https://docs.docker.com/reference/cli/docker/container/create/)
[^fn4]: [Kubernetes. (n.d.). Workload Management. Retrieved March 28, 2024.](https://kubernetes.io/docs/concepts/workloads/controllers/)
[^fn5]: [The Kubeflow Authors. (n.d.). Overview of Kubeflow Pipelines. Retrieved March 29, 2021.](https://www.kubeflow.org/docs/components/pipelines/overview/pipelines-overview/)
[^fn6]: [The Kubernetes Authors. (n.d.). Kubernetes Web UI (Dashboard). Retrieved March 29, 2021.](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)