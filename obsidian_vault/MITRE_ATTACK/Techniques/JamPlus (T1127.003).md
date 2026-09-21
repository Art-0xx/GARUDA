---
mitre_data:
  id: T1127.003
  linker_tags:
  - mitre/attack/linker/stealth/jamplus
  - mitre/attack/linker/execution/jamplus
  name: JamPlus
  related_tactics:
  - stealth
  - execution
tags:
- mitre/attack/technique
---



# JamPlus (`T1127.003`)

Adversaries may use `JamPlus` to proxy the execution of a malicious script. `JamPlus` is a build utility tool for code and data build systems. It works with several popular compilers and can be used for generating workspaces in code editors such as Visual Studio.[^fn3]

Adversaries may abuse the `JamPlus` build utility to execute malicious scripts via a `.jam` file, which describes the build process and required dependencies. Because the malicious script is executed from a reputable developer tool, it may subvert application control security systems such as Smart App Control.[^fn1][^fn2]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Trusted Developer Utilities Proxy Execution (T1127)|Trusted Developer Utilities Proxy Execution]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1127.003](https://attack.mitre.org/techniques/T1127/003)

[^fn1]: [Cyble. (2024, September 9). Reputation Hijacking with JamPlus: A Maneuver to Bypass Smart App Control (SAC). Retrieved March 21, 2025.](https://cyble.com/blog/reputation-hijacking-with-jamplus-a-maneuver-to-bypass-smart-app-control-sac/)
[^fn2]: [Joe Desimone. (2024, August 5). Dismantling Smart App Control. Retrieved March 21, 2025.](https://www.elastic.co/security-labs/dismantling-smart-app-control)
[^fn3]: [Perforce Software, Inc.. (n.d.). JamPlus manual: Quick Start Guide. Retrieved March 21, 2025.](https://jamplus.github.io/jamplus/quick_start.html)