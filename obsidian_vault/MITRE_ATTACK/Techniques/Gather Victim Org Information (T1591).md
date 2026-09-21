---
mitre_data:
  id: T1591
  linker_tags:
  - mitre/attack/linker/reconnaissance/gather_victim_org_information
  name: Gather Victim Org Information
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Gather Victim Org Information (`T1591`)

Adversaries may gather information about the victim's organization that can be used during targeting. Information about an organization may include a variety of details, including the names of divisions/departments, specifics of business operations, as well as the roles and responsibilities of key employees.

Adversaries may gather this information in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about an organization may also be exposed to adversaries via online or other accessible data sets (ex: [Social Media](https://attack.mitre.org/techniques/T1593/001) or [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594)).[^fn1][^fn2] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [Phishing](https://attack.mitre.org/techniques/T1566) or [Trusted Relationship](https://attack.mitre.org/techniques/T1199)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Identify Business Tempo (T1591.003)|Identify Business Tempo]]
- [[../Techniques/Business Relationships (T1591.002)|Business Relationships]]
- [[../Techniques/Identify Roles (T1591.004)|Identify Roles]]
- [[../Techniques/Determine Physical Locations (T1591.001)|Determine Physical Locations]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1591](https://attack.mitre.org/techniques/T1591)

[^fn1]: [Seals, T. (2020, October 15). Broadvoice Leak Exposes 350M Records, Personal Voicemail Transcripts. Retrieved October 20, 2020.](https://threatpost.com/broadvoice-leaks-350m-records-voicemail-transcripts/160158/)
[^fn2]: [U.S. SEC. (n.d.). EDGAR - Search and Access. Retrieved November 17, 2024.](https://www.sec.gov/edgar/search/)