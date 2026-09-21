---
mitre_data:
  id: T1135
  linker_tags:
  - mitre/attack/linker/discovery/network_share_discovery
  name: Network Share Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Network Share Discovery (`T1135`)

Adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for Collection and to identify potential systems of interest for Lateral Movement. Networks often contain shared network drives and folders that enable users to access file directories on various systems across a network. 

File sharing over a Windows network occurs over the SMB protocol. [^fn2] [^fn1] [Net](https://attack.mitre.org/software/S0039) can be used to query a remote system for available shared drives using the <code>net view \\\\remotesystem</code> command. It can also be used to query shared drives on the local system using <code>net share</code>. For macOS, the <code>sharing -l</code> command lists all shared points used for smb services.


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1135](https://attack.mitre.org/techniques/T1135)

[^fn1]: [Microsoft. (n.d.). Share a Folder or Drive. Retrieved June 30, 2017.](https://technet.microsoft.com/library/cc770880.aspx)
[^fn2]: [Wikipedia. (2017, April 15). Shared resource. Retrieved June 30, 2017.](https://en.wikipedia.org/wiki/Shared_resource)