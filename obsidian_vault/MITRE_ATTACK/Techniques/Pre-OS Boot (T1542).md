---
mitre_data:
  id: T1542
  linker_tags:
  - mitre/attack/linker/stealth/pre-os_boot
  - mitre/attack/linker/persistence/pre-os_boot
  name: Pre-OS Boot
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# Pre-OS Boot (`T1542`)

Adversaries may abuse Pre-OS Boot mechanisms as a way to establish persistence on a system. During the booting process of a computer, firmware and various startup services are loaded before the operating system. These programs control flow of execution before the operating system takes control.[^fn1]

Adversaries may overwrite data in boot drivers or firmware such as BIOS (Basic Input/Output System) and The Unified Extensible Firmware Interface (UEFI) to persist on systems at a layer below the operating system. This can be particularly difficult to detect as malware at this level will not be detected by host software-based defenses.


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/System Firmware (T1542.001)|System Firmware]]
- [[../Techniques/Bootkit (T1542.003)|Bootkit]]
- [[../Techniques/TFTP Boot (T1542.005)|TFTP Boot]]
- [[../Techniques/Component Firmware (T1542.002)|Component Firmware]]
- [[../Techniques/ROMMONkit (T1542.004)|ROMMONkit]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542](https://attack.mitre.org/techniques/T1542)

[^fn1]: [Wikipedia. (n.d.). Booting. Retrieved November 13, 2019.](https://en.wikipedia.org/wiki/Booting)