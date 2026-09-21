---
mitre_data:
  id: T1485
  linker_tags:
  - mitre/attack/linker/impact/data_destruction
  name: Data Destruction
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Data Destruction (`T1485`)

Adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. Data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives.[^fn8][^fn4][^fn3][^fn5][^fn2][^fn6] Common operating system file deletion commands such as <code>del</code> and <code>rm</code> often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. This behavior is distinct from [Disk Content Wipe](https://attack.mitre.org/techniques/T1561/001) and [Disk Structure Wipe](https://attack.mitre.org/techniques/T1561/002) because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.

Adversaries may attempt to overwrite files and directories with randomly generated data to make it irrecoverable.[^fn5][^fn2] In some cases politically oriented image files have been used to overwrite data.[^fn4][^fn3][^fn5]

To maximize impact on the target organization in operations where network-wide availability interruption is the goal, malware designed for destroying data may have worm-like features to propagate across a network by leveraging additional techniques like [Valid Accounts](https://attack.mitre.org/techniques/T1078), [OS Credential Dumping](https://attack.mitre.org/techniques/T1003), and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002).[^fn8][^fn4][^fn3][^fn5][^fn6].

In cloud environments, adversaries may leverage access to delete cloud storage objects, machine images, database instances, and other infrastructure crucial to operations to damage an organization or their customers.[^fn7][^fn1] Similarly, they may delete virtual machines from on-prem virtualized environments.


# Platform(s)

- Containers
- ESXi
- IaaS
- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Lifecycle-Triggered Deletion (T1485.001)|Lifecycle-Triggered Deletion]]

# Tool(s)

- [[../Tools/RawDisk|RawDisk]]
- [[../Tools/SDelete|SDelete]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1485](https://attack.mitre.org/techniques/T1485)

[^fn1]: [DOJ. (2020, August 26). San Jose Man Pleads Guilty To Damaging Cisco’s Network. Retrieved December 15, 2020.](https://www.justice.gov/usao-ndca/pr/san-jose-man-pleads-guilty-damaging-cisco-s-network)
[^fn2]: [Falcone, R. (2018, December 13). Shamoon 3 Targets Oil and Gas Organization. Retrieved March 14, 2019.](https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/)
[^fn3]: [Falcone, R.. (2016, November 30). Shamoon 2: Return of the Disttrack Wiper. Retrieved January 11, 2017.](http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/)
[^fn4]: [FireEye. (2016, November 30). FireEye Responds to Wave of Destructive Cyber Attacks in Gulf Region. Retrieved November 17, 2024.](https://web.archive.org/web/20210126065851/https://www.fireeye.com/blog/threat-research/2016/11/fireeye_respondsto.html)
[^fn5]: [Kaspersky Lab. (2017, March 7). From Shamoon to StoneDrill: Wipers attacking Saudi organizations and beyond. Retrieved March 14, 2019.](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07180722/Report_Shamoon_StoneDrill_final.pdf)
[^fn6]: [Mercer, W. and Rascagneres, P. (2018, February 12). Olympic Destroyer Takes Aim At Winter Olympics. Retrieved March 14, 2019.](https://blog.talosintelligence.com/2018/02/olympic-destroyer.html)
[^fn7]: [Mimoso, M.. (2014, June 18). Hacker Puts Hosting Service Code Spaces Out of Business. Retrieved December 15, 2020.](https://threatpost.com/hacker-puts-hosting-service-code-spaces-out-of-business/106761/)
[^fn8]: [Symantec. (2012, August 16). The Shamoon Attacks. Retrieved March 14, 2019.](https://www.symantec.com/connect/blogs/shamoon-attacks)

# Vault Links

 - [[LOLBins/OSBinaries/Cipher.exe.md|LOLBins/OSBinaries/Cipher.exe]]