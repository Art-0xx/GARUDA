---
mitre_data:
  id: T1070.004
  linker_tags:
  - mitre/attack/linker/stealth/file_deletion
  name: File Deletion
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# File Deletion (`T1070.004`)

Adversaries may delete files left behind by the actions of their intrusion activity. Malware, tools, or other non-native files dropped or created on a system by an adversary (ex: [Ingress Tool Transfer](https://attack.mitre.org/techniques/T1105)) may leave traces to indicate to what was done within a network and how. Removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.

There are tools available from the host operating system to perform cleanup, but adversaries may use other tools as well.[^fn1] Examples of built-in [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059) functions include <code>del</code> on Windows, <code>rm</code> or <code>unlink</code> on Linux and macOS, and `rm` on ESXi.


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/CSPY Downloader|CSPY Downloader]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Imminent Monitor|Imminent Monitor]]
- [[../Tools/cmd|cmd]]
- [[../Tools/SDelete|SDelete]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070.004](https://attack.mitre.org/techniques/T1070/004)

[^fn1]: [Russinovich, M. (2016, July 4). SDelete v2.0. Retrieved February 8, 2018.](https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete)