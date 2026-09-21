---
mitre_data:
  id: T1078.001
  linker_tags:
  - mitre/attack/linker/stealth/default_accounts
  - mitre/attack/linker/persistence/default_accounts
  - mitre/attack/linker/privilege_escalation/default_accounts
  - mitre/attack/linker/initial_access/default_accounts
  name: Default Accounts
  related_tactics:
  - stealth
  - persistence
  - privilege_escalation
  - initial_access
tags:
- mitre/attack/technique
---



# Default Accounts (`T1078.001`)

Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Default accounts are those that are built-into an OS, such as the Guest or Administrator accounts on Windows systems. Default accounts also include default factory/provider set accounts on other types of systems, software, or devices, including the root user account in AWS, the root user account in ESXi, and the default service account in Kubernetes.[^fn3][^fn2][^fn5]

Default accounts are not limited to client machines; rather, they also include accounts that are preset for equipment such as network devices and computer applications, whether they are internal, open source, or commercial. Appliances that come preset with a username and password combination pose a serious threat to organizations that do not change it post installation, as they are easy targets for an adversary. Similarly, adversaries may also utilize publicly disclosed or stolen [Private Keys](https://attack.mitre.org/techniques/T1552/004) or credential materials to legitimately connect to remote environments via [Remote Services](https://attack.mitre.org/techniques/T1021).[^fn4]

Default accounts may be created on a system after initial setup by connecting or integrating it with another application. For example, when an ESXi server is connected to a vCenter server, a default privileged account called `vpxuser` is created on the ESXi server. If a threat actor is able to compromise this account’s credentials (for example, via [Exploitation for Credential Access](https://attack.mitre.org/techniques/T1212) on the vCenter host), they will then have access to the ESXi server.[^fn1][^fn6]


# Platform(s)

- Containers
- ESXi
- IaaS
- Identity Provider
- Linux
- macOS
- Network Devices
- Office Suite
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Valid Accounts (T1078)|Valid Accounts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1078.001](https://attack.mitre.org/techniques/T1078/001)

[^fn1]: [Alexander Marvi, Brad Slaybaugh, Ron Craft, and Rufus Brown. (2023, June 13). VMware ESXi Zero-Day Used by Chinese Espionage Actor to Perform Privileged Guest Operations on Compromised Hypervisors. Retrieved March 26, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/vmware-esxi-zero-day-bypass/)
[^fn2]: [Amazon. (n.d.). AWS Account Root User. Retrieved April 5, 2021.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html)
[^fn3]: [Microsoft. (2018, December 9). Local Accounts. Retrieved February 11, 2019.](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/local-accounts)
[^fn4]: [undefined. (n.d.). Retrieved April 12, 2019.](https://github.com/rapid7/metasploit-framework/tree/master/modules/exploits/linux/ssh)
[^fn5]: [Weizman, Y. (2020, April 2). Threat Matrix for Kubernetes. Retrieved March 30, 2021.](https://www.microsoft.com/security/blog/2020/04/02/attack-matrix-kubernetes/)
[^fn6]: [Yuval Lazar. (2022, March 29). Mitigating VMware vCenter Information Disclosure. Retrieved March 26, 2025.](https://pentera.io/blog/information-disclosure-in-vmware-vcenter/)