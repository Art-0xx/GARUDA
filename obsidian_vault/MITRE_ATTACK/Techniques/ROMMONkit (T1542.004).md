---
mitre_data:
  id: T1542.004
  linker_tags:
  - mitre/attack/linker/stealth/rommonkit
  - mitre/attack/linker/persistence/rommonkit
  name: ROMMONkit
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# ROMMONkit (`T1542.004`)

Adversaries may abuse the ROM Monitor (ROMMON) by loading an unauthorized firmware with adversary code to provide persistent access and manipulate device behavior that is difficult to detect. [^fn1][^fn2]


ROMMON is a Cisco network device firmware that functions as a boot loader, boot image, or boot helper to initialize hardware and software when the platform is powered on or reset. Similar to [TFTP Boot](https://attack.mitre.org/techniques/T1542/005), an adversary may upgrade the ROMMON image locally or remotely (for example, through TFTP) with adversary code and restart the device in order to overwrite the existing ROMMON image. This provides adversaries with the means to update the ROMMON to gain persistence on a system in a way that may be difficult to detect.


# Platform(s)

- Network Devices

# Parent Technique(s)

- [[../Techniques/Pre-OS Boot (T1542)|Pre-OS Boot]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542.004](https://attack.mitre.org/techniques/T1542/004)

[^fn1]: [Graham Holmes. (2015, October 8). Evolution of attacks on Cisco IOS devices. Retrieved October 19, 2020.](https://blogs.cisco.com/security/evolution-of-attacks-on-cisco-ios-devices)
[^fn2]: [Omar Santos. (2020, October 19). Attackers Continue to Target Legacy Devices. Retrieved October 20, 2020.](https://community.cisco.com/t5/security-blogs/attackers-continue-to-target-legacy-devices/ba-p/4169954)