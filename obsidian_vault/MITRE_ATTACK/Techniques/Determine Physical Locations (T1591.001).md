---
mitre_data:
  id: T1591.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/determine_physical_locations
  name: Determine Physical Locations
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Determine Physical Locations (`T1591.001`)

Adversaries may gather the victim's physical location(s) that can be used during targeting. Information about physical locations of a target organization may include a variety of details, including where key resources and infrastructure are housed. Physical locations may also indicate what legal jurisdiction and/or authorities the victim operates within.

Adversaries may gather this information in various ways, such as direct elicitation via [Phishing for Information](https://attack.mitre.org/techniques/T1598). Physical locations of a target organization may also be exposed to adversaries via online or other accessible data sets (ex: [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594) or [Social Media](https://attack.mitre.org/techniques/T1593/001)).[^fn1][^fn2] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593)), establishing operational resources (ex: [Develop Capabilities](https://attack.mitre.org/techniques/T1587) or [Obtain Capabilities](https://attack.mitre.org/techniques/T1588)), and/or initial access (ex: [Phishing](https://attack.mitre.org/techniques/T1566) or [Hardware Additions](https://attack.mitre.org/techniques/T1200)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Org Information (T1591)|Gather Victim Org Information]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1591.001](https://attack.mitre.org/techniques/T1591/001)

[^fn1]: [Seals, T. (2020, October 15). Broadvoice Leak Exposes 350M Records, Personal Voicemail Transcripts. Retrieved October 20, 2020.](https://threatpost.com/broadvoice-leaks-350m-records-voicemail-transcripts/160158/)
[^fn2]: [U.S. SEC. (n.d.). EDGAR - Search and Access. Retrieved November 17, 2024.](https://www.sec.gov/edgar/search/)