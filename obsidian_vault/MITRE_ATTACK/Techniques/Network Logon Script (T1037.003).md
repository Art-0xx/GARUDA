---
mitre_data:
  id: T1037.003
  linker_tags:
  - mitre/attack/linker/persistence/network_logon_script
  - mitre/attack/linker/privilege_escalation/network_logon_script
  name: Network Logon Script
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Network Logon Script (`T1037.003`)

Adversaries may use network logon scripts automatically executed at logon initialization to establish persistence. Network logon scripts can be assigned using Active Directory or Group Policy Objects.[^fn1] These logon scripts run with the privileges of the user they are assigned to. Depending on the systems within the network, initializing one of these scripts could apply to more than one or potentially all systems.  
 
Adversaries may use these scripts to maintain persistence on a network. Depending on the access configuration of the logon scripts, either local credentials or an administrator account may be necessary.


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Initialization Scripts (T1037)|Boot or Logon Initialization Scripts]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037.003](https://attack.mitre.org/techniques/T1037/003)

[^fn1]: [Daniel Petri. (2009, January 8). Setting up a Logon Script through Active Directory Users and Computers in Windows Server 2008. Retrieved November 15, 2019.](https://www.petri.com/setting-up-logon-script-through-active-directory-users-computers-windows-server-2008)