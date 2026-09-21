---
mitre_data:
  id: T1557.002
  linker_tags:
  - mitre/attack/linker/credential_access/arp_cache_poisoning
  - mitre/attack/linker/collection/arp_cache_poisoning
  name: ARP Cache Poisoning
  related_tactics:
  - credential_access
  - collection
tags:
- mitre/attack/technique
---



# ARP Cache Poisoning (`T1557.002`)

Adversaries may poison Address Resolution Protocol (ARP) caches to position themselves between the communication of two or more networked devices. This activity may be used to enable follow-on behaviors such as [Network Sniffing](https://attack.mitre.org/techniques/T1040) or [Transmitted Data Manipulation](https://attack.mitre.org/techniques/T1565/002).

The ARP protocol is used to resolve IPv4 addresses to link layer addresses, such as a media access control (MAC) address.[^fn2] Devices in a local network segment communicate with each other by using link layer addresses. If a networked device does not have the link layer address of a particular networked device, it may send out a broadcast ARP request to the local network to translate the IP address to a MAC address. The device with the associated IP address directly replies with its MAC address. The networked device that made the ARP request will then use as well as store that information in its ARP cache.

An adversary may passively wait for an ARP request to poison the ARP cache of the requesting device. The adversary may reply with their MAC address, thus deceiving the victim by making them believe that they are communicating with the intended networked device. For the adversary to poison the ARP cache, their reply must be faster than the one made by the legitimate IP address owner. Adversaries may also send a gratuitous ARP reply that maliciously announces the ownership of a particular IP address to all the devices in the local network segment.

The ARP protocol is stateless and does not require authentication. Therefore, devices may wrongly add or update the MAC address of the IP address in their ARP cache.[^fn3][^fn1]

Adversaries may use ARP cache poisoning as a means to intercept network traffic. This activity may be used to collect and/or relay data such as credentials, especially those sent over an insecure, unencrypted protocol.[^fn3]



# Platform(s)

- Linux
- Windows
- macOS

# Parent Technique(s)

- [[../Techniques/Adversary-in-the-Middle (T1557)|Adversary-in-the-Middle]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]
- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1557.002](https://attack.mitre.org/techniques/T1557/002)

[^fn1]: [Cylance. (2014, December). Operation Cleaver. Retrieved September 14, 2017.](https://web.archive.org/web/20200302085133/https://www.cylance.com/content/dam/cylance/pages/operation-cleaver/Cylance_Operation_Cleaver_Report.pdf)
[^fn2]: [Plummer, D. (1982, November). An Ethernet Address Resolution Protocol. Retrieved October 15, 2020.](https://tools.ietf.org/html/rfc826)
[^fn3]: [Siles, R. (2003, August). Real World ARP Spoofing. Retrieved October 15, 2020.](https://pen-testing.sans.org/resources/papers/gcih/real-world-arp-spoofing-105411)