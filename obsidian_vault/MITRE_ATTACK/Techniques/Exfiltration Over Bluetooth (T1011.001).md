---
mitre_data:
  id: T1011.001
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_bluetooth
  name: Exfiltration Over Bluetooth
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Bluetooth (`T1011.001`)

Adversaries may attempt to exfiltrate data over Bluetooth rather than the command and control channel. If the command and control network is a wired Internet connection, an adversary may opt to exfiltrate data using a Bluetooth communication channel.

Adversaries may choose to do this if they have sufficient access and proximity. Bluetooth connections might not be secured or defended as well as the primary Internet-connected channel because it is not routed through the same enterprise network.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Other Network Medium (T1011)|Exfiltration Over Other Network Medium]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1011.001](https://attack.mitre.org/techniques/T1011/001)
