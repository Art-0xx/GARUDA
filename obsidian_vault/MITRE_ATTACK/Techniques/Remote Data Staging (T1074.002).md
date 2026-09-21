---
mitre_data:
  id: T1074.002
  linker_tags:
  - mitre/attack/linker/collection/remote_data_staging
  name: Remote Data Staging
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Remote Data Staging (`T1074.002`)

Adversaries may stage data collected from multiple systems in a central location or directory on one system prior to Exfiltration. Data may be kept in separate files or combined into one file through techniques such as [Archive Collected Data](https://attack.mitre.org/techniques/T1560). Interactive command shells may be used, and common functionality within [cmd](https://attack.mitre.org/software/S0106) and bash may be used to copy data into a staging location.

In cloud environments, adversaries may stage data within a particular instance or virtual machine before exfiltration. An adversary may [Create Cloud Instance](https://attack.mitre.org/techniques/T1578/002) and stage data in that instance.[^fn1]

By staging data on one system prior to Exfiltration, adversaries can minimize the number of connections made to their C2 server and better evade detection.


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Data Staged (T1074)|Data Staged]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1074.002](https://attack.mitre.org/techniques/T1074/002)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)