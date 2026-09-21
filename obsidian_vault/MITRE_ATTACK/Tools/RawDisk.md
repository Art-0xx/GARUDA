---
tags:
  - mitre/attack/tool
---

# RawDisk (`S0364`)

[RawDisk](https://attack.mitre.org/software/S0364) is a legitimate commercial driver from the EldoS Corporation that is used for interacting with files, disks, and partitions. The driver allows for direct modification of data on a local computer's hard drive. In some cases, the tool can enact these raw disk modifications from user-mode processes, circumventing Windows operating system security features.[^fn1][^fn2]



# Platform(s)

- Windows

# Techniques Used

## Disk Structure Wipe

[RawDisk](https://attack.mitre.org/software/S0364) was used in [Shamoon](https://attack.mitre.org/software/S0140) to help overwrite components of disk structure like the MBR and disk partitions.[\[Palo Alto Shamoon Nov 2016\]](http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/)[\[Unit 42 Shamoon3 2018\]](https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/)

- *Technique:* [[../Techniques/Disk Structure Wipe (T1561.002)|Disk Structure Wipe]]

## Disk Content Wipe

[RawDisk](https://attack.mitre.org/software/S0364) has been used to directly access the hard disk to help overwrite arbitrarily sized portions of disk content.[\[Novetta Blockbuster Destructive Malware\]](https://web.archive.org/web/20160303200515/https:/operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf)

- *Technique:* [[../Techniques/Disk Content Wipe (T1561.001)|Disk Content Wipe]]

## Data Destruction

[RawDisk](https://attack.mitre.org/software/S0364) was used in [Shamoon](https://attack.mitre.org/software/S0140) to write to protected system locations such as the MBR and disk partitions in an effort to destroy data.[\[Palo Alto Shamoon Nov 2016\]](http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/)[\[Unit 42 Shamoon3 2018\]](https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/)

- *Technique:* [[../Techniques/Data Destruction (T1485)|Data Destruction]]


# External References(s)

- [S0364](https://attack.mitre.org/software/S0364)

[^fn1]: [Edwards, M. (2007, March 14). EldoS Provides Raw Disk Access for Vista and XP. Retrieved March 26, 2019.](https://www.itprotoday.com/windows-78/eldos-provides-raw-disk-access-vista-and-xp)
[^fn2]: [Novetta Threat Research Group. (2016, February 24). Operation Blockbuster: Destructive Malware Report. Retrieved November 17, 2024.](https://web.archive.org/web/20160303200515/https:/operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf)