---
mitre_data:
  id: T1495
  linker_tags:
  - mitre/attack/linker/impact/firmware_corruption
  name: Firmware Corruption
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Firmware Corruption (`T1495`)

Adversaries may overwrite or corrupt the flash memory contents of system BIOS or other firmware in devices attached to a system in order to render them inoperable or unable to boot, thus denying the availability to use the devices and/or the system.[^fn4] Firmware is software that is loaded and executed from non-volatile memory on hardware devices in order to initialize and manage device functionality. These devices may include the motherboard, hard drive, or video cards.

In general, adversaries may manipulate, overwrite, or corrupt firmware in order to deny the use of the system or devices. For example, corruption of firmware responsible for loading the operating system for network devices may render the network devices inoperable.[^fn2][^fn1] Depending on the device, this attack may also result in [Data Destruction](https://attack.mitre.org/techniques/T1485). 


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1495](https://attack.mitre.org/techniques/T1495)
- [Upham, K. (2014, March). Going Deep into the BIOS with MITRE Firmware Security Research. Retrieved January 5, 2016.](http://www.mitre.org/publications/project-stories/going-deep-into-the-bios-with-mitre-firmware-security-research)

[^fn1]: [CISA. (2022, April 28). Alert (AA22-057A) Update: Destructive Malware Targeting Organizations in Ukraine. Retrieved July 29, 2022.](https://www.cisa.gov/uscert/ncas/alerts/aa22-057a)
[^fn2]: [U.S. Department of Homeland Security. (2016, August 30). The Increasing Threat to Network Infrastructure Devices and Recommended Mitigations. Retrieved July 29, 2022.](https://cyber.dhs.gov/assets/report/ar-16-20173.pdf)
[^fn4]: [Yamamura, M. (2002, April 25). W95.CIH. Retrieved April 12, 2019.](https://web.archive.org/web/20190508170055/https://www.symantec.com/security-center/writeup/2000-122010-2655-99)