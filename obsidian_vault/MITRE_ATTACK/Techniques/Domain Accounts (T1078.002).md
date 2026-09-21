---
mitre_data:
  id: T1078.002
  linker_tags:
  - mitre/attack/linker/stealth/domain_accounts
  - mitre/attack/linker/persistence/domain_accounts
  - mitre/attack/linker/privilege_escalation/domain_accounts
  - mitre/attack/linker/initial_access/domain_accounts
  name: Domain Accounts
  related_tactics:
  - stealth
  - persistence
  - privilege_escalation
  - initial_access
tags:
- mitre/attack/technique
---



# Domain Accounts (`T1078.002`)

Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.[^fn1] Domain accounts are those managed by Active Directory Domain Services where access and permissions are configured across systems and services that are part of that domain. Domain accounts can cover users, administrators, and services.[^fn2]

Adversaries may compromise domain accounts, some with a high level of privileges, through various means such as [OS Credential Dumping](https://attack.mitre.org/techniques/T1003) or password reuse, allowing access to privileged resources of the domain.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Valid Accounts (T1078)|Valid Accounts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1078.002](https://attack.mitre.org/techniques/T1078/002)

[^fn1]: [Microsoft. (2016, April 15). Attractive Accounts for Credential Theft. Retrieved June 3, 2016.](https://technet.microsoft.com/en-us/library/dn535501.aspx)
[^fn2]: [Microsoft. (2019, August 23). Active Directory Accounts. Retrieved March 13, 2020.](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/active-directory-accounts)