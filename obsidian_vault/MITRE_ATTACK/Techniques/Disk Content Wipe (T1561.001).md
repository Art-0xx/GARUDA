---
mitre_data:
  id: T1561.001
  linker_tags:
  - mitre/attack/linker/impact/disk_content_wipe
  name: Disk Content Wipe
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Disk Content Wipe (`T1561.001`)

Adversaries may erase the contents of storage devices on specific systems or in large numbers in a network to interrupt availability to system and network resources.

Adversaries may partially or completely overwrite the contents of a storage device rendering the data irrecoverable through the storage interface.[^fn3][^fn2][^fn1] Instead of wiping specific disk structures or files, adversaries with destructive intent may wipe arbitrary portions of disk content. To wipe disk content, adversaries may acquire direct access to the hard drive in order to overwrite arbitrarily sized portions of disk with random data.[^fn2] Adversaries have also been observed leveraging third-party drivers like [RawDisk](https://attack.mitre.org/software/S0364) to directly access disk content.[^fn3][^fn2] This behavior is distinct from [Data Destruction](https://attack.mitre.org/techniques/T1485) because sections of the disk are erased instead of individual files.

To maximize impact on the target organization in operations where network-wide availability interruption is the goal, malware used for wiping disk content may have worm-like features to propagate across a network by leveraging additional techniques like [Valid Accounts](https://attack.mitre.org/techniques/T1078), [OS Credential Dumping](https://attack.mitre.org/techniques/T1003), and [SMB/Windows Admin Shares](https://attack.mitre.org/techniques/T1021/002).[^fn2]


# Platform(s)

- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Disk Wipe (T1561)|Disk Wipe]]

# Tool(s)

- [[../Tools/RawDisk|RawDisk]]
- [[../Tools/cipher.exe|cipher.exe]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1561.001](https://attack.mitre.org/techniques/T1561/001)
- [Russinovich, M. & Garnier, T. (2017, May 22). Sysmon v6.20. Retrieved December 13, 2017.](https://docs.microsoft.com/sysinternals/downloads/sysmon)

[^fn1]: [Department of Justice. (2018, September 6). Criminal Complaint - United States of America v. PARK JIN HYOK. Retrieved March 29, 2019.](https://www.justice.gov/opa/press-release/file/1092091/download)
[^fn2]: [Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Destructive Malware Report. Retrieved November 17, 2024.](https://web.archive.org/web/20160303200515/https:/operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf)
[^fn3]: [Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Unraveling the Long Thread of the Sony Attack. Retrieved February 25, 2016.](https://web.archive.org/web/20160226161828/https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Report.pdf)