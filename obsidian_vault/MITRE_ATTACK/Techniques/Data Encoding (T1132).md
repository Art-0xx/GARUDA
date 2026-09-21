---
mitre_data:
  id: T1132
  linker_tags:
  - mitre/attack/linker/command_and_control/data_encoding
  name: Data Encoding
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Data Encoding (`T1132`)

Adversaries may encode data to make the content of command and control traffic more difficult to detect. Command and control (C2) information can be encoded using a standard data encoding system. Use of data encoding may adhere to existing protocol specifications and includes use of ASCII, Unicode, Base64, MIME, or other binary-to-text and character encoding systems.[^fn2] [^fn3] Some data encoding systems may also result in data compression, such as gzip.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Standard Encoding (T1132.001)|Standard Encoding]]
- [[../Techniques/Non-Standard Encoding (T1132.002)|Non-Standard Encoding]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/Mythic|Mythic]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1132](https://attack.mitre.org/techniques/T1132)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Wikipedia. (2016, December 26). Binary-to-text encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Binary-to-text_encoding)
[^fn3]: [Wikipedia. (2017, February 19). Character Encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Character_encoding)