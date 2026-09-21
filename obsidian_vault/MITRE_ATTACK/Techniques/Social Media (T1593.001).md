---
mitre_data:
  id: T1593.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/social_media
  name: Social Media
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Social Media (`T1593.001`)

Adversaries may search social media for information about victims that can be used during targeting. Social media sites may contain various information about a victim organization, such as business announcements as well as information about the roles, locations, and interests of staff.

Adversaries may search in different social media sites depending on what information they seek to gather. Threat actors may passively harvest data from these sites, as well as use information gathered to create fake profiles/groups to elicit victim’s into revealing specific information (i.e. [Spearphishing Service](https://attack.mitre.org/techniques/T1598/001)).[^fn1] Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [Spearphishing via Service](https://attack.mitre.org/techniques/T1566/003)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Open Websites_Domains (T1593)|Search Open Websites/Domains]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1593.001](https://attack.mitre.org/techniques/T1593/001)

[^fn1]: [Cyware Hacker News. (2019, October 2). How Hackers Exploit Social Media To Break Into Your Company. Retrieved October 20, 2020.](https://cyware.com/news/how-hackers-exploit-social-media-to-break-into-your-company-88e8da8e)