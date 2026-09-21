---
mitre_data:
  id: T1518.002
  linker_tags:
  - mitre/attack/linker/discovery/backup_software_discovery
  name: Backup Software Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Backup Software Discovery (`T1518.002`)

Adversaries may attempt to get a listing of backup software or configurations that are installed on a system. Adversaries may use this information to shape follow-on behaviors, such as [Data Destruction](https://attack.mitre.org/techniques/T1485), [Inhibit System Recovery](https://attack.mitre.org/techniques/T1490), or [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486).  

Commands that can be used to obtain security software information are [netsh](https://attack.mitre.org/software/S0108), `reg query` with [Reg](https://attack.mitre.org/software/S0075), `dir` with [cmd](https://attack.mitre.org/software/S0106), and [Tasklist](https://attack.mitre.org/software/S0057), but other indicators of discovery behavior may be more specific to the type of software or security system the adversary is looking for, such as Veeam, Acronis, Dropbox, or Paragon.[^fn1]


# Platform(s)

- Windows
- macOS
- Linux

# Parent Technique(s)

- [[../Techniques/Software Discovery (T1518)|Software Discovery]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1518.002](https://attack.mitre.org/techniques/T1518/002)

[^fn1]: [Symantec Threat Hunter Team. (2023, April 19). Play Ransomware Group Using New Custom Data-Gathering Tools. Retrieved May 22, 2025.](https://www.security.com/threat-intelligence/play-ransomware-volume-shadow-copy)