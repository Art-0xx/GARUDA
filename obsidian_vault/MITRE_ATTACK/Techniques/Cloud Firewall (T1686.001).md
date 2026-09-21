---
mitre_data:
  id: T1686.001
  linker_tags:
  - mitre/attack/linker/defense_impairment/cloud_firewall
  name: Cloud Firewall
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Cloud Firewall (`T1686.001`)

Adversaries may disable or modify a firewall within a cloud environment to bypass controls that limit access to cloud resources.

Cloud environments typically utilize restrictive security groups and firewall rules that only allow network activity from trusted IP addresses via expected ports and protocols. An adversary with appropriate permissions may introduce new firewall rules or policies to allow access into a victim cloud environment and/or move laterally from the cloud control plane to the data plane.

For example, an adversary may use a script or utility that creates new ingress rules in existing security groups (or creates new security groups entirely) to allow any TCP/IP connectivity to a cloud-hosted instance. They may also remove networking limitations to support traffic associated with malicious activity (such as cryptomining).[^fn2][^fn1]


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Disable or Modify System Firewall (T1686)|Disable or Modify System Firewall]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1686.001](https://attack.mitre.org/techniques/T1686/001)

[^fn1]: [Anthony Randazzo, Britton Manahan, Sam Lipton. (2020, April 28). Managed Detection & Response for AWS. Retrieved April 15, 2026.](https://expel.com/blog/finding-evil-in-aws/)
[^fn2]: [Dror Alon. (2022, December 8). Compromised Cloud Compute Credentials: Case Studies From the Wild. Retrieved March 9, 2023.](https://unit42.paloaltonetworks.com/compromised-cloud-compute-credentials/)