---
mitre_data:
  id: T1037.001
  linker_tags:
  - mitre/attack/linker/persistence/logon_script_windows
  - mitre/attack/linker/privilege_escalation/logon_script_windows
  name: Logon Script (Windows)
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Logon Script (Windows) (`T1037.001`)

Adversaries may use Windows logon scripts automatically executed at logon initialization to establish persistence. Windows allows logon scripts to be run whenever a specific user or group of users log into a system.[^fn2] This is done via adding a path to a script to the <code>HKCU\Environment\UserInitMprLogonScript</code> Registry key.[^fn1]

Adversaries may use these scripts to maintain persistence on a single system. Depending on the access configuration of the logon scripts, either local credentials or an administrator account may be necessary. 


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Boot or Logon Initialization Scripts (T1037)|Boot or Logon Initialization Scripts]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037.001](https://attack.mitre.org/techniques/T1037/001)

[^fn1]: [Hexacorn. (2014, November 14). Beyond good ol’ Run key, Part 18. Retrieved November 15, 2019.](http://www.hexacorn.com/blog/2014/11/14/beyond-good-ol-run-key-part-18/)
[^fn2]: [Microsoft. (2005, January 21). Creating logon scripts. Retrieved April 27, 2016.](https://technet.microsoft.com/en-us/library/cc758918(v=ws.10).aspx)