---
mitre_data:
  id: T1074
  linker_tags:
  - mitre/attack/linker/collection/data_staged
  name: Data Staged
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data Staged (`T1074`)

Adversaries may stage collected data in a central location or directory prior to Exfiltration. Data may be kept in separate files or combined into one file through techniques such as [Archive Collected Data](https://attack.mitre.org/techniques/T1560). Interactive command shells may be used, and common functionality within [cmd](https://attack.mitre.org/software/S0106) and bash may be used to copy data into a staging location.[^fn2]

In cloud environments, adversaries may stage data within a particular instance or virtual machine before exfiltration. An adversary may [Create Cloud Instance](https://attack.mitre.org/techniques/T1578/002) and stage data in that instance.[^fn1]

Adversaries may choose to stage data from a victim network in a centralized location prior to Exfiltration to minimize the number of connections made to their C2 server and better evade detection.


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Local Data Staging (T1074.001)|Local Data Staging]]
- [[../Techniques/Remote Data Staging (T1074.002)|Remote Data Staging]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1074](https://attack.mitre.org/techniques/T1074)

[^fn1]: [Mandiant. (2020, February). M-Trends 2020. Retrieved November 17, 2024.](https://www.mandiant.com/sites/default/files/2021-09/mtrends-2020.pdf)
[^fn2]: [PwC and BAE Systems. (2017, April). Operation Cloud Hopper. Retrieved April 5, 2017.](https://web.archive.org/web/20220224041316/https:/www.pwc.co.uk/cyber-security/pdf/cloud-hopper-report-final-v4.pdf)