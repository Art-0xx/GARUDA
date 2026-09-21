---
mitre_data:
  id: T1021.006
  linker_tags:
  - mitre/attack/linker/lateral_movement/windows_remote_management
  name: Windows Remote Management
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Windows Remote Management (`T1021.006`)

Adversaries may use [Valid Accounts](https://attack.mitre.org/techniques/T1078) to interact with remote systems using Windows Remote Management (WinRM). The adversary may then perform actions as the logged-on user.

WinRM is the name of both a Windows service and a protocol that allows a user to interact with a remote system (e.g., run an executable, modify the Registry, modify services).[^fn4] It may be called with the `winrm` command or by any number of programs such as PowerShell.[^fn2] WinRM  can be used as a method of remotely interacting with [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047).[^fn3]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.006](https://attack.mitre.org/techniques/T1021/006)
- [French, D. (2018, September 30). Detecting Lateral Movement Using Sysmon and Splunk. Retrieved October 11, 2019.](https://medium.com/threatpunter/detecting-lateral-movement-using-sysmon-and-splunk-318d3be141bc)

[^fn2]: [Jacobsen, K. (2014, May 16). Lateral Movement with PowerShell&#91;slides&#93;. Retrieved November 12, 2014.](https://www.slideshare.net/kieranjacobsen/lateral-movement-with-power-shell-2)
[^fn3]: [Microsoft. (n.d.). Windows Management Instrumentation. Retrieved April 27, 2016.](https://msdn.microsoft.com/en-us/library/aa394582.aspx)
[^fn4]: [Microsoft. (n.d.). Windows Remote Management. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/winrm/portal)