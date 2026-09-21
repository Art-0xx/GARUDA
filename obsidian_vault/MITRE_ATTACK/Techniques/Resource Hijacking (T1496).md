---
mitre_data:
  id: T1496
  linker_tags:
  - mitre/attack/linker/impact/resource_hijacking
  name: Resource Hijacking
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Resource Hijacking (`T1496`)

Adversaries may leverage the resources of co-opted systems to complete resource-intensive tasks, which may impact system and/or hosted service availability. 

Resource hijacking may take a number of different forms. For example, adversaries may:

* Leverage compute resources in order to mine cryptocurrency
* Sell network bandwidth to proxy networks
* Generate SMS traffic for profit
* Abuse cloud-based messaging services to send large quantities of spam messages

In some cases, adversaries may leverage multiple types of Resource Hijacking at once.[^fn1]


# Platform(s)

- Windows
- IaaS
- Linux
- macOS
- Containers
- SaaS

# Sub-Technique(s)

- [[../Techniques/SMS Pumping (T1496.003)|SMS Pumping]]
- [[../Techniques/Bandwidth Hijacking (T1496.002)|Bandwidth Hijacking]]
- [[../Techniques/Cloud Service Hijacking (T1496.004)|Cloud Service Hijacking]]
- [[../Techniques/Compute Hijacking (T1496.001)|Compute Hijacking]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1496](https://attack.mitre.org/techniques/T1496)

[^fn1]: [Miguel Hernandez. (2023, August 17). LABRAT: Stealthy Cryptojacking and Proxyjacking Campaign Targeting GitLab . Retrieved September 25, 2024.](https://sysdig.com/blog/labrat-cryptojacking-proxyjacking-campaign/)