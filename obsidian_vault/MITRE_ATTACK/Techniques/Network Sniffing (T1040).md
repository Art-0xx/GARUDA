---
mitre_data:
  id: T1040
  linker_tags:
  - mitre/attack/linker/credential_access/network_sniffing
  - mitre/attack/linker/discovery/network_sniffing
  name: Network Sniffing
  related_tactics:
  - credential_access
  - discovery
tags:
- mitre/attack/technique
---



# Network Sniffing (`T1040`)

Adversaries may passively sniff network traffic to capture information about an environment, including authentication material passed over the network. Network sniffing refers to using the network interface on a system to monitor or capture information sent over a wired or wireless connection. An adversary may place a network interface into promiscuous mode to passively access data in transit over the network, or use span ports to capture a larger amount of data.

Data captured via this technique may include user credentials, especially those sent over an insecure, unencrypted protocol. Techniques for name service resolution poisoning, such as [Name Resolution Poisoning and SMB Relay](https://attack.mitre.org/techniques/T1557/001), can also be used to capture credentials to websites, proxies, and internal systems by redirecting traffic to an adversary.

Network sniffing may reveal configuration details, such as running services, version numbers, and other network characteristics (e.g. IP addresses, hostnames, VLAN IDs) necessary for subsequent [Lateral Movement](https://attack.mitre.org/tactics/TA0008) and/or [Stealth](https://attack.mitre.org/tactics/TA0005) activities. Adversaries may likely also utilize network sniffing during [Adversary-in-the-Middle](https://attack.mitre.org/techniques/T1557) (AiTM) to passively gain additional knowledge about the environment.

In cloud-based environments, adversaries may still be able to use traffic mirroring services to sniff network traffic from virtual machines. For example, AWS Traffic Mirroring, GCP Packet Mirroring, and Azure vTap allow users to define specified instances to collect traffic from and specified targets to send collected traffic to.[^fn1][^fn3][^fn5] Often, much of this traffic will be in cleartext due to the use of TLS termination at the load balancer level to reduce the strain of encrypting and decrypting traffic.[^fn6][^fn4] The adversary can then use exfiltration techniques such as Transfer Data to Cloud Account in order to access the sniffed traffic.[^fn6]

On network devices, adversaries may perform network captures using [Network Device CLI](https://attack.mitre.org/techniques/T1059/008) commands such as `monitor capture`.[^fn7][^fn2]


# Platform(s)

- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/Impacket|Impacket]]
- [[../Tools/Empire|Empire]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Responder|Responder]]
- [[../Tools/NBTscan|NBTscan]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1040](https://attack.mitre.org/techniques/T1040)

[^fn1]: [Amazon Web Services. (n.d.). How Traffic Mirroring works. Retrieved March 17, 2022.](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-how-it-works.html)
[^fn2]: [Cisco. (2022, August 17). Configure and Capture Embedded Packet on Software. Retrieved July 13, 2022.](https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-embedded-packet-capture/116045-productconfig-epc-00.html)
[^fn3]: [Google Cloud. (n.d.). Packet Mirroring overview. Retrieved March 17, 2022.](https://cloud.google.com/vpc/docs/packet-mirroring)
[^fn4]: [Luke Paine. (2020, March 11). Through the Looking Glass — Part 1. Retrieved March 17, 2022.](https://posts.specterops.io/through-the-looking-glass-part-1-f539ae308512)
[^fn5]: [Microsoft. (2022, February 9). Virtual network TAP. Retrieved March 17, 2022.](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-tap-overview)
[^fn6]: [Spencer Gietzen. (2019, September 17). Abusing VPC Traffic Mirroring in AWS. Retrieved March 17, 2022.](https://rhinosecuritylabs.com/aws/abusing-vpc-traffic-mirroring-in-aws/)
[^fn7]: [US-CERT. (2018, April 20). Alert (TA18-106A) Russian State-Sponsored Cyber Actors Targeting Network Infrastructure Devices. Retrieved October 19, 2020.](https://www.us-cert.gov/ncas/alerts/TA18-106A)