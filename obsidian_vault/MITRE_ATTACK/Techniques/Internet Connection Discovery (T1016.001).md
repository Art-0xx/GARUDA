---
mitre_data:
  id: T1016.001
  linker_tags:
  - mitre/attack/linker/discovery/internet_connection_discovery
  name: Internet Connection Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Internet Connection Discovery (`T1016.001`)

Adversaries may check for Internet connectivity on compromised systems. This may be performed during automated discovery and can be accomplished in numerous ways such as using [Ping](https://attack.mitre.org/software/S0097), <code>tracert</code>, and GET requests to websites, or performing initial speed testing to confirm bandwidth.

Adversaries may use the results and responses from these requests to determine if the system is capable of communicating with their C2 servers before attempting to connect to them. The results may also be used to identify routes, redirectors, and proxy servers.


# Platform(s)

- Windows
- Linux
- macOS
- ESXi

# Parent Technique(s)

- [[../Techniques/System Network Configuration Discovery (T1016)|System Network Configuration Discovery]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1016.001](https://attack.mitre.org/techniques/T1016/001)
