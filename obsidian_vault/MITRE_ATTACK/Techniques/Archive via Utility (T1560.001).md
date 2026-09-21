---
mitre_data:
  id: T1560.001
  linker_tags:
  - mitre/attack/linker/collection/archive_via_utility
  name: Archive via Utility
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Archive via Utility (`T1560.001`)

Adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. Many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.

Adversaries may abuse various utilities to compress or encrypt data before exfiltration. Some third party utilities may be preinstalled, such as <code>tar</code> on Linux and macOS or <code>zip</code> on Windows systems. 

On Windows, <code>diantz</code> or <code> makecab</code> may be used to package collected files into a cabinet (.cab) file. <code>diantz</code> may also be used to download and compress files from remote locations (i.e. [Remote Data Staging](https://attack.mitre.org/techniques/T1074/002)).[^fn4] <code>xcopy</code> on Windows can copy files and directories with a variety of options. Additionally, adversaries may use [certutil](https://attack.mitre.org/software/S0160) to Base64 encode collected data before exfiltration. 

Adversaries may use also third party utilities, such as 7-Zip, WinRAR, and WinZip, to perform similar activities.[^fn3][^fn1][^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Archive Collected Data (T1560)|Archive Collected Data]]

# Tool(s)

- [[../Tools/certutil|certutil]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Rclone|Rclone]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1560.001](https://attack.mitre.org/techniques/T1560/001)
- [Wikipedia. (2016, March 31). List of file signatures. Retrieved April 22, 2016.](https://en.wikipedia.org/wiki/List_of_file_signatures)

[^fn1]: [A. Roshal. (2020). RARLAB. Retrieved February 20, 2020.](https://www.rarlab.com/)
[^fn2]: [Corel Corporation. (2020). WinZip. Retrieved February 20, 2020.](https://www.winzip.com/win/en/)
[^fn3]: [I. Pavlov. (2019). 7-Zip. Retrieved February 20, 2020.](https://www.7-zip.org/)
[^fn4]: [Living Off The Land Binaries, Scripts and Libraries (LOLBAS). (n.d.). Diantz.exe. Retrieved October 25, 2021.](https://lolbas-project.github.io/lolbas/Binaries/Diantz/)