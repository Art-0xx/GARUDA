---
mitre_data:
  id: T1011
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_other_network_medium
  name: Exfiltration Over Other Network Medium
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Other Network Medium (`T1011`)

Adversaries may attempt to exfiltrate data over a different network medium than the command and control channel. If the command and control network is a wired Internet connection, the exfiltration may occur, for example, over a WiFi connection, modem, cellular data connection, Bluetooth, or another radio frequency (RF) channel.

Adversaries may choose to do this if they have sufficient access or proximity, and the connection might not be secured or defended as well as the primary Internet-connected channel because it is not routed through the same enterprise network.


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Exfiltration Over Bluetooth (T1011.001)|Exfiltration Over Bluetooth]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1011](https://attack.mitre.org/techniques/T1011)
