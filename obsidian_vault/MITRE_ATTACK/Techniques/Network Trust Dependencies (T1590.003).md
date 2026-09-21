---
mitre_data:
  id: T1590.003
  linker_tags:
  - mitre/attack/linker/reconnaissance/network_trust_dependencies
  name: Network Trust Dependencies
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Network Trust Dependencies (`T1590.003`)

Adversaries may gather information about the victim's network trust dependencies that can be used during targeting. Information about network trusts may include a variety of details, including second or third-party organizations/domains (ex: managed service providers, contractors, etc.) that have connected (and potentially elevated) network access.

Adversaries may gather this information in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about network trusts may also be exposed to adversaries via online or other accessible data sets (ex: [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)).[^fn1] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) or [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)), and/or initial access (ex: [Trusted Relationship](https://attack.mitre.org/techniques/T1199)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Network Information (T1590)|Gather Victim Network Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1590.003](https://attack.mitre.org/techniques/T1590/003)

[^fn1]: [García, C. (2019, April 3). Pentesting Active Directory Forests. Retrieved October 20, 2020.](https://www.slideshare.net/rootedcon/carlos-garca-pentesting-active-directory-forests-rooted2019)