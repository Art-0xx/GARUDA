---
mitre_data:
  id: T1052.001
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_usb
  name: Exfiltration over USB
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration over USB (`T1052.001`)

Adversaries may attempt to exfiltrate data over a USB connected physical device. In certain circumstances, such as an air-gapped network compromise, exfiltration could occur via a USB device introduced by a user. The USB device could be used as the final exfiltration point or to hop between otherwise disconnected systems.


# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Physical Medium (T1052)|Exfiltration Over Physical Medium]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1052.001](https://attack.mitre.org/techniques/T1052/001)
