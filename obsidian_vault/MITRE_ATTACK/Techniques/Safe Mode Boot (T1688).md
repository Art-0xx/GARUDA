---
mitre_data:
  id: T1688
  linker_tags:
  - mitre/attack/linker/defense_impairment/safe_mode_boot
  name: Safe Mode Boot
  related_tactics:
  - defense_impairment
tags:
- mitre/attack/technique
---



# Safe Mode Boot (`T1688`)

Adversaries may abuse Windows safe mode to disable endpoint defenses. Safe mode starts up the Windows operating system with a limited set of drivers and services. Third-party security software such as endpoint detection and response (EDR) tools may not start after booting Windows in safe mode. There are two versions of safe mode: Safe Mode and Safe Mode with Networking. It is possible to start additional services after a safe mode boot.[^fn4][^fn2]

Adversaries may abuse safe mode to disable endpoint defenses that may not start with a limited boot. Hosts can be forced into safe mode after the next reboot via modifications to Boot Configuration Data (BCD) stores, which are files that manage boot application settings.[^fn5]

Adversaries may also add their malicious applications to the list of minimal services that start in safe mode by modifying relevant Registry values (i.e. [Modify Registry](https://attack.mitre.org/techniques/T1112)). Malicious [Component Object Model](https://attack.mitre.org/techniques/T1559/001) (COM) objects may also be registered and loaded in safe mode.[^fn6][^fn3][^fn1]


# Platform(s)

- Windows

# Tactic(s)

- [[../Tactics/8. Defense Impairment|Defense Impairment]]


# External Reference(s)

- [T1688](https://attack.mitre.org/techniques/T1688)

[^fn1]: [Abrams, L. (2021, March 19). REvil ransomware has a new ‘Windows Safe Mode’ encryption mode. Retrieved June 23, 2021.](https://www.bleepingcomputer.com/news/security/revil-ransomware-has-a-new-windows-safe-mode-encryption-mode/)
[^fn2]: [Andrew Brandt. (2019, December 9). Snatch ransomware reboots PCs into Safe Mode to bypass protection. Retrieved April 15, 2026.](https://www.sophos.com/en-us/blog/snatch-ransomware-reboots-pcs-into-safe-mode-to-bypass-protection)
[^fn3]: [Cybereason Nocturnus. (n.d.). Cybereason vs. MedusaLocker Ransomware. Retrieved April 15, 2026.](https://www.cybereason.com/blog/research/medusalocker-ransomware)
[^fn4]: [Microsoft. (n.d.). Retrieved April 15, 2026.](https://support.microsoft.com/en-us/windows/windows-startup-settings-1af6ec8c-4d4a-4b23-adb7-e76eef0b847f)
[^fn5]: [Microsoft. (n.d.). Retrieved April 15, 2026.](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/bcdedit)
[^fn6]: [Naim, D.. (2016, September 15). CyberArk Labs: From Safe Mode to Domain Compromise. Retrieved June 23, 2021.](https://www.cyberark.com/resources/blog/cyberark-labs-from-safe-mode-to-domain-compromise)