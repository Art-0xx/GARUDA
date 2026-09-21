---
mitre_data:
  id: T1571
  linker_tags:
  - mitre/attack/linker/command_and_control/non-standard_port
  name: Non-Standard Port
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Non-Standard Port (`T1571`)

Adversaries may communicate using a protocol and port pairing that are typically not associated. For example, HTTPS over port 8088[^fn2] or port 587[^fn4] as opposed to the traditional port 443. Adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.

Adversaries may also make changes to victim systems to abuse non-standard ports. For example, Registry keys and other configuration settings can be used to modify protocol and port pairings.[^fn3]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1571](https://attack.mitre.org/techniques/T1571)
- [Gardiner, J.,  Cova, M., Nagaraja, S. (2014, February). Command & Control Understanding, Denying and Detecting. Retrieved April 20, 2016.](https://arxiv.org/ftp/arxiv/papers/1408/1408.1136.pdf)

[^fn2]: [Security Response attack Investigation Team. (2019, March 27). Elfin: Relentless Espionage Group Targets Multiple Organizations in Saudi Arabia and U.S.. Retrieved April 10, 2019.](https://www.symantec.com/blogs/threat-intelligence/elfin-apt33-espionage)
[^fn3]: [The DFIR Report. (2022, March 1). "Change RDP port" #ContiLeaks. Retrieved September 12, 2024.](https://x.com/TheDFIRReport/status/1498657772254240768)
[^fn4]: [Zhang, X. (2018, April 05). Analysis of New Agent Tesla Spyware Variant. Retrieved November 5, 2018.](https://www.fortinet.com/blog/threat-research/analysis-of-new-agent-tesla-spyware-variant.html)