---
mitre_data:
  id: T1069.002
  linker_tags:
  - mitre/attack/linker/discovery/domain_groups
  name: Domain Groups
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Domain Groups (`T1069.002`)

Adversaries may attempt to find domain-level groups and permission settings. The knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. Adversaries may use this information to determine which users have elevated permissions, such as domain administrators.

Commands such as <code>net group /domain</code> of the [Net](https://attack.mitre.org/software/S0039) utility,  <code>dscacheutil -q group</code> on macOS, and <code>ldapsearch</code> on Linux can list domain-level groups.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Permission Groups Discovery (T1069)|Permission Groups Discovery]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/dsquery|dsquery]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/AdFind|AdFind]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1069.002](https://attack.mitre.org/techniques/T1069/002)
