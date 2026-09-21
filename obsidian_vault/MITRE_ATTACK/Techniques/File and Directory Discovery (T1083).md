---
mitre_data:
  id: T1083
  linker_tags:
  - mitre/attack/linker/discovery/file_and_directory_discovery
  name: File and Directory Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# File and Directory Discovery (`T1083`)

Adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. Adversaries may use the information from [File and Directory Discovery](https://attack.mitre.org/techniques/T1083) during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.

Many command shell utilities can be used to obtain this information. Examples include <code>dir</code>, <code>tree</code>, <code>ls</code>, <code>find</code>, and <code>locate</code>.[^fn1] Custom tools may also be used to gather file and directory information and interact with the [Native API](https://attack.mitre.org/techniques/T1106). Adversaries may also leverage a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) on network devices to gather file and directory information (e.g. <code>dir</code>, <code>show flash</code>, and/or <code>nvram</code>).[^fn2]

Some files and directories may require elevated or specific user permissions to access.


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/RemoteUtilities|RemoteUtilities]]
- [[../Tools/Diskpart|Diskpart]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Rclone|Rclone]]
- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/Forfiles|Forfiles]]
- [[../Tools/cmd|cmd]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1083](https://attack.mitre.org/techniques/T1083)

[^fn1]: [Tomonaga, S. (2016, January 26). Windows Commands Abused by Attackers. Retrieved February 2, 2016.](https://blogs.jpcert.or.jp/en/2016/01/windows-commands-abused-by-attackers.html)
[^fn2]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)