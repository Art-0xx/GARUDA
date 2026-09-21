---
mitre_data:
  id: T1583.002
  linker_tags:
  - mitre/attack/linker/resource_development/dns_server
  name: DNS Server
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# DNS Server (`T1583.002`)

Adversaries may set up their own Domain Name System (DNS) servers that can be used during targeting. During post-compromise activity, adversaries may utilize DNS traffic for various tasks, including for Command and Control (ex: [Application Layer Protocol](https://attack.mitre.org/techniques/T1071)). Instead of hijacking existing DNS servers, adversaries may opt to configure and run their own DNS servers in support of operations.

By running their own DNS servers, adversaries can have more control over how they administer server-side DNS C2 traffic ([DNS](https://attack.mitre.org/techniques/T1071/004)). With control over a DNS server, adversaries can configure DNS applications to provide conditional responses to malware and, generally, have more flexibility in the structure of the DNS-based C2 channel.[^fn1]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Acquire Infrastructure (T1583)|Acquire Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583.002](https://attack.mitre.org/techniques/T1583/002)

[^fn1]: [Hinchliffe, A. (2019, March 15). DNS Tunneling: how DNS can be (ab)used by malicious actors. Retrieved October 3, 2020.](https://unit42.paloaltonetworks.com/dns-tunneling-how-dns-can-be-abused-by-malicious-actors/)