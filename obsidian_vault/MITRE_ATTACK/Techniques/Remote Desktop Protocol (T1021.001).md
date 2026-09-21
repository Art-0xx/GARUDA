---
mitre_data:
  id: T1021.001
  linker_tags:
  - mitre/attack/linker/lateral_movement/remote_desktop_protocol
  name: Remote Desktop Protocol
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Remote Desktop Protocol (`T1021.001`)

Adversaries may use [Valid Accounts](https://attack.mitre.org/techniques/T1078) to log into a computer using the Remote Desktop Protocol (RDP). The adversary may then perform actions as the logged-on user.

Remote desktop is a common feature in operating systems. It allows a user to log into an interactive session with a system desktop graphical user interface on a remote system. Microsoft refers to its implementation of the Remote Desktop Protocol (RDP) as Remote Desktop Services (RDS).[^fn2] 

Adversaries may connect to a remote system over RDP/RDS to expand access if the service is enabled and allows access to accounts with known credentials. Adversaries will likely use Credential Access techniques to acquire credentials to use with RDP. Adversaries may also use RDP in conjunction with the [Accessibility Features](https://attack.mitre.org/techniques/T1546/008) or [Terminal Services DLL](https://attack.mitre.org/techniques/T1505/005) for Persistence.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Remote Services (T1021)|Remote Services]]

# Tool(s)

- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1021.001](https://attack.mitre.org/techniques/T1021/001)

[^fn1]: [Alperovitch, D. (2014, October 31). Malware-Free Intrusions. Retrieved November 17, 2024.](https://web.archive.org/web/20191115195333/https://www.crowdstrike.com/blog/adversary-tricks-crowdstrike-treats/)
[^fn2]: [Microsoft. (n.d.). Remote Desktop Services. Retrieved June 1, 2016.](https://technet.microsoft.com/en-us/windowsserver/ee236407.aspx)