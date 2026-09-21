---
mitre_data:
  id: T1590.005
  linker_tags:
  - mitre/attack/linker/reconnaissance/ip_addresses
  name: IP Addresses
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# IP Addresses (`T1590.005`)

Adversaries may gather the victim's IP addresses that can be used during targeting. Public IP addresses may be allocated to organizations by block, or a range of sequential addresses. Information about assigned IP addresses may include a variety of details, such as which IP addresses are in use. IP addresses may also enable an adversary to derive other details about a victim, such as organizational size, physical location(s), Internet service provider, and or where/how their publicly-facing infrastructure is hosted.

Adversaries may gather this information in various ways, such as direct collection actions via [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about assigned IP addresses may also be exposed to adversaries via online or other accessible data sets (ex: [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)).[^fn3][^fn2][^fn1] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) or [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Network Information (T1590)|Gather Victim Network Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1590.005](https://attack.mitre.org/techniques/T1590/005)

[^fn1]: [CIRCL Computer Incident Response Center. (n.d.). Passive DNS. Retrieved October 20, 2020.](https://www.circl.lu/services/passive-dns/)
[^fn2]: [Hacker Target. (n.d.). DNS Dumpster. Retrieved October 20, 2020.](https://dnsdumpster.com/)
[^fn3]: [NTT America. (n.d.). Whois Lookup. Retrieved November 17, 2024.](https://who.is/)