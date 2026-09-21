---
mitre_data:
  id: T1565
  linker_tags:
  - mitre/attack/linker/impact/data_manipulation
  name: Data Manipulation
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Data Manipulation (`T1565`)

Adversaries may insert, delete, or manipulate data in order to influence external outcomes or hide activity, thus threatening the integrity of the data.[^fn1] By manipulating data, adversaries may attempt to affect a business process, organizational understanding, or decision making.

The type of modification and the impact it will have depends on the target application and process as well as the goals and objectives of the adversary. For complex systems, an adversary would likely need special expertise and possibly access to specialized software related to the system that would typically be gained through a prolonged information gathering campaign in order to have the desired impact.


# Platform(s)

- Linux
- macOS
- Windows

# Sub-Technique(s)

- [[../Techniques/Stored Data Manipulation (T1565.001)|Stored Data Manipulation]]
- [[../Techniques/Runtime Data Manipulation (T1565.003)|Runtime Data Manipulation]]
- [[../Techniques/Transmitted Data Manipulation (T1565.002)|Transmitted Data Manipulation]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1565](https://attack.mitre.org/techniques/T1565)

[^fn1]: [Sygnia Incident Response Team. (2022, January 5). TG2003: ELEPHANT BEETLE UNCOVERING AN ORGANIZED FINANCIAL-THEFT OPERATION. Retrieved February 9, 2023.](https://web.archive.org/web/20220105132433/https://f.hubspotusercontent30.net/hubfs/8776530/Sygnia-%20Elephant%20Beetle_Jan2022.pdf)