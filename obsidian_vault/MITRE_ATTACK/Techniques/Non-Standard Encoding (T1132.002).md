---
mitre_data:
  id: T1132.002
  linker_tags:
  - mitre/attack/linker/command_and_control/non-standard_encoding
  name: Non-Standard Encoding
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Non-Standard Encoding (`T1132.002`)

Adversaries may encode data with a non-standard data encoding system to make the content of command and control traffic more difficult to detect. Command and control (C2) information can be encoded using a non-standard data encoding system that diverges from existing protocol specifications. Non-standard data encoding schemes may be based on or related to standard data encoding schemes, such as a modified Base64 encoding for the message body of an HTTP request.[^fn1][^fn2] 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Data Encoding (T1132)|Data Encoding]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1132.002](https://attack.mitre.org/techniques/T1132/002)

[^fn1]: [Wikipedia. (2016, December 26). Binary-to-text encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Binary-to-text_encoding)
[^fn2]: [Wikipedia. (2017, February 19). Character Encoding. Retrieved March 1, 2017.](https://en.wikipedia.org/wiki/Character_encoding)