---
mitre_data:
  id: T1590
  linker_tags:
  - mitre/attack/linker/reconnaissance/gather_victim_network_information
  name: Gather Victim Network Information
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Gather Victim Network Information (`T1590`)

Adversaries may gather information about the victim's networks that can be used during targeting. Information about networks may include a variety of details, including administrative data (ex: IP ranges, domain names, etc.) as well as specifics regarding its topology and operations.

Adversaries may gather this information in various ways, such as direct collection actions via [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about networks may also be exposed to adversaries via online or other accessible data sets (ex: [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)).[^fn3][^fn2][^fn1] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) or [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)), and/or initial access (ex: [Trusted Relationship](https://attack.mitre.org/techniques/T1199)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/IP Addresses (T1590.005)|IP Addresses]]
- [[../Techniques/DNS (T1590.002)|DNS]]
- [[../Techniques/Network Topology (T1590.004)|Network Topology]]
- [[../Techniques/Network Trust Dependencies (T1590.003)|Network Trust Dependencies]]
- [[../Techniques/Network Security Appliances (T1590.006)|Network Security Appliances]]
- [[../Techniques/Domain Properties (T1590.001)|Domain Properties]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1590](https://attack.mitre.org/techniques/T1590)

[^fn1]: [CIRCL Computer Incident Response Center. (n.d.). Passive DNS. Retrieved October 20, 2020.](https://www.circl.lu/services/passive-dns/)
[^fn2]: [Hacker Target. (n.d.). DNS Dumpster. Retrieved October 20, 2020.](https://dnsdumpster.com/)
[^fn3]: [NTT America. (n.d.). Whois Lookup. Retrieved November 17, 2024.](https://who.is/)