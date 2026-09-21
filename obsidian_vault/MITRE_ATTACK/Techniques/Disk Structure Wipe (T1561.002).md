---
mitre_data:
  id: T1561.002
  linker_tags:
  - mitre/attack/linker/impact/disk_structure_wipe
  name: Disk Structure Wipe
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Disk Structure Wipe (`T1561.002`)

Adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources. 

Adversaries may attempt to render the system unable to boot by overwriting critical data located in structures such as the master boot record (MBR) or partition table.[^fn7][^fn4][^fn3][^fn5][^fn2] The data contained in disk structures may include the initial executable code for loading an operating system or the location of the file system partitions on disk. If this information is not present, the computer will not be able to load an operating system during the boot process, leaving the computer unavailable. [Disk Structure Wipe](https://attack.mitre.org/techniques/T1561/002) may be performed in isolation, or along with [Disk Content Wipe](https://attack.mitre.org/techniques/T1561/001) if all sectors of a disk are wiped.

On a network devices, adversaries may reformat the file system using [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `format`.[^fn1]

To maximize impact on the target organization, malware designed for destroying disk structures may have worm-like features to propagate across a network by leveraging other techniques like [Valid Accounts](https://attack.mitre.org/techniques/T1078), [OS Credential Dumping](https://attack.mitre.org/techniques/T1003), and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002).[^fn7][^fn4][^fn3][^fn5]


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Disk Wipe (T1561)|Disk Wipe]]

# Tool(s)

- [[../Tools/Diskpart|Diskpart]]
- [[../Tools/RawDisk|RawDisk]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1561.002](https://attack.mitre.org/techniques/T1561/002)
- [Russinovich, M. & Garnier, T. (2017, May 22). Sysmon v6.20. Retrieved December 13, 2017.](https://docs.microsoft.com/sysinternals/downloads/sysmon)

[^fn1]: [Cisco. (2022, August 16). format - Cisco IOS Configuration Fundamentals Command Reference. Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/command/cf_command_ref/F_through_K.html#wp2829794668)
[^fn2]: [Falcone, R. (2018, December 13). Shamoon 3 Targets Oil and Gas Organization. Retrieved March 14, 2019.](https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/)
[^fn3]: [Falcone, R.. (2016, November 30). Shamoon 2: Return of the Disttrack Wiper. Retrieved January 11, 2017.](http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/)
[^fn4]: [FireEye. (2016, November 30). FireEye Responds to Wave of Destructive Cyber Attacks in Gulf Region. Retrieved November 17, 2024.](https://web.archive.org/web/20210126065851/https://www.fireeye.com/blog/threat-research/2016/11/fireeye_respondsto.html)
[^fn5]: [Kaspersky Lab. (2017, March 7). From Shamoon to StoneDrill: Wipers attacking Saudi organizations and beyond. Retrieved March 14, 2019.](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07180722/Report_Shamoon_StoneDrill_final.pdf)
[^fn7]: [Symantec. (2012, August 16). The Shamoon Attacks. Retrieved March 14, 2019.](https://www.symantec.com/connect/blogs/shamoon-attacks)