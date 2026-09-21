---
mitre_data:
  id: T1678
  linker_tags:
  - mitre/attack/linker/stealth/delay_execution
  name: Delay Execution
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Delay Execution (`T1678`)

Adversaries may employ various time-based methods to evade detection and analysis. These techniques often exploit system clocks, delays, or timing mechanisms to obscure malicious activity, blend in with benign activity, and avoid scrutiny. Adversaries can perform this behavior within virtualization/sandbox environments or natively on host systems. 

Adversaries may utilize programmatic `sleep` commands or native system scheduling functionality, for example [Scheduled Task/Job](https://attack.mitre.org/techniques/T1053). Benign commands or other operations may also be used to delay malware execution or ensure prior commands have had time to execute properly. Loops or otherwise needless repetitions of commands, such as `ping`, may be used to delay malware execution and potentially exceed time thresholds of automated analysis environments.[^fn3][^fn4] Another variation, commonly referred to as API hammering, involves making various calls to Native API functions in order to delay execution (while also potentially overloading analysis environments with junk data).[^fn1][^fn2]


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1678](https://attack.mitre.org/techniques/T1678)

[^fn1]: [Joe Security. (2016, April 21). Nymaim - evading Sandboxes with API hammering. Retrieved September 30, 2021.](https://www.joesecurity.org/blog/3660886847485093803)
[^fn2]: [Joe Security. (2020, July 13). TrickBot's new API-Hammering explained. Retrieved September 30, 2021.](https://www.joesecurity.org/blog/498839998833561473)
[^fn3]: [Loman, M. et al. (2021, July 4). Independence Day: REvil uses supply chain exploit to attack hundreds of businesses. Retrieved September 30, 2021.](https://news.sophos.com/en-us/2021/07/04/independence-day-revil-uses-supply-chain-exploit-to-attack-hundreds-of-businesses/)
[^fn4]: [Malik, A. (2016, October 14). Nitol Botnet makes a resurgence with evasive sandbox analysis technique. Retrieved September 30, 2021.](https://www.netskope.com/blog/nitol-botnet-makes-resurgence-evasive-sandbox-analysis-technique)