---
mitre_data:
  id: T1552
  linker_tags:
  - mitre/attack/linker/credential_access/unsecured_credentials
  name: Unsecured Credentials
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Unsecured Credentials (`T1552`)

Adversaries may search compromised systems to find and obtain insecurely stored credentials. These credentials can be stored and/or misplaced in many locations on a system, including plaintext files (e.g. [Shell History](https://attack.mitre.org/techniques/T1552/003)), operating system or application-specific repositories (e.g. [Credentials in Registry](https://attack.mitre.org/techniques/T1552/002)),  or other specialized files/artifacts (e.g. [Private Keys](https://attack.mitre.org/techniques/T1552/004)).[^fn1]


# Platform(s)

- Windows
- SaaS
- IaaS
- Linux
- macOS
- Containers
- Network Devices
- Office Suite
- Identity Provider

# Sub-Technique(s)

- [[../Techniques/Cloud Instance Metadata API (T1552.005)|Cloud Instance Metadata API]]
- [[../Techniques/Credentials in Registry (T1552.002)|Credentials in Registry]]
- [[../Techniques/Private Keys (T1552.004)|Private Keys]]
- [[../Techniques/Shell History (T1552.003)|Shell History]]
- [[../Techniques/Credentials In Files (T1552.001)|Credentials In Files]]
- [[../Techniques/Group Policy Preferences (T1552.006)|Group Policy Preferences]]
- [[../Techniques/Chat Messages (T1552.008)|Chat Messages]]
- [[../Techniques/Container API (T1552.007)|Container API]]

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]
- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552](https://attack.mitre.org/techniques/T1552)

[^fn1]: [Tim Wadhwa-Brown. (2018, November). Where 2 worlds collide Bringing Mimikatz et al to UNIX. Retrieved October 13, 2021.](https://labs.portcullis.co.uk/download/eu-18-Wadhwa-Brown-Where-2-worlds-collide-Bringing-Mimikatz-et-al-to-UNIX.pdf)