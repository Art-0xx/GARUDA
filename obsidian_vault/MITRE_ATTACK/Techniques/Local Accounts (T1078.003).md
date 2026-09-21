---
mitre_data:
  id: T1078.003
  linker_tags:
  - mitre/attack/linker/stealth/local_accounts
  - mitre/attack/linker/persistence/local_accounts
  - mitre/attack/linker/privilege_escalation/local_accounts
  - mitre/attack/linker/initial_access/local_accounts
  name: Local Accounts
  related_tactics:
  - stealth
  - persistence
  - privilege_escalation
  - initial_access
tags:
- mitre/attack/technique
---



# Local Accounts (`T1078.003`)

Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.

Local Accounts may also be abused to elevate privileges and harvest credentials through [OS Credential Dumping](https://attack.mitre.org/techniques/T1003). Password reuse may allow the abuse of local accounts across a set of machines on a network for the purposes of Privilege Escalation and Lateral Movement. 


# Platform(s)

- Containers
- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Valid Accounts (T1078)|Valid Accounts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]
- [[../Tactics/3. Initial Access|Initial Access]]


# External Reference(s)

- [T1078.003](https://attack.mitre.org/techniques/T1078/003)
