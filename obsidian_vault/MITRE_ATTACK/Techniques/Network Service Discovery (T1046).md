---
mitre_data:
  id: T1046
  linker_tags:
  - mitre/attack/linker/discovery/network_service_discovery
  name: Network Service Discovery
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Network Service Discovery (`T1046`)

Adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. Common methods to acquire this information include port, vulnerability, and/or wordlist scans using tools that are brought onto a system.[^fn2]   

Within cloud environments, adversaries may attempt to discover services running on other cloud hosts. Additionally, if the cloud environment is connected to a on-premises environment, adversaries may be able to identify services running on non-cloud systems as well.

Within macOS environments, adversaries may use the native Bonjour application to discover services running on other macOS hosts within a network. The Bonjour mDNSResponder daemon automatically registers and advertises a host’s registered services on the network. For example, adversaries can use a mDNS query (such as <code>dns-sd -B _ssh._tcp .</code>) to find other systems broadcasting the ssh service.[^fn1][^fn3]


# Platform(s)

- Containers
- IaaS
- Linux
- macOS
- Network Devices
- Windows

# Tool(s)

- [[../Tools/SILENTTRINITY|SILENTTRINITY]]
- [[../Tools/Empire|Empire]]
- [[../Tools/FRP|FRP]]
- [[../Tools/PoshC2|PoshC2]]
- [[../Tools/Brute Ratel C4|Brute Ratel C4]]
- [[../Tools/Peirates|Peirates]]
- [[../Tools/NBTscan|NBTscan]]
- [[../Tools/Koadic|Koadic]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1046](https://attack.mitre.org/techniques/T1046)

[^fn1]: [Apple Inc. (2013, April 23). Bonjour Overview. Retrieved October 11, 2021.](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html)
[^fn2]: [CISA. (2021, May 6). Analysis Report (AR21-126A) FiveHands Ransomware. Retrieved June 7, 2021.](https://us-cert.cisa.gov/ncas/analysis-reports/ar21-126a)
[^fn3]: [Jaron Bradley. (2021, November 14). What does APT Activity Look Like on macOS?. Retrieved January 19, 2022.](https://themittenmac.com/what-does-apt-activity-look-like-on-macos/)