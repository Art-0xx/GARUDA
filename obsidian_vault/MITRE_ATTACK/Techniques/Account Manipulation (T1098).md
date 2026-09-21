---
mitre_data:
  id: T1098
  linker_tags:
  - mitre/attack/linker/persistence/account_manipulation
  - mitre/attack/linker/privilege_escalation/account_manipulation
  name: Account Manipulation
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Account Manipulation (`T1098`)

Adversaries may manipulate accounts to maintain and/or elevate access to victim systems. Account manipulation may consist of any action that preserves or modifies adversary access to a compromised account, such as modifying credentials or permission groups.[^fn1] These actions could also include account activity designed to subvert security policies, such as performing iterative password updates to bypass password duration policies and preserve the life of compromised credentials. 

In order to create or manipulate accounts, the adversary must already have sufficient permissions on systems or the domain. However, account manipulation may also lead to privilege escalation where modifications grant access to additional roles, permissions, or higher-privileged [Valid Accounts](https://attack.mitre.org/techniques/T1078).


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

# Sub-Technique(s)

- [[../Techniques/Additional Cloud Roles (T1098.003)|Additional Cloud Roles]]
- [[../Techniques/Additional Container Cluster Roles (T1098.006)|Additional Container Cluster Roles]]
- [[../Techniques/Additional Local or Domain Groups (T1098.007)|Additional Local or Domain Groups]]
- [[../Techniques/SSH Authorized Keys (T1098.004)|SSH Authorized Keys]]
- [[../Techniques/Device Registration (T1098.005)|Device Registration]]
- [[../Techniques/Additional Cloud Credentials (T1098.001)|Additional Cloud Credentials]]
- [[../Techniques/Additional Email Delegate Permissions (T1098.002)|Additional Email Delegate Permissions]]

# Tool(s)

- [[../Tools/Mimikatz|Mimikatz]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098](https://attack.mitre.org/techniques/T1098)
- [Franklin Smith, R. (n.d.). Windows Security Log Event ID 4670. Retrieved November 4, 2019.](https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventID=4670)
- [Lich, B., Miroshnikov, A. (2017, April 5). 4738(S): A user account was changed. Retrieved June 30, 2017.](https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4738)
- [Warren, J. (2017, July 11). Manipulating User Passwords with Mimikatz. Retrieved December 4, 2017.](https://blog.stealthbits.com/manipulating-user-passwords-with-mimikatz-SetNTLM-ChangeNTLM)
- [Warren, J. (2017, June 22). lsadump::changentlm and lsadump::setntlm work, but generate Windows events #92. Retrieved December 4, 2017.](https://github.com/gentilkiwi/mimikatz/issues/92)

[^fn1]: [FireEye. (2021, June 16). Smoking Out a DARKSIDE Affiliate’s Supply Chain Software Compromise. Retrieved September 22, 2021.](https://www.fireeye.com/blog/threat-research/2021/06/darkside-affiliate-supply-chain-software-compromise.html)