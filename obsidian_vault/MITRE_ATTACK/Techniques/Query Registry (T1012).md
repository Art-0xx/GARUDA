---
mitre_data:
  id: T1012
  linker_tags:
  - mitre/attack/linker/discovery/query_registry
  name: Query Registry
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Query Registry (`T1012`)

Adversaries may interact with the Windows Registry to gather information about the system, configuration, and installed software.

The Registry contains a significant amount of information about the operating system, configuration, software, and security.[^fn1] Information can easily be queried using the [Reg](https://attack.mitre.org/software/S0075) utility, though other means to access the Registry exist. Some of the information may help adversaries to further their operation within a network. Adversaries may use the information from [Query Registry](https://attack.mitre.org/techniques/T1012) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.


# Platform(s)

- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Reg|Reg]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1012](https://attack.mitre.org/techniques/T1012)

[^fn1]: [Wikipedia. (n.d.). Windows Registry. Retrieved February 2, 2015.](https://en.wikipedia.org/wiki/Windows_Registry)