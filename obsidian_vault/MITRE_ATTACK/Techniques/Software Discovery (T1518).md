---
mitre_data:
  id: T1518
  linker_tags:
  - mitre/attack/linker/discovery/software_discovery
  name: Software Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Software Discovery (`T1518`)

Adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. Adversaries may use the information from [Software Discovery](https://attack.mitre.org/techniques/T1518) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.

Such software may be deployed widely across the environment for configuration management or security reasons, such as [Software Deployment Tools](https://attack.mitre.org/techniques/T1072), and may allow adversaries broad access to infect devices or move laterally.

Adversaries may attempt to enumerate software for a variety of reasons, such as figuring out what security measures are present or if the compromised system has a version of software that is vulnerable to [Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068).


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Backup Software Discovery (T1518.002)|Backup Software Discovery]]
- [[../Techniques/Security Software Discovery (T1518.001)|Security Software Discovery]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1518](https://attack.mitre.org/techniques/T1518)
