---
mitre_data:
  id: T1609
  linker_tags:
  - mitre/attack/linker/execution/container_administration_command
  name: Container Administration Command
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Container Administration Command (`T1609`)

Adversaries may abuse a container administration service to execute commands within a container. A container administration service such as the Docker daemon, the Kubernetes API server, or the kubelet may allow remote management of containers within an environment.[^fn3][^fn6][^fn5]

In Docker, adversaries may specify an entrypoint during container deployment that executes a script or command, or they may use a command such as <code>docker exec</code> to execute a command within a running container.[^fn2][^fn1] In Kubernetes, if an adversary has sufficient permissions, they may gain remote execution in a container in the cluster via interaction with the Kubernetes API server, the kubelet, or by running a command such as <code>kubectl exec</code>.[^fn4]


# Platform(s)

- Containers

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1609](https://attack.mitre.org/techniques/T1609)

[^fn1]: [Docker. (n.d.). Docker Exec. Retrieved March 29, 2021.](https://docs.docker.com/engine/reference/commandline/exec/)
[^fn2]: [Docker. (n.d.). Docker run reference. Retrieved March 29, 2021.](https://docs.docker.com/engine/reference/run/#entrypoint-default-command-to-execute-at-runtime)
[^fn3]: [Docker. (n.d.). DockerD CLI. Retrieved March 29, 2021.](https://docs.docker.com/engine/reference/commandline/dockerd/)
[^fn4]: [The Kubernetes Authors. (n.d.). Get a Shell to a Running Container. Retrieved March 29, 2021.](https://kubernetes.io/docs/tasks/debug-application-cluster/get-shell-running-container/)
[^fn5]: [The Kubernetes Authors. (n.d.). Kubelet. Retrieved March 29, 2021.](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)
[^fn6]: [The Kubernetes Authors. (n.d.). The Kubernetes API. Retrieved March 29, 2021.](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)