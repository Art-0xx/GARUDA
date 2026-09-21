---
mitre_data:
  id: T1542.002
  linker_tags:
  - mitre/attack/linker/stealth/component_firmware
  - mitre/attack/linker/persistence/component_firmware
  name: Component Firmware
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# Component Firmware (`T1542.002`)

Adversaries may modify component firmware to persist on systems. Some adversaries may employ sophisticated means to compromise computer components and install malicious firmware that will execute adversary code outside of the operating system and main system firmware or BIOS. This technique may be similar to [System Firmware](https://attack.mitre.org/techniques/T1542/001) but conducted upon other system components/devices that may not have the same capability or level of integrity checking.

Malicious component firmware could provide both a persistent level of access to systems despite potential typical failures to maintain access and hard disk re-images, as well as a way to evade host software-based defenses and integrity checks.


# Platform(s)

- Windows
- Linux
- macOS

# Parent Technique(s)

- [[../Techniques/Pre-OS Boot (T1542)|Pre-OS Boot]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542.002](https://attack.mitre.org/techniques/T1542/002)
