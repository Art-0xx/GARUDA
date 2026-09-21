---
mitre_data:
  id: T1611
  linker_tags:
  - mitre/attack/linker/privilege_escalation/escape_to_host
  name: Escape to Host
  related_tactics:
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Escape to Host (`T1611`)

Adversaries may break out of a container or virtualized environment to gain access to the underlying host. This can allow an adversary access to other containerized or virtualized resources from the host level or to the host itself. In principle, containerized / virtualized resources should provide a clear separation of application functionality and be isolated from the host environment.[^fn4]

There are multiple ways an adversary may escape from a container to a host environment. Examples include creating a container configured to mount the host’s filesystem using the bind parameter, which allows the adversary to drop payloads and execute control utilities such as cron on the host; utilizing a privileged container to run commands or load a malicious kernel module on the underlying host; or abusing system calls such as `unshare` and `keyctl` to escalate privileges and steal secrets.[^fn5][^fn6][^fn7][^fn1][^fn8][^fn9]

Additionally, an adversary may be able to exploit a compromised container with a mounted container management socket, such as `docker.sock`, to break out of the container via a [Container Administration Command](https://attack.mitre.org/techniques/T1609).[^fn1] Adversaries may also escape via [Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068), such as exploiting vulnerabilities in global symbolic links in order to access the root directory of a host machine.[^fn3]

In ESXi environments, an adversary may exploit a vulnerability in order to escape from a virtual machine into the hypervisor.[^fn2]

Gaining access to the host may provide the adversary with the opportunity to achieve follow-on objectives, such as establishing persistence, moving laterally within the environment, accessing other containers or virtual machines running on the host, or setting up a command and control channel on the host.


# Platform(s)

- Windows
- Linux
- Containers
- ESXi

# Tool(s)

- [[../Tools/Peirates|Peirates]]

# Tactic(s)

- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1611](https://attack.mitre.org/techniques/T1611)

[^fn1]: [0xn3va. (n.d.). Escaping. Retrieved May 27, 2022.](https://0xn3va.gitbook.io/cheat-sheets/container/escaping)
[^fn2]: [Broadcom. (2025, March 6). VMSA-2025-0004: Questions & Answers. Retrieved March 26, 2025.](https://github.com/vmware/vcf-security-and-compliance-guidelines/tree/main/security-advisories/vmsa-2025-0004)
[^fn3]: [Daniel Prizmant. (2020, July 15). Windows Server Containers Are Open, and Here's How You Can Break Out. Retrieved October 1, 2021.](https://unit42.paloaltonetworks.com/windows-server-containers-vulnerabilities/)
[^fn4]: [Docker. (n.d.). Docker Overview. Retrieved March 30, 2021.](https://docs.docker.com/get-started/overview/)
[^fn5]: [Docker. (n.d.). Use Bind Mounts. Retrieved March 30, 2021.](https://docs.docker.com/storage/bind-mounts/)
[^fn6]: [Fiser, D., Oliveira, A.. (2019, December 20). Why a Privileged Container in Docker is a Bad Idea. Retrieved March 30, 2021.](https://www.trendmicro.com/en_us/research/19/l/why-running-a-privileged-container-in-docker-is-a-bad-idea.html)
[^fn7]: [Fishbein, N., Kajiloti, M.. (2020, July 28). Watch Your Containers: Doki Infecting Docker Servers in the Cloud. Retrieved March 30, 2021.](https://www.intezer.com/blog/cloud-security/watch-your-containers-doki-infecting-docker-servers-in-the-cloud/)
[^fn8]: [Manoj Ahuje. (2022, January 31). CVE-2022-0185: Kubernetes Container Escape Using Linux Kernel Exploit. Retrieved July 6, 2022.](https://www.crowdstrike.com/blog/cve-2022-0185-kubernetes-container-escape-using-linux-kernel-exploit/)
[^fn9]: [Mark Manning. (2020, July 23). Keyctl-unmask: "Going Florida" on The State Of Containerizing Linux Keyrings. Retrieved July 6, 2022.](https://www.antitree.com/2020/07/keyctl-unmask-going-florida-on-the-state-of-containerizing-linux-keyrings/)