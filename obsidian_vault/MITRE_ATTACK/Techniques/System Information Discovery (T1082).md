---
mitre_data:
  id: T1082
  linker_tags:
  - mitre/attack/linker/discovery/system_information_discovery
  name: System Information Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Information Discovery (`T1082`)

An adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. Adversaries may use this information to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions. This behavior is distinct from [Local Storage Discovery](https://attack.mitre.org/techniques/T1680) which is an adversary's discovery of local drive, disks and/or volumes.

Tools such as [Systeminfo](https://attack.mitre.org/software/S0096) can be used to gather detailed system information. If running with privileged access, a breakdown of system data can be gathered through the <code>systemsetup</code> configuration tool on macOS. Adversaries may leverage a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) on network devices to gather detailed system information (e.g. <code>show version</code>).[^fn8] On ESXi servers, threat actors may gather system information from various esxcli utilities, such as `system hostname get` and `system version get`.[^fn4][^fn3]

Infrastructure as a Service (IaaS) cloud providers such as AWS, GCP, and Azure allow access to instance and virtual machine information via APIs. Successful authenticated API calls can return data such as the operating system platform and status of a particular instance or the model view of a virtual machine.[^fn1][^fn2][^fn5]

[System Information Discovery](https://attack.mitre.org/techniques/T1082) combined with information gathered from other forms of discovery and reconnaissance can drive payload development and concealment.[^fn7][^fn6] 


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Covenant|Covenant]]
- [[../Tools/Diskpart|Diskpart]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/dsquery|dsquery]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Remcos|Remcos]]
- [[../Tools/Systeminfo|Systeminfo]]
- [[../Tools/cmd|cmd]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1082](https://attack.mitre.org/techniques/T1082)

[^fn1]: [Amazon. (n.d.). describe-instance-information. Retrieved March 3, 2020.](https://docs.aws.amazon.com/cli/latest/reference/ssm/describe-instance-information.html)
[^fn2]: [Google. (n.d.). Rest Resource: instance. Retrieved March 3, 2020.](https://cloud.google.com/compute/docs/reference/rest/v1/instances)
[^fn3]: [Jason Hill. (2023, February 8). VMware ESXi in the Line of Ransomware Fire. Retrieved March 26, 2025.](https://www.varonis.com/blog/vmware-esxi-in-the-line-of-ransomware-fire)
[^fn4]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)
[^fn5]: [Microsoft. (2019, March 1). Virtual Machines - Get. Retrieved October 8, 2019.](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/get)
[^fn6]: [Phil Stokes. (2021, February 16). 20 Common Tools & Techniques Used by macOS Threat Actors & Malware. Retrieved August 23, 2021.](https://labs.sentinelone.com/20-common-tools-techniques-used-by-macos-threat-actors-malware/)
[^fn7]: [Phile Stokes. (2018, September 20). On the Trail of OSX.FairyTale | Adware Playing at Malware. Retrieved August 24, 2021.](https://www.sentinelone.com/blog/trail-osx-fairytale-adware-playing-malware/)
[^fn8]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)