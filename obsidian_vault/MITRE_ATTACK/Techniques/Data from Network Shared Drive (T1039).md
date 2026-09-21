---
mitre_data:
  id: T1039
  linker_tags:
  - mitre/attack/linker/collection/data_from_network_shared_drive
  name: Data from Network Shared Drive
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Network Shared Drive (`T1039`)

Adversaries may search network shares on computers they have compromised to find files of interest. Sensitive data can be collected from remote systems via shared network drives (host shared directory, network file server, etc.) that are accessible from the current system prior to Exfiltration. Interactive command shells may be in use, and common functionality within [cmd](https://attack.mitre.org/software/S0106) may be used to gather information.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1039](https://attack.mitre.org/techniques/T1039)
