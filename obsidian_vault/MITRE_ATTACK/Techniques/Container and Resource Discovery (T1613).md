---
mitre_data:
  id: T1613
  linker_tags:
  - mitre/attack/linker/discovery/container_and_resource_discovery
  name: Container and Resource Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Container and Resource Discovery (`T1613`)

Adversaries may attempt to discover containers and other resources that are available within a containers environment. Other resources may include images, deployments, pods, nodes, and other information such as the status of a cluster.

These resources can be viewed within web applications such as the Kubernetes dashboard or can be queried via the Docker and Kubernetes APIs.[^fn1][^fn2] In Docker, logs may leak information about the environment, such as the environment’s configuration, which services are available, and what cloud provider the victim may be utilizing. The discovery of these resources may inform an adversary’s next steps in the environment, such as how to perform lateral movement and which methods to utilize for execution. 


# Platform(s)

- Containers

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1613](https://attack.mitre.org/techniques/T1613)

[^fn1]: [Docker. (n.d.). Docker Engine API v1.41 Reference. Retrieved March 31, 2021.](https://docs.docker.com/engine/api/v1.41/)
[^fn2]: [The Kubernetes Authors. (n.d.). The Kubernetes API. Retrieved March 29, 2021.](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)