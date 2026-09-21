---
mitre_data:
  id: T1132.001
  linker_tags:
  - mitre/attack/linker/command_and_control/standard_encoding
  name: Standard Encoding
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Standard Encoding (`T1132.001`)

Adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. Command and control (C2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. Common data encoding schemes include ASCII, Unicode, hexadecimal, Base64, and MIME.[^fn2][^fn3] Some data encoding systems may also result in data compression, such as gzip.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Data Encoding (T1132)|Data Encoding]]

# Tool(s)

- [[../Tools/Sliver|Sliver]]
- [[../Tools/Remcos|Remcos]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1132.001](https://attack.mitre.org/techniques/T1132/001)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Wikipedia. (2016, December 26). Binary-to-text encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Binary-to-text_encoding)
[^fn3]: [Wikipedia. (2017, February 19). Character Encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Character_encoding)