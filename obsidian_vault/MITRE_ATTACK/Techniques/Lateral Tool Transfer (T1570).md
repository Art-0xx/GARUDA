---
mitre_data:
  id: T1570
  linker_tags:
  - mitre/attack/linker/lateral_movement/lateral_tool_transfer
  name: Lateral Tool Transfer
  related_tactics:
  - lateral_movement
tags:
- mitre/attack/technique
---



# Lateral Tool Transfer (`T1570`)

Adversaries may transfer tools or other files between systems in a compromised environment. Once brought into the victim environment (i.e., [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105)) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation.

Adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002) to connected network shares or with authenticated connections via [Remote Desktop Protocol](https://attack.mitre.org/techniques/T1021/001).[^fn2]

Files can also be transferred using native or otherwise present tools on the victim system, such as scp, rsync, curl, sftp, and [ftp](https://attack.mitre.org/software/S0095). In some cases, adversaries may be able to leverage [Web Service](https://attack.mitre.org/techniques/T1102)s such as Dropbox or OneDrive to copy files from one machine to another via shared, automatically synced folders.[^fn1]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/BITSAdmin|BITSAdmin]]
- [[../Tools/cmd|cmd]]
- [[../Tools/esentutl|esentutl]]
- [[../Tools/Expand|Expand]]
- [[../Tools/ftp|ftp]]
- [[../Tools/PsExec|PsExec]]

# Tactic(s)

- [[../Tactics/11. Lateral Movement|Lateral Movement]]


# External Reference(s)

- [T1570](https://attack.mitre.org/techniques/T1570)

[^fn1]: [David Talbot. (2013, August 21). Dropbox and Similar Services Can Sync Malware. Retrieved May 31, 2023.](https://www.technologyreview.com/2013/08/21/83143/dropbox-and-similar-services-can-sync-malware/)
[^fn2]: [Harbison, M. (2019, March 26). Born This Way? Origins of LockerGoga. Retrieved April 16, 2019.](https://unit42.paloaltonetworks.com/born-this-way-origins-of-lockergoga/)