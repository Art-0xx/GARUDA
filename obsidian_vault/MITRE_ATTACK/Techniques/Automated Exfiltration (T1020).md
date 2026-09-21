---
mitre_data:
  id: T1020
  linker_tags:
  - mitre/attack/linker/exfiltration/automated_exfiltration
  name: Automated Exfiltration
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Automated Exfiltration (`T1020`)

Adversaries may exfiltrate data, such as sensitive documents, through the use of automated processing after being gathered during Collection.[^fn1] 

When automated exfiltration is used, other exfiltration techniques likely apply as well to transfer the information out of the network, such as [Exfiltration Over C2 Channel](https://attack.mitre.org/techniques/T1041) and [Exfiltration Over Alternative Protocol](https://attack.mitre.org/techniques/T1048).


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Traffic Duplication (T1020.001)|Traffic Duplication]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1020](https://attack.mitre.org/techniques/T1020)

[^fn1]: [Boutin, J. (2020, June 11). Gamaredon group grows its game. Retrieved June 16, 2020.](https://www.welivesecurity.com/2020/06/11/gamaredon-group-grows-its-game/)