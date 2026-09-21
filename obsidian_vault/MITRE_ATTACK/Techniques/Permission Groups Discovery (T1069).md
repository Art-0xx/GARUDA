---
mitre_data:
  id: T1069
  linker_tags:
  - mitre/attack/linker/discovery/permission_groups_discovery
  name: Permission Groups Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Permission Groups Discovery (`T1069`)

Adversaries may attempt to discover group and permission settings. This information can help adversaries determine which user accounts and groups are available, the membership of users in particular groups, and which users and groups have elevated permissions.

Adversaries may attempt to discover group permission settings in many different ways. This data may provide the adversary with information about the compromised environment that can be used in follow-on activity and targeting.[^fn2]


# Platform(s)

- Containers
- IaaS
- Identity Provider
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Sub-Technique(s)

- [[../Techniques/Cloud Groups (T1069.003)|Cloud Groups]]
- [[../Techniques/Domain Groups (T1069.002)|Domain Groups]]
- [[../Techniques/Local Groups (T1069.001)|Local Groups]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1069](https://attack.mitre.org/techniques/T1069)
- [Kubernetes. (n.d.). Authorization Overview. Retrieved June 24, 2021.](https://kubernetes.io/docs/reference/access-authn-authz/authorization/)

[^fn2]: [Red Team Labs. (2018, April 24). Hidden Administrative Accounts: BloodHound to the Rescue. Retrieved October 28, 2020.](https://www.crowdstrike.com/blog/hidden-administrative-accounts-bloodhound-to-the-rescue/)