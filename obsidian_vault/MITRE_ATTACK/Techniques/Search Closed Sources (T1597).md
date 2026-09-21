---
mitre_data:
  id: T1597
  linker_tags:
  - mitre/attack/linker/reconnaissance/search_closed_sources
  name: Search Closed Sources
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Search Closed Sources (`T1597`)

Adversaries may search and gather information about victims from closed (e.g., paid, private, or otherwise not freely available) sources that can be used during targeting. Information about victims may be available for purchase from reputable private sources and databases, such as paid subscriptions to feeds of technical/threat intelligence data. Adversaries may also purchase information from less-reputable sources such as dark web or cybercrime blackmarkets.[^fn1]

Adversaries may search in different closed databases depending on what information they seek to gather. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Valid Accounts](https://attack.mitre.org/techniques/T1078)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Purchase Technical Data (T1597.002)|Purchase Technical Data]]
- [[../Techniques/Threat Intel Vendors (T1597.001)|Threat Intel Vendors]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1597](https://attack.mitre.org/techniques/T1597)

[^fn1]: [Cimpanu, C. (2020, May 9). A hacker group is selling more than 73 million user records on the dark web. Retrieved October 20, 2020.](https://www.zdnet.com/article/a-hacker-group-is-selling-more-than-73-million-user-records-on-the-dark-web/)