---
mitre_data:
  id: T1069.001
  linker_tags:
  - mitre/attack/linker/discovery/local_groups
  name: Local Groups
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Local Groups (`T1069.001`)

Adversaries may attempt to find local system groups and permission settings. The knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. Adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.

Commands such as <code>net localgroup</code> of the [Net](https://attack.mitre.org/software/S0039) utility, <code>dscl . -list /Groups</code> on macOS, and <code>groups</code> on Linux can list local groups.


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
- [[../Tools/PoshC2|PoshC2]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1069.001](https://attack.mitre.org/techniques/T1069/001)
