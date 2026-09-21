---
mitre_data:
  id: T1601
  linker_tags:
  - mitre/attack/linker/defense_impairment/modify_system_image
  name: Modify System Image
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Modify System Image (`T1601`)

Adversaries may make changes to the operating system of embedded network devices to weaken defenses and provide new capabilities for themselves.  On such devices, the operating systems are typically monolithic and most of the device functionality and capabilities are contained within a single file.

To change the operating system, the adversary typically only needs to affect this one file, replacing or modifying it.  This can either be done live in memory during system runtime for immediate effect, or in storage to implement the change on the next boot of the network device.


# Platform(s)

- Network Devices

# Sub-Technique(s)

- [[../Techniques/Patch System Image (T1601.001)|Patch System Image]]
- [[../Techniques/Downgrade System Image (T1601.002)|Downgrade System Image]]

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1601](https://attack.mitre.org/techniques/T1601)
