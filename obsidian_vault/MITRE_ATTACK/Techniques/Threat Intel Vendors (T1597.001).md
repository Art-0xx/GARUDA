---
mitre_data:
  id: T1597.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/threat_intel_vendors
  name: Threat Intel Vendors
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Threat Intel Vendors (`T1597.001`)

Adversaries may search private data from threat intelligence vendors for information that can be used during targeting. Threat intelligence vendors may offer paid feeds or portals that offer more data than what is publicly reported. Although sensitive details (such as customer names and other identifiers) may be redacted, this information may contain trends regarding breaches such as target industries, attribution claims, and successful TTPs/countermeasures.[^fn1]

Adversaries may search in private threat intelligence vendor data to gather actionable information. If a threat actor is searching for information on their own activities, that falls under [Search Threat Vendor Data](https://attack.mitre.org/techniques/T1681). Information reported by vendors may also reveal opportunities other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [Exploit Public-Facing Application](https://attack.mitre.org/techniques/T1190) or [External Remote Services](https://attack.mitre.org/techniques/T1133)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Closed Sources (T1597)|Search Closed Sources]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1597.001](https://attack.mitre.org/techniques/T1597/001)

[^fn1]: [Banerd, W. (2019, April 30). 10 of the Best Open Source Threat Intelligence Feeds. Retrieved October 20, 2020.](https://d3security.com/blog/10-of-the-best-open-source-threat-intelligence-feeds/)