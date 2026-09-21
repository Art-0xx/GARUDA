---
mitre_data:
  id: T1680
  linker_tags:
  - mitre/attack/linker/discovery/local_storage_discovery
  name: Local Storage Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Local Storage Discovery (`T1680`)

Adversaries may enumerate local drives, disks, and/or volumes and their attributes like total or free space and volume serial number. This can be done to prepare for ransomware-related encryption, to perform [Lateral Movement](https://attack.mitre.org/tactics/TA0109), or as a precursor to [Direct Volume Access](https://attack.mitre.org/techniques/T1006). 

On ESXi systems, adversaries may use [Hypervisor CLI](https://attack.mitre.org/techniques/T1059/012) commands such as `esxcli` to list storage connected to the host as well as `.vmdk` files.[^fn7][^fn5]

On Windows systems, adversaries can use `wmic logicaldisk get` to find information about local network drives. They can also use `Get-PSDrive` in PowerShell to retrieve drives and may additionally use Windows API functions such as `GetDriveType`.[^fn6][^fn1]

Linux has commands such as `parted`, `lsblk`, `fdisk`, `lshw`, and `df` that can list information about disk partitions such as size, type, file system types, and free space. The command `diskutil` on MacOS can be used to list disks while `system_profiler SPStorageDataType` can additionally show information such as a volume’s mount path, file system, and the type of drive in the system. 

Infrastructure as a Service (IaaS) cloud providers also have commands for storage discovery such as `describe volume` in AWS, `gcloud compute disks list` in GCP, and `az disk list` in Azure.[^fn2][^fn4][^fn3]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/CrackMapExec|CrackMapExec]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1680](https://attack.mitre.org/techniques/T1680)

[^fn1]: [Ankur Saini, Charlie Gardner. (2023, June 28). Charming Kitten Updates POWERSTAR with an InterPlanetary Twist. Retrieved September 25, 2025.](https://www.volexity.com/blog/2023/06/28/charming-kitten-updates-powerstar-with-an-interplanetary-twist/)
[^fn2]: [AWS. (n.d.). describe-volumes. Retrieved October 20, 2025.](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-volumes.html)
[^fn3]: [Azure. (n.d.). az disk. Retrieved October 20, 2025.](https://learn.microsoft.com/en-us/cli/azure/disk?view=azure-cli-latest)
[^fn4]: [Google Cloud. (n.d.). gcloud compute disks list. Retrieved October 20, 2025.](https://cloud.google.com/sdk/gcloud/reference/compute/disks/list)
[^fn5]: [Junestherry Dela Cruz. (2022, January 24). Analysis and Impact of LockBit Ransomware’s First Linux and VMware ESXi Variant. Retrieved March 26, 2025.](https://www.trendmicro.com/en_us/research/22/a/analysis-and-Impact-of-lockbit-ransomwares-first-linux-and-vmware-esxi-variant.html)
[^fn6]: [Lenart Bermejo, Sunny Lu, Ted Lee. (2024, September 9). Earth Preta Evolves its Attacks with New Malware and Strategies. Retrieved August 4, 2025.](https://www.trendmicro.com/en_us/research/24/i/earth-preta-new-malware-and-strategies.html)
[^fn7]: [Mina Naiim. (2021, May 28). DarkSide on Linux: Virtual Machines Targeted. Retrieved March 26, 2025.](https://www.trendmicro.com/en_us/research/21/e/darkside-linux-vms-targeted.html)