---
mitre_data:
  id: T1052
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_physical_medium
  name: Exfiltration Over Physical Medium
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Physical Medium (`T1052`)

Adversaries may attempt to exfiltrate data via a physical medium, such as a removable drive. In certain circumstances, such as an air-gapped network compromise, exfiltration could occur via a physical medium or device introduced by a user. Such media could be an external hard drive, USB drive, cellular phone, MP3 player, or other removable storage and processing device. The physical medium or device could be used as the final exfiltration point or to hop between otherwise disconnected systems.


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Exfiltration over USB (T1052.001)|Exfiltration over USB]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1052](https://attack.mitre.org/techniques/T1052)
