---
mitre_data:
  id: T1033
  linker_tags:
  - mitre/attack/linker/discovery/system_owner_user_discovery
  name: System Owner/User Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Owner/User Discovery (`T1033`)

Adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. They may do this, for example, by retrieving account usernames or by using [OS Credential Dumping](https://attack.mitre.org/techniques/T1003). The information may be collected in a number of different ways using other Discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. Adversaries may use the information from [System Owner/User Discovery](https://attack.mitre.org/techniques/T1033) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.

Various utilities and commands may acquire this information, including <code>whoami</code>. In macOS and Linux, the currently logged in user can be identified with <code>w</code> and <code>who</code>. On macOS the <code>dscl . list /Users | grep -v '_'</code> command can also be used to enumerate user accounts. Environment variables, such as <code>%USERNAME%</code> and <code>$USER</code>, may also be used to access this information.

On network devices, [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `show users` and `show ssh` can be used to display users currently logged into the device.[^fn1][^fn2]


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/BloodHound|BloodHound]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/NBTscan|NBTscan]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1033](https://attack.mitre.org/techniques/T1033)

[^fn1]: [Cisco. (2023, March 7). Cisco IOS Security Command Reference: Commands S to Z . Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/s1/sec-s1-cr-book/sec-cr-s5.html)
[^fn2]: [US-CERT. (2018, April 20). Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://us-cert.cisa.gov/ncas/alerts/TA18-106A)