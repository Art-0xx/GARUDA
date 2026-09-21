---
mitre_data:
  id: T1136
  linker_tags:
  - mitre/attack/linker/persistence/create_account
  name: Create Account
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Create Account (`T1136`)

Adversaries may create an account to maintain access to victim systems.[^fn2] With a sufficient level of access, creating such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.

Accounts may be created on the local system or within a domain or cloud tenant. In cloud environments, adversaries may create accounts that only have access to specific services, which can reduce the chance of detection.


# Platform(s)

- Windows
- IaaS
- Linux
- macOS
- Network Devices
- Containers
- SaaS
- Office Suite
- Identity Provider
- ESXi

# Sub-Technique(s)

- [[../Techniques/Local Account (T1136.001)|Local Account]]
- [[../Techniques/Domain Account (T1136.002)|Domain Account]]
- [[../Techniques/Cloud Account (T1136.003)|Cloud Account]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1136](https://attack.mitre.org/techniques/T1136)
- [Lich, B., Miroshnikov, A. (2017, April 5). 4720(S): A user account was created. Retrieved June 30, 2017.](https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4720)

[^fn2]: [Symantec Threat Intelligence. (2020, June 25). WastedLocker: Symantec Identifies Wave of Attacks Against U.S. Organizations. Retrieved May 20, 2021.](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/wastedlocker-ransomware-us)