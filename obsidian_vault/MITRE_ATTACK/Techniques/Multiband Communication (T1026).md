---
mitre_data:
  id: T1026
  linker_tags:
  - mitre/attack/linker/command_and_control/multiband_communication
  name: Multiband Communication
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Multiband Communication (`T1026`)

**This technique has been deprecated and should no longer be used.**

Some adversaries may split communications between different protocols. There could be one protocol for inbound command and control and another for outbound data, allowing it to bypass certain firewall restrictions. The split could also be random to simply avoid data threshold alerts on any one communication.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1026](https://attack.mitre.org/techniques/T1026)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
