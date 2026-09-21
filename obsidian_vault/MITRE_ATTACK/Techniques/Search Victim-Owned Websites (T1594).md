---
mitre_data:
  id: T1594
  linker_tags:
  - mitre/attack/linker/reconnaissance/search_victim-owned_websites
  name: Search Victim-Owned Websites
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Search Victim-Owned Websites (`T1594`)

Adversaries may search websites owned by the victim for information that can be used during targeting. Victim-owned websites may contain a variety of details, including names of departments/divisions, physical locations, and data about key employees such as names, roles, and contact info (ex: [Email Addresses](https://attack.mitre.org/techniques/T1589/002)). These sites may also have details highlighting business operations and relationships.[^fn2]

Adversaries may search victim-owned websites to gather actionable information. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [Trusted Relationship](https://attack.mitre.org/techniques/T1199) or [Phishing](https://attack.mitre.org/techniques/T1566)).

In addition to manually browsing the website, adversaries may attempt to identify hidden directories or files that could contain additional sensitive information or vulnerable functionality. They may do this through automated activities such as [Wordlist Scanning](https://attack.mitre.org/techniques/T1595/003), as well as by leveraging files such as sitemap.xml and robots.txt.[^fn1][^fn3] 


# Platform(s)

- PRE

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1594](https://attack.mitre.org/techniques/T1594)

[^fn1]: [Adi Perez. (2023, February 22). How Attackers Can Misuse Sitemaps to Enumerate Users and Discover Sensitive Information. Retrieved July 18, 2024.](https://medium.com/@adimenia/how-attackers-can-misuse-sitemaps-to-enumerate-users-and-discover-sensitive-information-361a5065857a)
[^fn2]: [Bischoff, P. (2020, October 15). Broadvoice database of more than 350 million customer records exposed online. Retrieved October 20, 2020.](https://www.comparitech.com/blog/vpn-privacy/350-million-customer-records-exposed-online/)
[^fn3]: [Darren Pauli. (2015, May 19). Robots.txt tells hackers the places you don't want them to look. Retrieved July 18, 2024.](https://www.theregister.com/2015/05/19/robotstxt/)