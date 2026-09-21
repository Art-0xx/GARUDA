---
mitre_data:
  id: T1552.007
  linker_tags:
  - mitre/attack/linker/credential_access/container_api
  name: Container API
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Container API (`T1552.007`)

Adversaries may gather credentials via APIs within a containers environment. APIs in these environments, such as the Docker API and Kubernetes APIs, allow a user to remotely manage their container resources and cluster components.[^fn2][^fn3]

An adversary may access the Docker API to collect logs that contain credentials to cloud, container, and various other resources in the environment.[^fn1] An adversary with sufficient permissions, such as via a pod's service account, may also use the Kubernetes API to retrieve credentials from the Kubernetes API server. These credentials may include those needed for Docker API authentication or secrets from Kubernetes cluster components. 


# Platform(s)

- Containers

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.007](https://attack.mitre.org/techniques/T1552/007)

[^fn1]: [Chen, J.. (2020, January 29). Attacker's Tactics and Techniques in Unsecured Docker Daemons Revealed. Retrieved March 31, 2021.](https://unit42.paloaltonetworks.com/attackers-tactics-and-techniques-in-unsecured-docker-daemons-revealed/)
[^fn2]: [Docker. (n.d.). Docker Engine API v1.41 Reference. Retrieved March 31, 2021.](https://docs.docker.com/engine/api/v1.41/)
[^fn3]: [The Kubernetes Authors. (n.d.). The Kubernetes API. Retrieved March 29, 2021.](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)