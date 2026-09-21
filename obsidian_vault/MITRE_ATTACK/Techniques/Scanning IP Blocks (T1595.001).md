---
mitre_data:
  id: T1595.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/scanning_ip_blocks
  name: Scanning IP Blocks
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Scanning IP Blocks (`T1595.001`)

Adversaries may scan victim IP blocks to gather information that can be used during targeting. Public IP addresses may be allocated to organizations by block, or a range of sequential addresses.

Adversaries may scan IP blocks in order to [Gather Victim Network Information](https://attack.mitre.org/techniques/T1590), such as which IP addresses are actively in use as well as more detailed information about hosts assigned these addresses. Scans may range from simple pings (ICMP requests and responses) to more nuanced scans that may reveal host software/versions via server banners or other network artifacts.[^fn1] Information from these scans may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Active Scanning (T1595)|Active Scanning]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1595.001](https://attack.mitre.org/techniques/T1595/001)

[^fn1]: [Dainotti, A. et al. (2012). Analysis of a “/0” Stealth Scan from a Botnet. Retrieved October 20, 2020.](https://www.caida.org/publications/papers/2012/analysis_slash_zero/analysis_slash_zero.pdf)