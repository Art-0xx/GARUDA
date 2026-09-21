---
mitre_data:
  id: T1219
  linker_tags:
  - mitre/attack/linker/command_and_control/remote_access_tools
  name: Remote Access Tools
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Remote Access Tools (`T1219`)

An adversary may use legitimate remote access tools to establish an interactive command and control channel within a network. Remote access tools create a session between two trusted hosts through a graphical interface, a command line interaction, a protocol tunnel via development or management software, or hardware-level access such as KVM (Keyboard, Video, Mouse) over IP solutions. Desktop support software (usually graphical interface) and remote management software (typically command line interface) allow a user to control a computer remotely as if they are a local user inheriting the user or software permissions. This software is commonly used for troubleshooting, software installation, and system management.[^fn5][^fn1][^fn2] Adversaries may similarly abuse response features included in EDR and other defensive tools that enable remote access.

Remote access tools may be installed and used post-compromise as an alternate communications channel for redundant access or to establish an interactive remote desktop session with the target system. It may also be used as a malware component to establish a reverse connection or back-connect to a service or adversary-controlled system.

Installation of many remote access tools may also include persistence (e.g., the software's installation routine creates a [Windows Service](https://attack.mitre.org/techniques/T1543/003)). Remote access modules/features may also exist as part of otherwise existing software (e.g., Google Chrome’s Remote Desktop).[^fn3][^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/IDE Tunneling (T1219.001)|IDE Tunneling]]
- [[../Techniques/Remote Access Hardware (T1219.003)|Remote Access Hardware]]
- [[../Techniques/Remote Desktop Software (T1219.002)|Remote Desktop Software]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1219](https://attack.mitre.org/techniques/T1219)

[^fn1]: [CrowdStrike Intelligence. (2016). 2015 Global Threat Report. Retrieved April 11, 2018.](https://go.crowdstrike.com/rs/281-OBQ-266/images/15GlobalThreatReport.pdf)
[^fn2]: [CrySyS Lab. (2013, March 20). TeamSpy – Obshie manevri. Ispolzovat’ tolko s razreshenija S-a. Retrieved April 11, 2018.](https://blog.crysys.hu/2013/03/teamspy/)
[^fn3]: [Google. (n.d.). Retrieved March 14, 2024.](https://support.google.com/chrome/answer/1649523)
[^fn4]: [Huntress. (n.d.). Retrieved March 14, 2024.](https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708)
[^fn5]: [Wueest, C., Anand, H. (2017, July). Living off the land and fileless attack techniques. Retrieved April 10, 2018.](https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/istr-living-off-the-land-and-fileless-attack-techniques-en.pdf)