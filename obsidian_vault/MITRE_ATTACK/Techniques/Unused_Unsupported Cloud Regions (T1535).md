---
mitre_data:
  id: T1535
  linker_tags:
  - mitre/attack/linker/stealth/unused_unsupported_cloud_regions
  name: Unused/Unsupported Cloud Regions
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Unused/Unsupported Cloud Regions (`T1535`)

Adversaries may create cloud instances in unused geographic service regions in order to evade detection. Access is usually obtained through compromising accounts used to manage cloud infrastructure.

Cloud service providers often provide infrastructure throughout the world in order to improve performance, provide redundancy, and allow customers to meet compliance requirements. Oftentimes, a customer will only use a subset of the available regions and may not actively monitor other regions. If an adversary creates resources in an unused region, they may be able to operate undetected.

A variation on this behavior takes advantage of differences in functionality across cloud regions. An adversary could utilize regions which do not support advanced detection services in order to avoid detection of their activity.

An example of adversary use of unused AWS regions is to mine cryptocurrency through [Resource Hijacking](https://attack.mitre.org/techniques/T1496), which can cost organizations substantial amounts of money over time depending on the processing power used.[^fn1]


# Platform(s)

- IaaS

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1535](https://attack.mitre.org/techniques/T1535)

[^fn1]: [CloudSploit. (2019, June 8). The Danger of Unused AWS Regions. Retrieved October 8, 2019.](https://medium.com/cloudsploit/the-danger-of-unused-aws-regions-af0bf1b878fc)