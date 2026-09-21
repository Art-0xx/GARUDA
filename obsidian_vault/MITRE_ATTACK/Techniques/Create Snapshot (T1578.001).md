---
mitre_data:
  id: T1578.001
  linker_tags:
  - mitre/attack/linker/defense_impairment/create_snapshot
  name: Create Snapshot
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Create Snapshot (`T1578.001`)

An adversary may create a snapshot or data backup within a cloud account to evade defenses. A snapshot is a point-in-time copy of an existing cloud compute component such as a virtual machine (VM), virtual hard drive, or volume. An adversary may leverage permissions to create a snapshot in order to bypass restrictions that prevent access to existing compute service infrastructure, unlike in [Revert Cloud Instance](https://attack.mitre.org/techniques/T1578/004) where an adversary may revert to a snapshot to evade detection and remove evidence of their presence.

An adversary may [Create Cloud Instance](https://attack.mitre.org/techniques/T1578/002), mount one or more created snapshots to that instance, and then apply a policy that allows the adversary access to the created instance, such as a firewall policy that allows them inbound and outbound SSH access.[^fn1]


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Modify Cloud Compute Infrastructure (T1578)|Modify Cloud Compute Infrastructure]]

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578.001](https://attack.mitre.org/techniques/T1578/001)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)