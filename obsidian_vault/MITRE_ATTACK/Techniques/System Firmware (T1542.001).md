---
mitre_data:
  id: T1542.001
  linker_tags:
  - mitre/attack/linker/stealth/system_firmware
  - mitre/attack/linker/persistence/system_firmware
  name: System Firmware
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# System Firmware (`T1542.001`)

Adversaries may modify system firmware to persist on systems.The BIOS (Basic Input/Output System) and The Unified Extensible Firmware Interface (UEFI) or Extensible Firmware Interface (EFI) are examples of system firmware that operate as the software interface between the operating system and hardware of a computer.[^fn3][^fn2][^fn1]

System firmware like BIOS and (U)EFI underly the functionality of a computer and may be modified by an adversary to perform or assist in malicious activity. Capabilities exist to overwrite the system firmware, which may give sophisticated adversaries a means to install malicious firmware updates as a means of persistence on a system that may be difficult to detect.


# Platform(s)

- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Pre-OS Boot (T1542)|Pre-OS Boot]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542.001](https://attack.mitre.org/techniques/T1542/001)

[^fn1]: [UEFI Forum. (n.d.). About UEFI Forum. Retrieved January 5, 2016.](http://www.uefi.org/about)
[^fn2]: [Wikipedia. (2017, July 10). Unified Extensible Firmware Interface. Retrieved July 11, 2017.](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface)
[^fn3]: [Wikipedia. (n.d.). BIOS. Retrieved January 5, 2016.](https://en.wikipedia.org/wiki/BIOS)