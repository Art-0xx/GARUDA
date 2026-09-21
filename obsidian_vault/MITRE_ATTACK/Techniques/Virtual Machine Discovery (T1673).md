---
mitre_data:
  id: T1673
  linker_tags:
  - mitre/attack/linker/discovery/virtual_machine_discovery
  name: Virtual Machine Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Virtual Machine Discovery (`T1673`)

An adversary may attempt to enumerate running virtual machines (VMs) after gaining access to a host or hypervisor. For example, adversaries may enumerate a list of VMs on an ESXi hypervisor using a [Hypervisor CLI](https://attack.mitre.org/techniques/T1059/012) such as `esxcli` or `vim-cmd` (e.g. `esxcli vm process list or vim-cmd vmsvc/getallvms`).[^fn2][^fn1] Adversaries may also directly leverage a graphical user interface, such as VMware vCenter, in order to view virtual machines on a host. 

Adversaries may use the information from [Virtual Machine Discovery](https://attack.mitre.org/techniques/T1673) during discovery to shape follow-on behaviors. Subsequently discovered VMs may be leveraged for follow-on activities such as [Service Stop](https://attack.mitre.org/techniques/T1489) or [Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486).[^fn2]


# Platform(s)

- ESXi
- Linux
- macOS
- Windows

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1673](https://attack.mitre.org/techniques/T1673)

[^fn1]: [Cj Arsley Mateo, Darrel Tristan Virtusio, Sarah Pearl Camiling, Andrei Alimboyao, Nathaniel Morales, Jacob Santos, Earl John Bareng. (2024, July 19). Play Ransomware Group’s New Linux Variant Targets ESXi, Shows Ties With Prolific Puma. Retrieved March 26, 2025.](https://www.trendmicro.com/en_us/research/24/g/new-play-ransomware-linux-variant-targets-esxi-shows-ties-with-p.html)
[^fn2]: [Michael Dawson. (2021, August 30). Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware. Retrieved March 26, 2025.](https://www.crowdstrike.com/en-us/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/)