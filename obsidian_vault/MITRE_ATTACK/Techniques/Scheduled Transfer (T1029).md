---
mitre_data:
  id: T1029
  linker_tags:
  - mitre/attack/linker/exfiltration/scheduled_transfer
  name: Scheduled Transfer
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Scheduled Transfer (`T1029`)

Adversaries may schedule data exfiltration to be performed only at certain times of day or at certain intervals. This could be done to blend traffic patterns with normal activity or availability.

When scheduled exfiltration is used, other exfiltration techniques likely apply as well to transfer the information out of the network, such as [Exfiltration Over C2 Channel](https://attack.mitre.org/techniques/T1041) or [Exfiltration Over Alternative Protocol](https://attack.mitre.org/techniques/T1048).


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1029](https://attack.mitre.org/techniques/T1029)
