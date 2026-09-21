---
mitre_data:
  id: T1204.002
  linker_tags:
  - mitre/attack/linker/execution/malicious_file
  name: Malicious File
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Malicious File (`T1204.002`)

An adversary may rely upon a user opening a malicious file in order to gain execution. Users may be subjected to social engineering to get them to open a file that will lead to code execution. This user action will typically be observed as follow-on behavior from [Spearphishing Attachment](https://attack.mitre.org/techniques/T1566/001). Adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, .cpl, .reg, and .iso.[^fn2]

Adversaries may employ various forms of [Masquerading](https://attack.mitre.org/techniques/T1036) and [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027) to increase the likelihood that a user will open and successfully execute a malicious file. These methods may include using a familiar naming convention and/or password protecting the file and supplying instructions to a user on how to open it.[^fn1] 

While [Malicious File](https://attack.mitre.org/techniques/T1204/002) frequently occurs shortly after Initial Access it may occur at other phases of an intrusion, such as when an adversary places a file in a shared directory or on a user's desktop hoping that a user will click on it. This activity may also be seen shortly after [Internal Spearphishing](https://attack.mitre.org/techniques/T1534).


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/User Execution (T1204)|User Execution]]

# Tool(s)

- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/CARROTBALL|CARROTBALL]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Remcos|Remcos]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204.002](https://attack.mitre.org/techniques/T1204/002)

[^fn1]: [Lawrence Abrams. (2017, July 12). PSA: Don't Open SPAM Containing Password Protected Word Docs. Retrieved January 5, 2022.](https://www.bleepingcomputer.com/news/security/psa-dont-open-spam-containing-password-protected-word-docs/)
[^fn2]: [Mandiant Intelligence. (2022, December 15). Trojanized Windows 10 Operating System Installers Targeted Ukrainian Government. Retrieved September 26, 2025.](https://www.mandiant.com/resources/blog/trojanized-windows-installers-ukrainian-government)