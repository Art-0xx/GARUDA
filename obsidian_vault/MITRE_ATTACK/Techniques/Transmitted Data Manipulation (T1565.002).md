---
mitre_data:
  id: T1565.002
  linker_tags:
  - mitre/attack/linker/impact/transmitted_data_manipulation
  name: Transmitted Data Manipulation
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Transmitted Data Manipulation (`T1565.002`)

Adversaries may alter data en route to storage or other systems in order to manipulate external outcomes or hide activity, thus threatening the integrity of the data.[^fn2][^fn1] By manipulating transmitted data, adversaries may attempt to affect a business process, organizational understanding, and decision making.

Manipulation may be possible over a network connection or between system processes where there is an opportunity deploy a tool that will intercept and change information. The type of modification and the impact it will have depends on the target transmission mechanism as well as the goals and objectives of the adversary. For complex systems, an adversary would likely need special expertise and possibly access to specialized software related to the system that would typically be gained through a prolonged information gathering campaign in order to have the desired impact.


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Data Manipulation (T1565)|Data Manipulation]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1565.002](https://attack.mitre.org/techniques/T1565/002)

[^fn1]: [Department of Justice. (2018, September 6). Criminal Complaint - United States of America v. PARK JIN HYOK. Retrieved March 29, 2019.](https://www.justice.gov/opa/press-release/file/1092091/download)
[^fn2]: [FireEye. (2018, October 03). APT38: Un-usual Suspects. Retrieved November 17, 2024.](https://services.google.com/fh/files/misc/apt38-un-usual-suspects.pdf)