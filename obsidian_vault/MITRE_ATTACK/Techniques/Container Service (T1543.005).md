---
mitre_data:
  id: T1543.005
  linker_tags:
  - mitre/attack/linker/persistence/container_service
  - mitre/attack/linker/privilege_escalation/container_service
  name: Container Service
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Container Service (`T1543.005`)

Adversaries may create or modify container or container cluster management tools that run as daemons, agents, or services on individual hosts. These include software for creating and managing individual containers, such as Docker and Podman, as well as container cluster node-level agents such as kubelet. By modifying these services, an adversary may be able to achieve persistence or escalate their privileges on a host.

For example, by using the `docker run` or `podman run` command with the `restart=always` directive, a container can be configured to persistently restart on the host.[^fn7] A user with access to the (rootful) docker command may also be able to escalate their privileges on the host.[^fn3]

In Kubernetes environments, DaemonSets allow an adversary to persistently [Deploy Container](https://attack.mitre.org/techniques/T1610)s on all nodes, including ones added later to the cluster.[^fn6][^fn5] Pods can also be deployed to specific nodes using the `nodeSelector` or `nodeName` fields in the pod spec.[^fn4][^fn1]

Note that containers can also be configured to run as [Systemd Service](https://attack.mitre.org/techniques/T1543/002)s.[^fn8][^fn2]


# Platform(s)

- Containers

# Parent Technique(s)

- [[../Techniques/Create or Modify System Process (T1543)|Create or Modify System Process]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1543.005](https://attack.mitre.org/techniques/T1543/005)

[^fn1]: [Abhisek Datta. (2020, March 18). Kubernetes Namespace Breakout using Insecure Host Path Volume — Part 1. Retrieved January 16, 2024.](https://blog.appsecco.com/kubernetes-namespace-breakout-using-insecure-host-path-volume-part-1-b382f2a6e216)
[^fn2]: [Docker. (n.d.). Start containers automatically. Retrieved February 15, 2024.](https://docs.docker.com/config/containers/start-containers-automatically/)
[^fn3]: [GTFOBins. (n.d.). docker. Retrieved February 15, 2024.](https://gtfobins.github.io/gtfobins/docker/)
[^fn4]: [Kubernetes. (n.d.). Assigning Pods to Nodes. Retrieved February 15, 2024.](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
[^fn5]: [Kubernetes. (n.d.). DaemonSet. Retrieved February 15, 2024.](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
[^fn6]: [Michael Katchinskiy, Assaf Morag. (2023, April 21). First-Ever Attack Leveraging Kubernetes RBAC to Backdoor Clusters. Retrieved July 14, 2023.](https://blog.aquasec.com/leveraging-kubernetes-rbac-to-backdoor-clusters)
[^fn7]: [Ofek Itach and Assaf Morag. (2023, July 13). TeamTNT Reemerged with New Aggressive Cloud Campaign. Retrieved February 15, 2024.](https://blog.aquasec.com/teamtnt-reemerged-with-new-aggressive-cloud-campaign)
[^fn8]: [Valentin Rothberg. (2022, March 16). How to run pods as systemd services with Podman. Retrieved February 15, 2024.](https://www.redhat.com/sysadmin/podman-run-pods-systemd-services)