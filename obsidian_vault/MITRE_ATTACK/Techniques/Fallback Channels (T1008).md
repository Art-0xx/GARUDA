---
mitre_data:
  id: T1008
  linker_tags:
  - mitre/attack/linker/command_and_control/fallback_channels
  name: Fallback Channels
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Fallback Channels (`T1008`)

Adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1008](https://attack.mitre.org/techniques/T1008)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
