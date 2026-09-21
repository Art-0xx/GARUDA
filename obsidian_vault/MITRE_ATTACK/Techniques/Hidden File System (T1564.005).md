---
mitre_data:
  id: T1564.005
  linker_tags:
  - mitre/attack/linker/stealth/hidden_file_system
  name: Hidden File System
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Hidden File System (`T1564.005`)

Adversaries may use a hidden file system to conceal malicious activity from users and security tools. File systems provide a structure to store and access data from physical storage. Typically, a user engages with a file system through applications that allow them to access files and directories, which are an abstraction from their physical location (ex: disk sector). Standard file systems include FAT, NTFS, ext4, and APFS. File systems can also contain other structures, such as the Volume Boot Record (VBR) and Master File Table (MFT) in NTFS.[^fn3]

Adversaries may use their own abstracted file system, separate from the standard file system present on the infected system. In doing so, adversaries can hide the presence of malicious components and file input/output from security tools. Hidden file systems, sometimes referred to as virtual file systems, can be implemented in numerous ways. One implementation would be to store a file system in reserved disk space unused by disk structures or standard file system partitions.[^fn3][^fn1] Another implementation could be for an adversary to drop their own portable partition image as a file on top of the standard file system.[^fn2] Adversaries may also fragment files across the existing file system structure in non-standard ways.[^fn4]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.005](https://attack.mitre.org/techniques/T1564/005)

[^fn1]: [Andonov, D., et al. (2015, December 7). Thriving Beyond The Operating System: Financial Threat Group Targets Volume Boot Record. Retrieved May 13, 2016.](https://www.fireeye.com/blog/threat-research/2015/12/fin1-targets-boot-record.html)
[^fn2]: [Faou, M. (2020, May). From Agent.btz to ComRAT v4: A ten-year journey. Retrieved June 15, 2020.](https://www.welivesecurity.com/wp-content/uploads/2020/05/ESET_Turla_ComRAT.pdf)
[^fn3]: [Hutchins, M. (2014, November 28). Virtual File Systems for Beginners. Retrieved June 22, 2020.](https://www.malwaretech.com/2014/11/virtual-file-systems-for-beginners.html)
[^fn4]: [Kaspersky Lab's Global Research and Analysis Team. (2015, February). Equation Group: Questions and Answers. Retrieved December 21, 2015.](https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064459/Equation_group_questions_and_answers.pdf)