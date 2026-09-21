---
mitre_data:
  id: T1070.009
  linker_tags:
  - mitre/attack/linker/stealth/clear_persistence
  name: Clear Persistence
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Clear Persistence (`T1070.009`)

Adversaries may clear artifacts associated with previously established persistence on a host system to remove evidence of their activity. This may involve various actions, such as removing services, deleting executables, [Modify Registry](https://attack.mitre.org/techniques/T1112), [Plist File Modification](https://attack.mitre.org/techniques/T1647), or other methods of cleanup to prevent defenders from collecting evidence of their persistent presence.[^fn1] Adversaries may also delete accounts previously created to maintain persistence (i.e. [Create Account](https://attack.mitre.org/techniques/T1136)).[^fn2]

In some instances, artifacts of persistence may also be removed once an adversary’s persistence is executed in order to prevent errors with the new instance of the malware.[^fn3]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Indicator Removal (T1070)|Indicator Removal]]

# Tool(s)

- [[../Tools/MCMD|MCMD]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1070.009](https://attack.mitre.org/techniques/T1070/009)

[^fn1]: [Gross, J. (2016, February 23). Operation Dust Storm. Retrieved December 22, 2021.](https://s7d2.scene7.com/is/content/cylance/prod/cylance-web/en-us/resources/knowledge-center/resource-library/reports/Op_Dust_Storm_Report.pdf)
[^fn2]: [Nick Biasini. (2022, August 10). Cisco Talos shares insights related to recent cyber attack on Cisco. Retrieved March 9, 2023.](https://blog.talosintelligence.com/recent-cyber-attack/)
[^fn3]: [Pantazopoulos, N. (2020, June 2). In-depth analysis of the new Team9 malware family. Retrieved December 1, 2020.](https://research.nccgroup.com/2020/06/02/in-depth-analysis-of-the-new-team9-malware-family/)