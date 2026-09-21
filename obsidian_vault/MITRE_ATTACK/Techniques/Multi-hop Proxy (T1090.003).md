---
mitre_data:
  id: T1090.003
  linker_tags:
  - mitre/attack/linker/command_and_control/multi-hop_proxy
  name: Multi-hop Proxy
  related_tactics:
  - command_and_control
tags:
- mitre/attack/technique
---



# Multi-hop Proxy (`T1090.003`)

Adversaries may chain together multiple proxies to disguise the source of malicious traffic. Typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. This technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source.

For example, adversaries may construct or use onion routing networks – such as the publicly available [Tor](https://attack.mitre.org/software/S0183) network – to transport encrypted C2 traffic through a compromised population, allowing communication with any device within the network.[^fn3] Adversaries may also use operational relay box (ORB) networks composed of virtual private servers (VPS), Internet of Things (IoT) devices, smart devices, and end-of-life routers to obfuscate their operations.[^fn1] 

In the case of network infrastructure, it is possible for an adversary to leverage multiple compromised devices to create a multi-hop proxy chain (i.e., [Network Devices](https://attack.mitre.org/techniques/T1584/008)). By leveraging [Patch System Image](https://attack.mitre.org/techniques/T1601/001) on routers, adversaries can add custom code to the affected network devices that will implement onion routing between those nodes. This method is dependent upon the [Network Boundary Bridging](https://attack.mitre.org/techniques/T1599) method allowing the adversaries to cross the protected network boundary of the Internet perimeter and into the organization’s Wide-Area Network (WAN).  Protocols such as ICMP may be used as a transport.  

Similarly, adversaries may abuse peer-to-peer (P2P) and blockchain-oriented infrastructure to implement routing between a decentralized network of peers.[^fn2]


# Platform(s)

- ESXi
- Linux
- macOS
- Network Devices
- Windows

# Parent Technique(s)

- [[../Techniques/Proxy (T1090)|Proxy]]

# Tool(s)

- [[../Tools/FRP|FRP]]
- [[../Tools/AsyncRAT|AsyncRAT]]
- [[../Tools/Tor|Tor]]

# Tactic(s)

- [[../Tactics/13. Command and Control|Command and Control]]


# External Reference(s)

- [T1090.003](https://attack.mitre.org/techniques/T1090/003)

[^fn1]: [Raggi, Michael. (2024, May 22). IOC Extinction? China-Nexus Cyber Espionage Actors Use ORB Networks to Raise Cost on Defenders. Retrieved July 8, 2024.](https://cloud.google.com/blog/topics/threat-intelligence/china-nexus-espionage-orb-networks)
[^fn2]: [Robert Falcone, Jeff White, and Peter Renals. (2021, November 7). Targeted Attack Campaign Against ManageEngine ADSelfService Plus Delivers Godzilla Webshells, NGLite Trojan and KdcSponge Stealer. Retrieved February 8, 2024.](https://unit42.paloaltonetworks.com/manageengine-godzilla-nglite-kdcsponge/)
[^fn3]: [Wikipedia. (n.d.). Onion Routing. Retrieved October 20, 2020.](https://en.wikipedia.org/wiki/Onion_routing)