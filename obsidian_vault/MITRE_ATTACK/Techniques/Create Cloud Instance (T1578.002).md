---
mitre_data:
  id: T1578.002
  linker_tags:
  - mitre/attack/linker/defense_impairment/create_cloud_instance
  name: Create Cloud Instance
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Create Cloud Instance (`T1578.002`)

An adversary may create a new instance or virtual machine (VM) within the compute service of a cloud account to evade defenses. Creating a new instance may allow an adversary to bypass firewall rules and permissions that exist on instances currently residing within an account. An adversary may [Create Snapshot](https://attack.mitre.org/techniques/T1578/001) of one or more volumes in an account, create a new instance, mount the snapshots, and then apply a less restrictive security policy to collect [Data from Local System](https://attack.mitre.org/techniques/T1005) or for [Remote Data Staging](https://attack.mitre.org/techniques/T1074/002).[^fn1]

Creating a new instance may also allow an adversary to carry out malicious activity within an environment without affecting the execution of current running instances.


# Platform(s)

- IaaS

# Parent Technique(s)

- [[../Techniques/Modify Cloud Compute Infrastructure (T1578)|Modify Cloud Compute Infrastructure]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1578.002](https://attack.mitre.org/techniques/T1578/002)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)