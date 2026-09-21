---
mitre_data:
  id: T1564
  linker_tags:
  - mitre/attack/linker/stealth/hide_artifacts
  name: Hide Artifacts
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Hide Artifacts (`T1564`)

Adversaries may attempt to hide artifacts associated with their behaviors to evade detection. Operating systems may have features to hide various artifacts, such as important system files and administrative task execution, to avoid disrupting user work environments and prevent users from changing files or features on the system. Adversaries may abuse these features to hide artifacts such as files, directories, user accounts, or other system activity to evade detection.[^fn3][^fn1][^fn2]

Adversaries may also attempt to hide artifacts associated with malicious behavior by creating computing regions that are isolated from common security instrumentation, such as through the use of virtualization technology.[^fn4]


# Platform(s)

- ESXi
- Linux
- macOS
- Office Suite
- Windows

# Sub-Technique(s)

- [[../Techniques/File_Path Exclusions (T1564.012)|File/Path Exclusions]]
- [[../Techniques/Email Hiding Rules (T1564.008)|Email Hiding Rules]]
- [[../Techniques/Ignore Process Interrupts (T1564.011)|Ignore Process Interrupts]]
- [[../Techniques/Bind Mounts (T1564.013)|Bind Mounts]]
- [[../Techniques/Extended Attributes (T1564.014)|Extended Attributes]]
- [[../Techniques/Hidden Users (T1564.002)|Hidden Users]]
- [[../Techniques/Resource Forking (T1564.009)|Resource Forking]]
- [[../Techniques/Run Virtual Instance (T1564.006)|Run Virtual Instance]]
- [[../Techniques/VBA Stomping (T1564.007)|VBA Stomping]]
- [[../Techniques/Hidden Window (T1564.003)|Hidden Window]]
- [[../Techniques/Hidden File System (T1564.005)|Hidden File System]]
- [[../Techniques/Hidden Files and Directories (T1564.001)|Hidden Files and Directories]]
- [[../Techniques/NTFS File Attributes (T1564.004)|NTFS File Attributes]]
- [[../Techniques/Process Argument Spoofing (T1564.010)|Process Argument Spoofing]]

# Tool(s)

- [[../Tools/Remcos|Remcos]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564](https://attack.mitre.org/techniques/T1564)

[^fn1]: [Amit Serper. (2016). Cybereason Lab Analysis OSX.Pirrit. Retrieved December 10, 2021.](https://cdn2.hubspot.net/hubfs/3354902/Content%20PDFs/Cybereason-Lab-Analysis-OSX-Pirrit-4-6-16.pdf)
[^fn2]: [Arntz, P. (2015, July 22). Introduction to Alternate Data Streams. Retrieved March 21, 2018.](https://blog.malwarebytes.com/101/2015/07/introduction-to-alternate-data-streams/)
[^fn3]: [Dani Creus, Tyler Halfpop, Robert Falcone. (2016, September 26). Sofacy's 'Komplex' OS X Trojan. Retrieved July 8, 2017.](https://researchcenter.paloaltonetworks.com/2016/09/unit42-sofacys-komplex-os-x-trojan/)
[^fn4]: [SophosLabs. (2020, May 21). Ragnar Locker ransomware deploys virtual machine to dodge security. Retrieved June 29, 2020.](https://news.sophos.com/en-us/2020/05/21/ragnar-locker-ransomware-deploys-virtual-machine-to-dodge-security/)

# Vault Links

 - [[LOLBins/OtherMSBinaries/msxsl.exe.md|LOLBins/OtherMSBinaries/msxsl.exe]]