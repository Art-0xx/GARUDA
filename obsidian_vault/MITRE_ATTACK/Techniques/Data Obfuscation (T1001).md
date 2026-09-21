---
mitre_data:
  id: T1001
  linker_tags:
  - mitre/attack/linker/command_and_control/data_obfuscation
  name: Data Obfuscation
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Data Obfuscation (`T1001`)

Adversaries may obfuscate command and control traffic to make it more difficult to detect.[^fn2] Command and control (C2) communications are hidden (but not necessarily encrypted) in an attempt to make the content more difficult to discover or decipher and to make the communication less conspicuous and hide commands from being seen. This encompasses many methods, such as adding junk data to protocol traffic, using steganography, or impersonating legitimate protocols. 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Protocol or Service Impersonation (T1001.003)|Protocol or Service Impersonation]]
- [[../Techniques/Steganography (T1001.002)|Steganography]]
- [[../Techniques/Junk Data (T1001.001)|Junk Data]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1001](https://attack.mitre.org/techniques/T1001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Vrabie, V. (2020, November). Dissecting a Chinese APT Targeting South Eastern Asian Government Institutions. Retrieved September 19, 2022.](https://www.bitdefender.com/files/News/CaseStudies/study/379/Bitdefender-Whitepaper-Chinese-APT.pdf)