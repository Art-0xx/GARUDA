---
mitre_data:
  id: T1136.002
  linker_tags:
  - mitre/attack/linker/persistence/domain_account
  name: Domain Account
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Domain Account (`T1136.002`)

Adversaries may create a domain account to maintain access to victim systems. Domain accounts are those managed by Active Directory Domain Services where access and permissions are configured across systems and services that are part of that domain. Domain accounts can cover user, administrator, and service accounts. With a sufficient level of access, the <code>net user /add /domain</code> command can be used to create a domain account.[^fn2]

Such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Create Account (T1136)|Create Account]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/PsExec|PsExec]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1136.002](https://attack.mitre.org/techniques/T1136/002)
- [Lich, B., Miroshnikov, A. (2017, April 5). 4720(S): A user account was created. Retrieved June 30, 2017.](https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4720)

[^fn2]: [Savill, J. (1999, March 4). Net.exe reference. Retrieved September 22, 2015.](https://web.archive.org/web/20150511162820/http://windowsitpro.com/windows/netexe-reference)