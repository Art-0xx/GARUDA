---
mitre_data:
  id: T1136.001
  linker_tags:
  - mitre/attack/linker/persistence/local_account
  name: Local Account
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Local Account (`T1136.001`)

Adversaries may create a local account to maintain access to victim systems. Local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. 

For example, with a sufficient level of access, the Windows <code>net user /add</code> command can be used to create a local account.  In Linux, the `useradd` command can be used, while on macOS systems, the <code>dscl -create</code> command can be used. Local accounts may also be added to network devices, often via common [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as <code>username</code>, to ESXi servers via `esxcli system account add`, or to Kubernetes clusters using the `kubectl` utility.[^fn1][^fn3]

Adversaries may also create new local accounts on network firewall management consoles – for example, by exploiting a vulnerable firewall management system, threat actors may be able to establish super-admin accounts that could be used to modify firewall rules and gain further access to the network.[^fn2]

Such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.


# Platform(s)

- Containers
- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Create Account (T1136)|Create Account]]

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/Empire|Empire]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1136.001](https://attack.mitre.org/techniques/T1136/001)
- [Lich, B., Miroshnikov, A. (2017, April 5). 4720(S): A user account was created. Retrieved June 30, 2017.](https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4720)

[^fn1]: [Cisco. (2023, March 6). username - Cisco IOS Security Command Reference: Commands S to Z. Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/s1/sec-s1-cr-book/sec-cr-t2.html#wp1047035630)
[^fn2]: [Kaaviya. (n.d.). SuperBlack Actors Exploiting Two Fortinet Vulnerabilities to Deploy Ransomware. Retrieved September 22, 2025.](https://cybersecuritynews.com/superblack-actors-exploiting-two-fortinet-vulnerabilities/)
[^fn3]: [Kubernetes. (n.d.). Service Accounts. Retrieved July 14, 2023.](https://kubernetes.io/docs/concepts/security/service-accounts/)