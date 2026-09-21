---
mitre_data:
  id: T1578
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_cloud_compute_infrastructure
  name: Modify Cloud Compute Infrastructure
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Modify Cloud Compute Infrastructure (`T1578`)

An adversary may attempt to modify a cloud account's compute service infrastructure to evade defenses. A modification to the compute service infrastructure can include the creation, deletion, or modification of one or more components such as compute instances, virtual machines, and snapshots.

Permissions gained from the modification of infrastructure components may bypass restrictions that prevent access to existing infrastructure. Modifying infrastructure components may also allow an adversary to evade detection and remove evidence of their presence.[^fn1]


# Platform(s)

- IaaS

# Sub-Technique(s)

- [[../Techniques/Revert Cloud Instance (T1578.004)|Revert Cloud Instance]]
- [[../Techniques/Delete Cloud Instance (T1578.003)|Delete Cloud Instance]]
- [[../Techniques/Modify Cloud Compute Configurations (T1578.005)|Modify Cloud Compute Configurations]]
- [[../Techniques/Create Cloud Instance (T1578.002)|Create Cloud Instance]]
- [[../Techniques/Create Snapshot (T1578.001)|Create Snapshot]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578](https://attack.mitre.org/techniques/T1578)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)