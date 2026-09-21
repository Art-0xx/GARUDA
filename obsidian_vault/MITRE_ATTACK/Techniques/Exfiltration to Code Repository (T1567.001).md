---
mitre_data:
  id: T1567.001
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_to_code_repository
  name: Exfiltration to Code Repository
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration to Code Repository (`T1567.001`)

Adversaries may exfiltrate data to a code repository rather than over their primary command and control channel. Code repositories are often accessible via an API (ex: https://api.github.com). Access to these APIs are often over HTTPS, which gives the adversary an additional level of protection.

Exfiltration to a code repository can also provide a significant amount of cover to the adversary if it is a popular service already used by hosts within the network. 


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Web Service (T1567)|Exfiltration Over Web Service]]

# Tool(s)

- [[../Tools/Empire|Empire]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1567.001](https://attack.mitre.org/techniques/T1567/001)
