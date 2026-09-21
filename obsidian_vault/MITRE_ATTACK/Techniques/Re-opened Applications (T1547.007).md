---
mitre_data:
  id: T1547.007
  linker_tags:
  - mitre/attack/linker/persistence/re-opened_applications
  - mitre/attack/linker/privilege_escalation/re-opened_applications
  name: Re-opened Applications
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Re-opened Applications (`T1547.007`)

Adversaries may modify plist files to automatically run an application when a user logs in. When a user logs out or restarts via the macOS Graphical User Interface (GUI), a prompt is provided to the user with a checkbox to "Reopen windows when logging back in".[^fn1] When selected, all applications currently open are added to a property list file named <code>com.apple.loginwindow.[UUID].plist</code> within the <code>~/Library/Preferences/ByHost</code> directory.[^fn2][^fn3] Applications listed in this file are automatically reopened upon the user’s next logon.

Adversaries can establish [Persistence](https://attack.mitre.org/tactics/TA0003) by adding a malicious application path to the <code>com.apple.loginwindow.[UUID].plist</code> file to execute payloads when a user logs in.


# Platform(s)

- macOS

# Parent Technique(s)

- [[../Techniques/Boot or Logon Autostart Execution (T1547)|Boot or Logon Autostart Execution]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1547.007](https://attack.mitre.org/techniques/T1547/007)

[^fn1]: [Apple. (2016, December 6). Automatically re-open windows, apps, and documents on your Mac. Retrieved July 11, 2017.](https://support.apple.com/en-us/HT204005)
[^fn2]: [Patrick Wardle. (2014, September). Methods of Malware Persistence on Mac OS X. Retrieved July 5, 2017.](https://www.virusbulletin.com/uploads/pdf/conference/vb2014/VB2014-Wardle.pdf)
[^fn3]: [Patrick Wardle. (n.d.). Chapter 0x2: Persistence. Retrieved April 13, 2022.](https://taomm.org/PDFs/vol1/CH%200x02%20Persistence.pdf)