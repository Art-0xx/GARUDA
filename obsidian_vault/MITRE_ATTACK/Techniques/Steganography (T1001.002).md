---
mitre_data:
  id: T1001.002
  linker_tags:
  - mitre/attack/linker/command_and_control/steganography
  name: Steganography
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Steganography (`T1001.002`)

Adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. Steganographic techniques can be used to hide data in digital messages that are transferred between systems. This hidden information can be used for command and control of compromised systems. In some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control. 


# Platform(s)

- Linux
- macOS
- Windows
- ESXi

# Parent Technique(s)

- [[../Techniques/Data Obfuscation (T1001)|Data Obfuscation]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1001.002](https://attack.mitre.org/techniques/T1001/002)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)
