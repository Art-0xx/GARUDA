---
mitre_data:
  id: T1010
  linker_tags:
  - mitre/attack/linker/discovery/application_window_discovery
  name: Application Window Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Application Window Discovery (`T1010`)

Adversaries may attempt to get a listing of open application windows. Window listings could convey information about how the system is used.[^fn2] For example, information about application windows could be used identify potential data to collect as well as identifying security tooling ([Security Software Discovery](https://attack.mitre.org/techniques/T1518/001)) to evade.[^fn1]

Adversaries typically abuse system features for this type of enumeration. For example, they may gather information through native system features such as [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059) commands and [Native API](https://attack.mitre.org/techniques/T1106) functions.


# Platform(s)

- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1010](https://attack.mitre.org/techniques/T1010)

[^fn1]: [ESET. (2020, April 28). Grandoreiro: How engorged can an EXE get?. Retrieved November 13, 2020.](https://www.welivesecurity.com/2020/04/28/grandoreiro-how-engorged-can-exe-get/)
[^fn2]: [Smith, S., Stafford, M. (2021, December 14). DarkWatchman: A new evolution in fileless techniques. Retrieved January 10, 2022.](https://web.archive.org/web/20220629230035/https://www.prevailion.com/darkwatchman-new-fileless-techniques/)