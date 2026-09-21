---
mitre_data:
  id: T1578.003
  linker_tags:
  - mitre/attack/linker/defense_impairment/delete_cloud_instance
  name: Delete Cloud Instance
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Delete Cloud Instance (`T1578.003`)

An adversary may delete a cloud instance after they have performed malicious activities in an attempt to evade detection and remove evidence of their presence.  Deleting an instance or virtual machine can remove valuable forensic artifacts and other evidence of suspicious behavior if the instance is not recoverable.

An adversary may also [Create Cloud Instance](https://attack.mitre.org/techniques/T1578/002) and later terminate the instance after achieving their objectives.[^fn1]


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Modify Cloud Compute Infrastructure (T1578)|Modify Cloud Compute Infrastructure]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578.003](https://attack.mitre.org/techniques/T1578/003)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)