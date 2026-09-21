---
mitre_data:
  id: T1016
  linker_tags:
  - mitre/attack/linker/discovery/system_network_configuration_discovery
  name: System Network Configuration Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Network Configuration Discovery (`T1016`)

Adversaries may look for details about the network configuration and settings, such as IP and/or MAC addresses, of systems they access or through information discovery of remote systems. Several operating system administration utilities exist that can be used to gather this information. Examples include [Arp](https://attack.mitre.org/software/S0099), [ipconfig](https://attack.mitre.org/software/S0100)/[ifconfig](https://attack.mitre.org/software/S0101), [nbtstat](https://attack.mitre.org/software/S0102), and [route](https://attack.mitre.org/software/S0103).

Adversaries may also leverage a [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) on network devices to gather information about configurations and settings, such as IP addresses of configured interfaces and static/dynamic routes (e.g. <code>show ip route</code>, <code>show ip interface</code>).[^fn3][^fn1] On ESXi, adversaries may leverage esxcli to gather network configuration information. For example, the command `esxcli network nic list` will retrieve the MAC address, while `esxcli network ip interface ipv4 get` will retrieve the local IPv4 address.[^fn2]

Adversaries may use the information from [System Network Configuration Discovery](https://attack.mitre.org/techniques/T1016) during automated discovery to shape follow-on behaviors, including determining certain access within the target network and what actions to do next. 


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Sub-Technique(s)

- [[../Techniques/Internet Connection Discovery (T1016.001)|Internet Connection Discovery]]
- [[../Techniques/Wi-Fi Discovery (T1016.002)|Wi-Fi Discovery]]

# Tool(s)

- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/ipconfig|ipconfig]]
- [[../Tools/Arp|Arp]]
- [[../Tools/Empire|Empire]]
- [[../Tools/ifconfig|ifconfig]]
- [[../Tools/PcShare|PcShare]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Nltest|Nltest]]
- [[../Tools/nbtstat|nbtstat]]
- [[../Tools/NBTscan|NBTscan]]
- [[../Tools/route|route]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]
- [[../Tools/QuasarRAT|QuasarRAT]]
- [[../Tools/AdFind|AdFind]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1016](https://attack.mitre.org/techniques/T1016)

[^fn1]: [Gyler, C.,Perez D.,Jones, S.,Miller, S.. (2021, February 25). This is Not a Test: APT41 Initiates Global Intrusion Campaign Using Multiple Exploits. Retrieved February 17, 2022.](https://www.mandiant.com/resources/apt41-initiates-global-intrusion-campaign-using-multiple-exploits)
[^fn2]: [Pham Duy Phuc, Max Kersten, Noël Keijzer, and Michaël Schrijver. (2024, February 14). RansomHouse am See. Retrieved March 26, 2025.](https://www.trellix.com/en-au/blogs/research/ransomhouse-am-see/)
[^fn3]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)