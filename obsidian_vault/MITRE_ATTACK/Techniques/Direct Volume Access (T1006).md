---
mitre_data:
  id: T1006
  linker_tags:
  - mitre/attack/linker/stealth/direct_volume_access
  name: Direct Volume Access
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Direct Volume Access (`T1006`)

Adversaries may directly access a volume to bypass file access controls and file system monitoring. Windows allows programs to have direct access to logical volumes. Programs with direct access may read and write files directly from the drive by analyzing file system data structures. This technique may bypass Windows file access controls as well as file system monitoring tools.[^fn2]

Utilities, such as `NinjaCopy`, exist to perform these actions in PowerShell.[^fn1] Adversaries may also use built-in or third-party utilities (such as `vssadmin`, `wbadmin`, and [esentutl](https://attack.mitre.org/software/S0404)) to create shadow copies or backups of data from system volumes.[^fn3]


# Platform(s)

- Network Devices
- Windows

# Tool(s)

- [[../Tools/esentutl|esentutl]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1006](https://attack.mitre.org/techniques/T1006)

[^fn1]: [Bialek, J. (2015, December 16). Invoke-NinjaCopy.ps1. Retrieved June 2, 2016.](https://github.com/PowerShellMafia/PowerSploit/blob/master/Exfiltration/Invoke-NinjaCopy.ps1)
[^fn2]: [Hakobyan, A. (2009, January 8). FDump - Dumping File Sectors Directly from Disk using Logical Offsets. Retrieved November 12, 2014.](http://www.codeproject.com/Articles/32169/FDump-Dumping-File-Sectors-Directly-from-Disk-usin)
[^fn3]: [LOLBAS. (n.d.). Esentutl.exe. Retrieved September 3, 2019.](https://lolbas-project.github.io/lolbas/Binaries/Esentutl/)