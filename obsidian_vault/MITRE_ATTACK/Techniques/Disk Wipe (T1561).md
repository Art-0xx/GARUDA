---
mitre_data:
  id: T1561
  linker_tags:
  - mitre/attack/linker/impact/disk_wipe
  name: Disk Wipe
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Disk Wipe (`T1561`)

Adversaries may wipe or corrupt raw disk data on specific systems or in large numbers in a network to interrupt availability to system and network resources. With direct write access to a disk, adversaries may attempt to overwrite portions of disk data. Adversaries may opt to wipe arbitrary portions of disk data and/or wipe disk structures like the master boot record (MBR). A complete wipe of all disk sectors may be attempted.

To maximize impact on the target organization in operations where network-wide availability interruption is the goal, malware used for wiping disks may have worm-like features to propagate across a network by leveraging additional techniques like [Valid Accounts](https://attack.mitre.org/techniques/T1078), [OS Credential Dumping](https://attack.mitre.org/techniques/T1003), and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002).[^fn2]

On network devices, adversaries may wipe configuration files and other data from the device using [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `erase`.[^fn1]


# Platform(s)

- Linux
- macOS
- Windows
- Network Devices

# Sub-Technique(s)

- [[../Techniques/Disk Structure Wipe (T1561.002)|Disk Structure Wipe]]
- [[../Techniques/Disk Content Wipe (T1561.001)|Disk Content Wipe]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1561](https://attack.mitre.org/techniques/T1561)
- [Russinovich, M. & Garnier, T. (2017, May 22). Sysmon v6.20. Retrieved December 13, 2017.](https://docs.microsoft.com/sysinternals/downloads/sysmon)

[^fn1]: [Cisco. (2022, August 16). erase - Cisco IOS Configuration Fundamentals Command Reference . Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/command/cf_command_ref/D_through_E.html#wp3557227463)
[^fn2]: [Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Destructive Malware Report. Retrieved November 17, 2024.](https://web.archive.org/web/20160303200515/https:/operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf)