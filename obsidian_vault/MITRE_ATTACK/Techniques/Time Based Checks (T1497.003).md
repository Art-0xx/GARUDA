---
mitre_data:
  id: T1497.003
  linker_tags:
  - mitre/attack/linker/stealth/time_based_checks
  - mitre/attack/linker/discovery/time_based_checks
  name: Time Based Checks
  related_tactics:
  - stealth
  - discovery
tags:
- mitre/attack/technique
---



# Time Based Checks (`T1497.003`)

Adversaries may employ various time-based methods to detect virtualization and analysis environments, particularly those that attempt to manipulate time mechanisms to simulate longer elapses of time. This may include enumerating time-based properties, such as uptime or the system clock. 

Adversaries may use calls like `GetTickCount` and `GetSystemTimeAsFileTime` to discover if they are operating within a virtual machine or sandbox, or may be able to identify a sandbox accelerating time by sampling and calculating the expected value for an environment's timestamp before and after execution of a sleep function.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Virtualization_Sandbox Evasion (T1497)|Virtualization/Sandbox Evasion]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1497.003](https://attack.mitre.org/techniques/T1497/003)

[^fn1]: [Kolbitsch, C. (2017, November 1). Evasive Malware Tricks: How Malware Evades Detection by Sandboxes. Retrieved March 30, 2021.](https://www.isaca.org/resources/isaca-journal/issues/2017/volume-6/evasive-malware-tricks-how-malware-evades-detection-by-sandboxes)