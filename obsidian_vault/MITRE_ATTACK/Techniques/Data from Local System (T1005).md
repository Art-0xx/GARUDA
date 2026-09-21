---
mitre_data:
  id: T1005
  linker_tags:
  - mitre/attack/linker/collection/data_from_local_system
  name: Data from Local System
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Local System (`T1005`)

Adversaries may search local system sources, such as file systems, configuration files, local databases, virtual machine files, or process memory, to find files of interest and sensitive data prior to Exfiltration.

Adversaries may do this using a [Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059), such as [cmd](https://attack.mitre.org/software/S0106) as well as a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008), which have functionality to interact with the file system to gather information.[^fn1] Adversaries may also use [Automated Collection](https://attack.mitre.org/techniques/T1119) on the local system.



# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/NPPSPY|NPPSPY]]
- [[../Tools/PowerSploit|PowerSploit]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/TruffleHog|TruffleHog]]
- [[../Tools/Out1|Out1]]
- [[../Tools/Forfiles|Forfiles]]
- [[../Tools/MCMD|MCMD]]
- [[../Tools/esentutl|esentutl]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/QuasarRAT|QuasarRAT]]
- [[../Tools/Wevtutil|Wevtutil]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1005](https://attack.mitre.org/techniques/T1005)
- [Gyler, C.,Perez D.,Jones, S.,Miller, S.. (2021, February 25). This is Not a Test: APT41 Initiates Global Intrusion Campaign Using Multiple Exploits. Retrieved February 17, 2022.](https://www.mandiant.com/resources/apt41-initiates-global-intrusion-campaign-using-multiple-exploits)
- [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)

[^fn1]: [Cisco. (2022, August 16). show running-config - Cisco IOS Configuration Fundamentals Command Reference . Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/command/cf_command_ref/show_protocols_through_showmon.html#wp2760878733)