---
mitre_data:
  id: T1036.005
  linker_tags:
  - mitre/attack/linker/stealth/match_legitimate_resource_name_or_location
  name: Match Legitimate Resource Name or Location
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Match Legitimate Resource Name or Location (`T1036.005`)

Adversaries may match or approximate the name or location of legitimate files, Registry keys, or other resources when naming/placing them. This is done for the sake of evading defenses and observation. 

This may be done by placing an executable in a commonly trusted directory (ex: under System32) or giving it the name of a legitimate, trusted program (ex: `svchost.exe`). Alternatively, a Windows Registry key may be given a close approximation to a key used by a legitimate program. In containerized environments, a threat actor may create a resource in a trusted namespace or one that matches the naming convention of a container pod or cluster.[^fn1]


# Platform(s)

- Containers
- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Masquerading (T1036)|Masquerading]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/MCMD|MCMD]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1036.005](https://attack.mitre.org/techniques/T1036/005)

[^fn1]: [Michael Katchinskiy and Assaf Morag. (2023, April 21). First-Ever Attack Leveraging Kubernetes RBAC to Backdoor Clusters. Retrieved March 24, 2025.](https://www.aquasec.com/blog/leveraging-kubernetes-rbac-to-backdoor-clusters/)