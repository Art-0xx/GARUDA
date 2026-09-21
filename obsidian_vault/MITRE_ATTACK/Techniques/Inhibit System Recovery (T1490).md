---
mitre_data:
  id: T1490
  linker_tags:
  - mitre/attack/linker/impact/inhibit_system_recovery
  name: Inhibit System Recovery
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Inhibit System Recovery (`T1490`)

Adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery.[^fn4][^fn2] This may deny access to available backups and recovery options.

Operating systems may contain features that can help fix corrupted systems, such as a backup catalog, volume shadow copies, and automatic repair features. Adversaries may disable or delete system recovery features to augment the effects of [Data Destruction](https://attack.mitre.org/techniques/T1485) and [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486).[^fn4][^fn2] Furthermore, adversaries may disable recovery notifications, then corrupt backups.[^fn9]

A number of native Windows utilities have been used by adversaries to disable or delete system recovery features:

* <code>vssadmin.exe</code> can be used to delete all volume shadow copies on a system - <code>vssadmin.exe delete shadows /all /quiet</code>
* [Windows Management Instrumentation](https://attack.mitre.org/techniques/T1047) can be used to delete volume shadow copies - <code>wmic shadowcopy delete</code>
* <code>wbadmin.exe</code> can be used to delete the Windows Backup Catalog - <code>wbadmin.exe delete catalog -quiet</code>
* <code>bcdedit.exe</code> can be used to disable automatic Windows recovery features by modifying boot configuration data - <code>bcdedit.exe /set {default} bootstatuspolicy ignoreallfailures & bcdedit /set {default} recoveryenabled no</code>
* <code>REAgentC.exe</code> can be used to disable Windows Recovery Environment (WinRE) repair/recovery options of an infected system
* <code>diskshadow.exe</code> can be used to delete all volume shadow copies on a system - <code>diskshadow delete shadows all</code> [^fn5] [^fn6]

On network devices, adversaries may leverage [Disk Wipe](https://attack.mitre.org/techniques/T1561) to delete backup firmware images and reformat the file system, then [System Shutdown/Reboot](https://attack.mitre.org/techniques/T1529) to reload the device. Together this activity may leave network devices completely inoperable and inhibit recovery operations.

On ESXi servers, adversaries may delete or encrypt snapshots of virtual machines to support [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486), preventing them from being leveraged as backups (e.g., via ` vim-cmd vmsvc/snapshot.removeall`).[^fn3]

Adversaries may also delete “online” backups that are connected to their network – whether via network storage media or through folders that sync to cloud services.[^fn8] In cloud environments, adversaries may disable versioning and backup policies and delete snapshots, database backups, machine images, and prior versions of objects designed to be used in disaster recovery scenarios.[^fn1][^fn7]


# Platform(s)

- Containers
- ESXi
- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1490](https://attack.mitre.org/techniques/T1490)

[^fn1]: [ Brian Prince. (2014, June 20). Code Hosting Service Shuts Down After Cyber Attack. Retrieved March 21, 2023.](https://www.darkreading.com/attacks-breaches/code-hosting-service-shuts-down-after-cyber-attack)
[^fn2]: [Berry, A., Homan, J., and Eitzman, R. (2017, May 23). WannaCry Malware Profile. Retrieved March 15, 2019.](https://www.fireeye.com/blog/threat-research/2017/05/wannacry-malware-profile.html)
[^fn3]: [Cybereason Nocturnus. (n.d.). Cybereason vs. BlackCat Ransomware. Retrieved March 26, 2025.](https://www.cybereason.com/blog/cybereason-vs.-blackcat-ransomware)
[^fn4]: [Mercer, W. and Rascagneres, P. (2018, February 12). Olympic Destroyer Takes Aim At Winter Olympics. Retrieved March 14, 2019.](https://blog.talosintelligence.com/2018/02/olympic-destroyer.html)
[^fn5]: [Microsoft Windows Server. (2023, February 3). Diskshadow. Retrieved November 21, 2023.](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskshadow)
[^fn6]: [Romain Dumont . (2022, September 21). Technical Analysis of Crytox Ransomware. Retrieved November 22, 2023.](https://www.zscaler.com/blogs/security-research/technical-analysis-crytox-ransomware)
[^fn7]: [Spencer Gietzen. (n.d.). AWS Simple Storage Service S3 Ransomware Part 2: Prevention and Defense. Retrieved March 21, 2023.](https://rhinosecuritylabs.com/aws/s3-ransomware-part-2-prevention-and-defense/)
[^fn8]: [Steve Ranger. (2020, February 27). Ransomware victims thought their backups were safe. They were wrong. Retrieved March 21, 2023.](https://www.zdnet.com/article/ransomware-victims-thought-their-backups-were-safe-they-were-wrong/)
[^fn9]: [TheDFIRReport. (2022, March 1). Disabling notifications on Synology servers before ransom. Retrieved September 12, 2024.](https://x.com/TheDFIRReport/status/1498657590259109894)