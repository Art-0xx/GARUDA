---
mitre_data:
  id: T1496.002
  linker_tags:
  - mitre/attack/linker/impact/bandwidth_hijacking
  name: Bandwidth Hijacking
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Bandwidth Hijacking (`T1496.002`)

Adversaries may leverage the network bandwidth resources of co-opted systems to complete resource-intensive tasks, which may impact system and/or hosted service availability. 

Adversaries may also use malware that leverages a system's network bandwidth as part of a botnet in order to facilitate [Network Denial of Service](https://attack.mitre.org/techniques/T1498) campaigns and/or to seed malicious torrents.[^fn3] Alternatively, they may engage in proxyjacking by selling use of the victims' network bandwidth and IP address to proxyware services.[^fn1] Finally, they may engage in internet-wide scanning in order to identify additional targets for compromise.[^fn2]

In addition to incurring potential financial costs or availability disruptions, this technique may cause reputational damage if a victim’s bandwidth is used for illegal activities.[^fn1]


# Platform(s)

- Linux
- Windows
- macOS
- IaaS
- Containers

# Parent Technique(s)

- [[../Techniques/Resource Hijacking (T1496)|Resource Hijacking]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1496.002](https://attack.mitre.org/techniques/T1496/002)

[^fn1]: [Crystal Morin. (2023, April 4). Proxyjacking has Entered the Chat. Retrieved July 6, 2023.](https://sysdig.com/blog/proxyjacking-attackers-log4j-exploited/)
[^fn2]: [Margaret Kelley, Sean Johnstone, William Gamazo, and Nathaniel Quist. (2024, August 15). Leaked Environment Variables Allow Large-Scale Extortion Operation in Cloud Environments. Retrieved September 25, 2024.](https://unit42.paloaltonetworks.com/large-scale-cloud-extortion-operation/)
[^fn3]: [Zuzana Hromcová. (2019, July 8). Malicious campaign targets South Korean users with backdoor‑laced torrents. Retrieved March 31, 2022.](https://www.welivesecurity.com/2019/07/08/south-korean-users-backdoor-torrents/)