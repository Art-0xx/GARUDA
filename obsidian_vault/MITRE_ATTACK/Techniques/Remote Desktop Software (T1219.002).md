---
mitre_data:
  id: T1219.002
  linker_tags:
  - mitre/attack/linker/command_and_control/remote_desktop_software
  name: Remote Desktop Software
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Remote Desktop Software (`T1219.002`)

An adversary may use legitimate desktop support software to establish an interactive command and control channel to target systems within networks. Desktop support software provides a graphical interface for remotely controlling another computer, transmitting the display output, keyboard input, and mouse control between devices using various protocols. Desktop support software, such as `VNC`, `Team Viewer`, `AnyDesk`, `ScreenConnect`, `LogMein`, `AmmyyAdmin`, and other remote monitoring and management (RMM) tools, are commonly used as legitimate technical support software and may be allowed by application control within a target environment.[^fn5][^fn1][^fn2] 
 
Remote access modules/features may also exist as part of otherwise existing software such as Zoom or Google Chrome’s Remote Desktop.[^fn3][^fn4] 


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Remote Access Tools (T1219)|Remote Access Tools]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1219.002](https://attack.mitre.org/techniques/T1219/002)

[^fn1]: [CrowdStrike Intelligence. (2016). 2015 Global Threat Report. Retrieved April 11, 2018.](https://go.crowdstrike.com/rs/281-OBQ-266/images/15GlobalThreatReport.pdf)
[^fn2]: [CrySyS Lab. (2013, March 20). TeamSpy – Obshie manevri. Ispolzovat’ tolko s razreshenija S-a. Retrieved April 11, 2018.](https://blog.crysys.hu/2013/03/teamspy/)
[^fn3]: [Google. (n.d.). Retrieved March 14, 2024.](https://support.google.com/chrome/answer/1649523)
[^fn4]: [Huntress. (n.d.). Retrieved March 14, 2024.](https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708)
[^fn5]: [Wueest, C., Anand, H. (2017, July). Living off the land and fileless attack techniques. Retrieved April 10, 2018.](https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/istr-living-off-the-land-and-fileless-attack-techniques-en.pdf)