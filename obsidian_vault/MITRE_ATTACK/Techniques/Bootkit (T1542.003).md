---
mitre_data:
  id: T1542.003
  linker_tags:
  - mitre/attack/linker/stealth/bootkit
  - mitre/attack/linker/persistence/bootkit
  name: Bootkit
  related_tactics:
  - stealth
  - persistence
tags:
- mitre/attack/technique
---



# Bootkit (`T1542.003`)

Adversaries may use bootkits to persist on systems. A bootkit is a malware variant that modifies the boot sectors of a hard drive, allowing malicious code to execute before a computer's operating system has loaded. Bootkits reside at a layer below the operating system and may make it difficult to perform full remediation unless an organization suspects one was used and can act accordingly.

In BIOS systems, a bootkit may modify the Master Boot Record (MBR) and/or Volume Boot Record (VBR).[^fn2] The MBR is the section of disk that is first loaded after completing hardware initialization by the BIOS. It is the location of the boot loader. An adversary who has raw access to the boot drive may overwrite this area, diverting execution during startup from the normal boot loader to adversary code.[^fn1]

The MBR passes control of the boot process to the VBR. Similar to the case of MBR, an adversary who has raw access to the boot drive may overwrite the VBR to divert execution during startup to adversary code.

In UEFI (Unified Extensible Firmware Interface) systems, a bootkit may instead create or modify files in the EFI system partition (ESP). The ESP is a partition on data storage used by devices containing UEFI that allows the system to boot the OS and other utilities used by the system. An adversary can use the newly created or patched files in the ESP to run malicious kernel code.[^fn4][^fn3]


# Platform(s)

- Linux
- Windows

# Parent Technique(s)

- [[../Techniques/Pre-OS Boot (T1542)|Pre-OS Boot]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]
- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1542.003](https://attack.mitre.org/techniques/T1542/003)

[^fn1]: [Lau, H. (2011, August 8). Are MBR Infections Back in Fashion? (Infographic). Retrieved November 13, 2014.](http://www.symantec.com/connect/blogs/are-mbr-infections-back-fashion)
[^fn2]: [Mandiant. (2016, February 25). Mandiant M-Trends 2016. Retrieved November 17, 2024.](https://web.archive.org/web/20211024160454/https://www.fireeye.com/content/dam/fireeye-www/current-threats/pdfs/rpt-mtrends-2016.pdf)
[^fn3]: [Martin Smolár. (2023, March 1). BlackLotus UEFI bootkit: Myth confirmed. Retrieved February 11, 2025.](https://www.welivesecurity.com/2023/03/01/blacklotus-uefi-bootkit-myth-confirmed/)
[^fn4]: [Microsoft Incident Response. (2023, April 11). Guidance for investigating attacks using CVE-2022-21894: The BlackLotus campaign. Retrieved February 12, 2025.](https://www.microsoft.com/en-us/security/blog/2023/04/11/guidance-for-investigating-attacks-using-cve-2022-21894-the-blacklotus-campaign/)