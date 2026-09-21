---
mitre_data:
  id: T1120
  linker_tags:
  - mitre/attack/linker/discovery/peripheral_device_discovery
  name: Peripheral Device Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Peripheral Device Discovery (`T1120`)

Adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system.[^fn1][^fn2] Peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. The information may be used to enhance their awareness of the system and network environment or may be used for further actions.


# Platform(s)

- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1120](https://attack.mitre.org/techniques/T1120)

[^fn1]: [Shahriar Shovon. (2018, March). List USB Devices Linux. Retrieved March 11, 2022.](https://linuxhint.com/list-usb-devices-linux/)
[^fn2]: [SS64. (n.d.). system_profiler. Retrieved March 11, 2022.](https://ss64.com/osx/system_profiler.html)