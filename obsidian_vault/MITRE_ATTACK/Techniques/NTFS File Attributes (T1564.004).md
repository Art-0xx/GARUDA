---
mitre_data:
  id: T1564.004
  linker_tags:
  - mitre/attack/linker/stealth/ntfs_file_attributes
  name: NTFS File Attributes
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# NTFS File Attributes (`T1564.004`)

Adversaries may use NTFS file attributes to hide their malicious data in order to evade detection. Every New Technology File System (NTFS) formatted partition contains a Master File Table (MFT) that maintains a record for every file/directory on the partition. [^fn2] Within MFT entries are file attributes, [^fn4] such as Extended Attributes (EA) and Data [known as Alternate Data Streams (ADSs) when more than one Data attribute is present], that can be used to store arbitrary data (and even complete files). [^fn2] [^fn6] [^fn1] [^fn5]

Adversaries may store malicious data or binaries in file attribute metadata instead of directly in files. This may be done to evade some defenses, such as static indicator scanning tools and anti-virus. [^fn3] [^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tool(s)

- [[../Tools/esentutl|esentutl]]
- [[../Tools/Expand|Expand]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.004](https://attack.mitre.org/techniques/T1564/004)

[^fn1]: [Arntz, P. (2015, July 22). Introduction to Alternate Data Streams. Retrieved March 21, 2018.](https://blog.malwarebytes.com/101/2015/07/introduction-to-alternate-data-streams/)
[^fn2]: [Atkinson, J. (2017, July 18). Host-based Threat Modeling & Indicator Design. Retrieved March 21, 2018.](https://posts.specterops.io/host-based-threat-modeling-indicator-design-a9dbbb53d5ea)
[^fn3]: [Harrell, C. (2012, December 11). Extracting ZeroAccess from NTFS Extended Attributes. Retrieved June 3, 2016.](http://journeyintoir.blogspot.com/2012/12/extracting-zeroaccess-from-ntfs.html)
[^fn4]: [Hughes, J. (2010, August 25). NTFS File Attributes. Retrieved March 21, 2018.](https://blogs.technet.microsoft.com/askcore/2010/08/25/ntfs-file-attributes/)
[^fn5]: [Marlin, J. (2013, March 24). Alternate Data Streams in NTFS. Retrieved March 21, 2018.](https://blogs.technet.microsoft.com/askcore/2013/03/24/alternate-data-streams-in-ntfs/)
[^fn6]: [Microsoft. (n.d.). File Streams. Retrieved September 12, 2024.](https://learn.microsoft.com/en-us/windows/win32/fileio/file-streams)

# Vault Links

 - [[LOLBins/OSBinaries/PrintBrm.exe.md|LOLBins/OSBinaries/PrintBrm.exe]]
 - [[LOLBins/OSBinaries/Wscript.exe.md|LOLBins/OSBinaries/Wscript.exe]]