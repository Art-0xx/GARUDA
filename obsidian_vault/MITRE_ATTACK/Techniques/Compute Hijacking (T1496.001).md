---
mitre_data:
  id: T1496.001
  linker_tags:
  - mitre/attack/linker/impact/compute_hijacking
  name: Compute Hijacking
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Compute Hijacking (`T1496.001`)

Adversaries may leverage the compute resources of co-opted systems to complete resource-intensive tasks, which may impact system and/or hosted service availability. 

One common purpose for [Compute Hijacking](https://attack.mitre.org/techniques/T1496/001) is to validate transactions of cryptocurrency networks and earn virtual currency. Adversaries may consume enough system resources to negatively impact and/or cause affected machines to become unresponsive.[^fn3] Servers and cloud-based systems are common targets because of the high potential for available resources, but user endpoint systems may also be compromised and used for [Compute Hijacking](https://attack.mitre.org/techniques/T1496/001) and cryptocurrency mining.[^fn2] Containerized environments may also be targeted due to the ease of deployment via exposed APIs and the potential for scaling mining activities by deploying or compromising multiple containers within an environment or cluster.[^fn1][^fn4]

Additionally, some cryptocurrency mining malware identify then kill off processes for competing malware to ensure it’s not competing for resources.[^fn5]


# Platform(s)

- Windows
- IaaS
- Linux
- macOS
- Containers

# Parent Technique(s)

- [[../Techniques/Resource Hijacking (T1496)|Resource Hijacking]]

# Tool(s)

- [[../Tools/Imminent Monitor|Imminent Monitor]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1496.001](https://attack.mitre.org/techniques/T1496/001)

[^fn1]: [Chen, J. et al. (2021, February 3). Hildegard: New TeamTNT Cryptojacking Malware Targeting Kubernetes. Retrieved April 5, 2021.](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/)
[^fn2]: [CloudSploit. (2019, June 8). The Danger of Unused AWS Regions. Retrieved October 8, 2019.](https://medium.com/cloudsploit/the-danger-of-unused-aws-regions-af0bf1b878fc)
[^fn3]: [GReAT. (2017, April 3). Lazarus Under the Hood. Retrieved April 17, 2019.](https://securelist.com/lazarus-under-the-hood/77908/)
[^fn4]: [Oliveira, A. (2019, May 30). Infected Containers Target Docker via Exposed APIs. Retrieved April 6, 2021.](https://www.trendmicro.com/en_us/research/19/e/infected-cryptocurrency-mining-containers-target-docker-hosts-with-exposed-apis-use-shodan-to-find-additional-victims.html)
[^fn5]: [Oliveira, A., Fiser, D. (2020, September 10). War of Linux Cryptocurrency Miners: A Battle for Resources. Retrieved April 6, 2021.](https://www.trendmicro.com/en_us/research/20/i/war-of-linux-cryptocurrency-miners-a-battle-for-resources.html)