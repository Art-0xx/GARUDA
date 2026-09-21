---
mitre_data:
  id: T1590.006
  linker_tags:
  - mitre/attack/linker/reconnaissance/network_security_appliances
  name: Network Security Appliances
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Network Security Appliances (`T1590.006`)

Adversaries may gather information about the victim's network security appliances that can be used during targeting. Information about network security appliances may include a variety of details, such as the existence and specifics of deployed firewalls, content filters, and proxies/bastion hosts. Adversaries may also target information about victim network-based intrusion detection systems (NIDS) or other appliances related to defensive cybersecurity operations.

Adversaries may gather this information in various ways, such as direct collection actions via [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Phishing for Information](https://attack.mitre.org/techniques/T1598).[^fn1] Information about network security appliances may also be exposed to adversaries via online or other accessible data sets (ex: [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594)). Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Network Information (T1590)|Gather Victim Network Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1590.006](https://attack.mitre.org/techniques/T1590/006)

[^fn1]: [Nmap. (n.d.). Chapter 10. Detecting and Subverting Firewalls and Intrusion Detection Systems. Retrieved October 20, 2020.](https://nmap.org/book/firewalls.html)