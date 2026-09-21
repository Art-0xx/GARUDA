---
mitre_data:
  id: T1553.005
  linker_tags:
  - mitre/attack/linker/defense_impairment/mark-of-the-web_bypass
  name: Mark-of-the-Web Bypass
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Mark-of-the-Web Bypass (`T1553.005`)

Adversaries may abuse specific file formats to subvert Mark-of-the-Web (MOTW) controls. In Windows, when files are downloaded from the Internet, they are tagged with a hidden NTFS Alternate Data Stream (ADS) named <code>Zone.Identifier</code> with a specific value known as the MOTW.[^fn4] Files that are tagged with MOTW are protected and cannot perform certain actions. For example, starting in MS Office 10, if a MS Office file has the MOTW, it will open in Protected View. Executables tagged with the MOTW will be processed by Windows Defender SmartScreen that compares files with an allowlist of well-known executables. If the file is not known/trusted, SmartScreen will prevent the execution and warn the user not to run it.[^fn1][^fn2][^fn3]

Adversaries may abuse container files such as compressed/archive (.arj, .gzip) and/or disk image (.iso, .vhd) file formats to deliver malicious payloads that may not be tagged with MOTW. Container files downloaded from the Internet will be marked with MOTW but the files within may not inherit the MOTW after the container files are extracted and/or mounted. MOTW is a NTFS feature and many container files do not support NTFS alternative data streams. After a container file is extracted and/or mounted, the files contained within them may be treated as local files on disk and run without protections.[^fn1][^fn2]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Subvert Trust Controls (T1553)|Subvert Trust Controls]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1553.005](https://attack.mitre.org/techniques/T1553/005)

[^fn1]: [Beek, C. (2020, December 3). Investigating the Use of VHD Files By Cybercriminals. Retrieved November 17, 2024.](https://web.archive.org/web/20201203131725/https://christiaanbeek.medium.com/investigating-the-use-of-vhd-files-by-cybercriminals-3f1f08304316)
[^fn2]: [Hegt, S. (2020, March 30). Mark-of-the-Web from a red team’s perspective. Retrieved February 22, 2021.](https://outflank.nl/blog/2020/03/30/mark-of-the-web-from-a-red-teams-perspective/)
[^fn3]: [Kennedy, J. (2020, December 9). A Zebra in Gopher's Clothing: Russian APT Uses COVID-19 Lures to Deliver Zebrocy. Retrieved February 22, 2021.](https://www.intezer.com/blog/research/russian-apt-uses-covid-19-lures-to-deliver-zebrocy/)
[^fn4]: [Microsoft. (2020, August 31). Zone.Identifier Stream Name. Retrieved February 22, 2021.](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/6e3f7352-d11c-4d76-8c39-2516a9df36e8)