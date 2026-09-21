---
tags:
  - mitre/attack/tool
---

# Diskpart (`S9002`)

[Diskpart](https://attack.mitre.org/software/S9002) is a Windows command-line utility that is used to manage the computer’s drives, which includes disks, partitions, volumes and virtual hard disks.[^fn1]  

Adversaries may abuse [Diskpart](https://attack.mitre.org/software/S9002) to perform discovery and destructive actions on a system’s storage. For example, adversaries have been observed using [Diskpart](https://attack.mitre.org/software/S9002) to conduct [Discovery](https://attack.mitre.org/tactics/TA0007) techniques to enumerate disks and volumes to gather information about the host environment, and to execute commands such as `clean all` to remove partition information and overwrite data across disks, resulting in data destruction.[^fn2]



# Platform(s)

- Windows

# Techniques Used

## Disk Structure Wipe

[Diskpart](https://attack.mitre.org/software/S9002) can be used to delete a partition or a volume.[\[Microsoft_diskpart_Feb2023\]](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart) [Diskpart](https://attack.mitre.org/software/S9002) can also be used to remove all partitions or volume formatting from the selected disk.[\[Trendmicro_RansomHub_Dec2024\]](https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-ransomhub)   

- *Technique:* [[../Techniques/Disk Structure Wipe (T1561.002)|Disk Structure Wipe]]

## Windows Permissions

[Diskpart](https://attack.mitre.org/software/S9002) can be used to display, set, or clear attributes of a disk or volume.[\[Microsoft_diskpart_Feb2023\]](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)  

- *Technique:* [[../Techniques/Windows Permissions (T1222.001)|Windows Permissions]]

## System Information Discovery

[Diskpart](https://attack.mitre.org/software/S9002) can show information about the selected disk, partition, volume, or virtual hard disk (VHD).[\[Microsoft_diskpart_Feb2023\]](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart) 

- *Technique:* [[../Techniques/System Information Discovery (T1082)|System Information Discovery]]

## Windows Command Shell

[Diskpart](https://attack.mitre.org/software/S9002) can execute a disk partition script file, which attempts to mount a virtual hard disk.[\[Halcyon_CloakRansomware_Dec2024\]](https://www.halcyon.ai/blog/cloak-ransomware-variant-exhibits-advanced-persistence-evasion-and-vhd-extraction-capabilities) [Diskpart](https://attack.mitre.org/software/S9002) can also assign and mount virtual disks.[\[Halcyon_CloakRansomware_Dec2024\]](https://www.halcyon.ai/blog/cloak-ransomware-variant-exhibits-advanced-persistence-evasion-and-vhd-extraction-capabilities)   

- *Technique:* [[../Techniques/Windows Command Shell (T1059.003)|Windows Command Shell]]

## File and Directory Discovery

If executed with elevated privileges, [Diskpart](https://attack.mitre.org/software/S9002) can list all volumes, including virtual disks.[\[Halcyon_CloakRansomware_Dec2024\]](https://www.halcyon.ai/blog/cloak-ransomware-variant-exhibits-advanced-persistence-evasion-and-vhd-extraction-capabilities)   

- *Technique:* [[../Techniques/File and Directory Discovery (T1083)|File and Directory Discovery]]


# External References(s)

- [S9002](https://attack.mitre.org/software/S9002)

[^fn1]: [Microsoft. (2023, February 3). diskpart. Retrieved March 17, 2025.](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)
[^fn2]: [Trend Research. (2024, December 20). RansomHub. Retrieved December 23, 2025.](https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-ransomhub)