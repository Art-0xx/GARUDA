---
mitre_data:
  id: T1654
  linker_tags:
  - mitre/attack/linker/discovery/log_enumeration
  name: Log Enumeration
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Log Enumeration (`T1654`)

Adversaries may enumerate system and service logs to find useful data. These logs may highlight various types of valuable insights for an adversary, such as user authentication records ([Account Discovery](https://attack.mitre.org/techniques/T1087)), security or vulnerable software ([Software Discovery](https://attack.mitre.org/techniques/T1518)), or hosts within a compromised network ([Remote System Discovery](https://attack.mitre.org/techniques/T1018)).

Host binaries may be leveraged to collect system logs. Examples include using `wevtutil.exe` or [PowerShell](https://attack.mitre.org/techniques/T1059/001) on Windows to access and/or export security event information.[^fn4][^fn3] In cloud environments, adversaries may leverage utilities such as the Azure VM Agent’s `CollectGuestLogs.exe` to collect security logs from cloud hosted infrastructure.[^fn2]

Adversaries may also target centralized logging infrastructure such as SIEMs. Logs may also be bulk exported and sent to adversary-controlled infrastructure for offline analysis.

In addition to gaining a better understanding of the environment, adversaries may also monitor logs in real time to track incident response procedures. This may allow them to adjust their techniques in order to maintain persistence or evade defenses.[^fn1]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/Pacu|Pacu]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1654](https://attack.mitre.org/techniques/T1654)

[^fn1]: [Ian Ahl. (2023, May 22). Unmasking GUI-Vil: Financially Motivated Cloud Threat Actor. Retrieved August 30, 2024.](https://permiso.io/blog/s/unmasking-guivil-new-cloud-threat-actor/)
[^fn2]: [Mandiant Intelligence. (2023, May 16). SIM Swapping and Abuse of the Microsoft Azure Serial Console: Serial Is Part of a Well Balanced Attack. Retrieved June 2, 2023.](https://www.mandiant.com/resources/blog/sim-swapping-abuse-azure-serial)
[^fn3]: [Microsoft Threat Intelligence. (2023, June 14). Cadet Blizzard emerges as a novel and distinct Russian threat actor. Retrieved July 10, 2023.](https://www.microsoft.com/en-us/security/blog/2023/06/14/cadet-blizzard-emerges-as-a-novel-and-distinct-russian-threat-actor/)
[^fn4]: [Ruohonen, S. & Robinson, S. (2023, February 2). No Pineapple! -DPRK Targeting of Medical Research and Technology Sector. Retrieved July 10, 2023.](https://labs.withsecure.com/content/dam/labs/docs/WithSecure-Lazarus-No-Pineapple-Threat-Intelligence-Report-2023.pdf)