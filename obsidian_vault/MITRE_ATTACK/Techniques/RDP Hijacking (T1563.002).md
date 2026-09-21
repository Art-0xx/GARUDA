---
mitre_data:
  id: T1563.002
  linker_tags:
  - mitre/attack/linker/lateral_movement/rdp_hijacking
  name: RDP Hijacking
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# RDP Hijacking (`T1563.002`)

Adversaries may hijack a legitimate user’s remote desktop session to move laterally within an environment. Remote desktop is a common feature in operating systems. It allows a user to log into an interactive session with a system desktop graphical user interface on a remote system. Microsoft refers to its implementation of the Remote Desktop Protocol (RDP) as Remote Desktop Services (RDS).[^fn3]

Adversaries may perform RDP session hijacking which involves stealing a legitimate user's remote session. Typically, a user is notified when someone else is trying to steal their session. With System permissions and using Terminal Services Console, `c:\windows\system32\tscon.exe [session number to be stolen]`, an adversary can hijack a session without the need for credentials or prompts to the user.[^fn2] This can be done remotely or locally and with active or disconnected sessions.[^fn1] It can also lead to [Remote System Discovery](https://attack.mitre.org/techniques/T1018) and Privilege Escalation by stealing a Domain Admin or higher privileged account session. All of this can be done by using native Windows commands, but it has also been added as a feature in red teaming tools.[^fn4]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Remote Service Session Hijacking (T1563)|Remote Service Session Hijacking]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1563.002](https://attack.mitre.org/techniques/T1563/002)

[^fn1]: [Beaumont, K. (2017, March 19). RDP hijacking — how to hijack RDS and RemoteApp sessions transparently to move through an organisation. Retrieved December 11, 2017.](https://medium.com/@networksecurity/rdp-hijacking-how-to-hijack-rds-and-remoteapp-sessions-transparently-to-move-through-an-da2a1e73a5f6)
[^fn2]: [Korznikov, A. (2017, March 17). Passwordless RDP Session Hijacking Feature All Windows versions. Retrieved December 11, 2017.](http://www.korznikov.com/2017/03/0-day-or-feature-privilege-escalation.html)
[^fn3]: [Microsoft. (n.d.). Remote Desktop Services. Retrieved June 1, 2016.](https://technet.microsoft.com/en-us/windowsserver/ee236407.aspx)
[^fn4]: [NCC Group PLC. (2016, November 1). Kali Redsnarf. Retrieved December 11, 2017.](https://github.com/nccgroup/redsnarf)