---
mitre_data:
  id: T1041
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_c2_channel
  name: Exfiltration Over C2 Channel
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over C2 Channel (`T1041`)

Adversaries may steal data by exfiltrating it over an existing command and control channel. Stolen data is encoded into the normal communications channel using the same protocol as command and control communications.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1041](https://attack.mitre.org/techniques/T1041)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
