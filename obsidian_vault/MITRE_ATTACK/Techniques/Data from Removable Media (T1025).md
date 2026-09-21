---
mitre_data:
  id: T1025
  linker_tags:
  - mitre/attack/linker/collection/data_from_removable_media
  name: Data from Removable Media
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Removable Media (`T1025`)

Adversaries may search connected removable media on computers they have compromised to find files of interest. Sensitive data can be collected from any removable media (optical disk drive, USB memory, etc.) connected to the compromised system prior to Exfiltration. Interactive command shells may be in use, and common functionality within [cmd](https://attack.mitre.org/software/S0106) may be used to gather information. 

Some adversaries may also use [Automated Collection](https://attack.mitre.org/techniques/T1119) on removable media.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1025](https://attack.mitre.org/techniques/T1025)
