---
mitre_data:
  id: T1037.005
  linker_tags:
  - mitre/attack/linker/persistence/startup_items
  - mitre/attack/linker/privilege_escalation/startup_items
  name: Startup Items
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Startup Items (`T1037.005`)

Adversaries may use startup items automatically executed at boot initialization to establish persistence. Startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.[^fn1]

This is technically a deprecated technology (superseded by [Launch Daemon](https://attack.mitre.org/techniques/T1543/004)), and thus the appropriate folder, <code>/Library/StartupItems</code> isn’t guaranteed to exist on the system by default, but does appear to exist by default on macOS Sierra. A startup item is a directory whose executable and configuration property list (plist), <code>StartupParameters.plist</code>, reside in the top-level directory. 

An adversary can create the appropriate folders/files in the StartupItems directory to register their own persistence mechanism.[^fn2] Additionally, since StartupItems run during the bootup phase of macOS, they will run as the elevated root user.


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Boot or Logon Initialization Scripts (T1037)|Boot or Logon Initialization Scripts]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1037.005](https://attack.mitre.org/techniques/T1037/005)

[^fn1]: [Apple. (2016, September 13). Startup Items. Retrieved July 11, 2017.](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/StartupItems.html)
[^fn2]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)