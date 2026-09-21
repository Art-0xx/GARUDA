---
mitre_data:
  id: T1049
  linker_tags:
  - mitre/attack/linker/discovery/system_network_connections_discovery
  name: System Network Connections Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# System Network Connections Discovery (`T1049`)

Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. 

An adversary who gains access to a system that is part of a cloud-based environment may map out Virtual Private Clouds or Virtual Networks in order to determine what systems and services are connected. The actions performed are likely the same types of discovery techniques depending on the operating system, but the resulting information may include details about the networked cloud environment relevant to the adversary's goals. Cloud providers may have different ways in which their virtual networks operate.[^fn1][^fn2][^fn3] Similarly, adversaries who gain access to network devices may also perform similar discovery activities to gather information about connected systems and services.

Utilities and commands that acquire this information include [netstat](https://attack.mitre.org/software/S0104), "net use," and "net session" with [Net](https://attack.mitre.org/software/S0039). In Mac and Linux, [netstat](https://attack.mitre.org/software/S0104) and <code>lsof</code> can be used to list current connections. <code>who -a</code> and <code>w</code> can be used to show which users are currently logged in, similar to "net session". Additionally, built-in features native to network devices and [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) may be used (e.g. <code>show ip sockets</code>, <code>show tcp brief</code>).[^fn4] On ESXi servers, the command `esxi network ip connection list` can be used to list active network connections.[^fn5]


# Platform(s)

- ESXi
- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Net|Net]]
- [[../Tools/ShimRatReporter|ShimRatReporter]]
- [[../Tools/Sliver|Sliver]]
- [[../Tools/Pacu|Pacu]]
- [[../Tools/Empire|Empire]]
- [[../Tools/FRP|FRP]]
- [[../Tools/netstat|netstat]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/nbtstat|nbtstat]]
- [[../Tools/CrackMapExec|CrackMapExec]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1049](https://attack.mitre.org/techniques/T1049)

[^fn1]: [Amazon. (n.d.). What Is Amazon VPC?. Retrieved October 6, 2019.](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
[^fn2]: [Annamalai, N., Casey, C., Almeida, M., et. al.. (2019, June 18). What is Azure Virtual Network?. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)
[^fn3]: [Google. (2019, September 23). Virtual Private Cloud (VPC) network overview. Retrieved October 6, 2019.](https://cloud.google.com/vpc/docs/vpc)
[^fn4]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)
[^fn5]: [Zhongyuan Hau (Aaron), Ren Jie Yow, and Yoav Mazor. (2025, January 21). ESXi Ransomware Attacks: Stealthy Persistence through. Retrieved March 27, 2025.](https://www.sygnia.co/blog/esxi-ransomware-ssh-tunneling-defense-strategies/)