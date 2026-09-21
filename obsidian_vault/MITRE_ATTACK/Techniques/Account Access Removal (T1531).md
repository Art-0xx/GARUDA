---
mitre_data:
  id: T1531
  linker_tags:
  - mitre/attack/linker/impact/account_access_removal
  name: Account Access Removal
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Account Access Removal (`T1531`)

Adversaries may interrupt availability of system and network resources by inhibiting access to accounts utilized by legitimate users. Accounts may be deleted, locked, or manipulated (ex: changed credentials, revoked permissions for SaaS platforms such as Sharepoint) to remove access to accounts.[^fn3] Adversaries may also subsequently log off and/or perform a [System Shutdown/Reboot](https://attack.mitre.org/techniques/T1529) to set malicious changes into place.[^fn1][^fn2]

In Windows, [Net](https://attack.mitre.org/software/S0039) utility, <code>Set-LocalUser</code> and <code>Set-ADAccountPassword</code> [PowerShell](https://attack.mitre.org/techniques/T1059/001) cmdlets may be used by adversaries to modify user accounts. Accounts could also be disabled by Group Policy. In Linux, the <code>passwd</code> utility may be used to change passwords. On ESXi servers, accounts can be removed or modified via esxcli (`system account set`, `system account remove`).

Adversaries who use ransomware or similar attacks may first perform this and other Impact behaviors, such as [Data Destruction](https://attack.mitre.org/techniques/T1485) and [Defacement](https://attack.mitre.org/techniques/T1491), in order to impede incident response/recovery before completing the [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486) objective. 


# Platform(s)

- Linux
- macOS
- Windows
- SaaS
- IaaS
- Office Suite
- ESXi

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1531](https://attack.mitre.org/techniques/T1531)

[^fn1]: [CarbonBlack Threat Analysis Unit. (2019, March 22). TAU Threat Intelligence Notification – LockerGoga Ransomware. Retrieved April 16, 2019.](https://www.carbonblack.com/2019/03/22/tau-threat-intelligence-notification-lockergoga-ransomware/)
[^fn2]: [Harbison, M. (2019, March 26). Born This Way? Origins of LockerGoga. Retrieved April 16, 2019.](https://unit42.paloaltonetworks.com/born-this-way-origins-of-lockergoga/)
[^fn3]: [Obsidian Threat Research Team. (2023, June 6). SaaS Ransomware Observed in the Wild for Sharepoint in Microsoft 365. Retrieved October 5, 2025.](https://web.archive.org/web/20230608061141/https://www.obsidiansecurity.com/blog/saas-ransomware-observed-sharepoint-microsoft-365/)