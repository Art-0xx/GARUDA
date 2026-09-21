---
mitre_data:
  id: T1596.005
  linker_tags:
  - mitre/attack/linker/reconnaissance/scan_databases
  name: Scan Databases
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Scan Databases (`T1596.005`)

Adversaries may search within public scan databases for information about victims that can be used during targeting. Various online services continuously publish the results of Internet scans/surveys, often harvesting information such as active IP addresses, hostnames, open ports, certificates, and even server banners.[^fn1]

Adversaries may search scan databases to gather actionable information. Threat actors can use online resources and lookup tools to harvest information from these services. Adversaries may seek information about their already identified targets, or use these datasets to discover opportunities for successful breaches. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Exploit Public-Facing Application](https://attack.mitre.org/techniques/T1190)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Open Technical Databases (T1596)|Search Open Technical Databases]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1596.005](https://attack.mitre.org/techniques/T1596/005)

[^fn1]: [Shodan. (n.d.). Shodan. Retrieved October 20, 2020.](https://shodan.io)