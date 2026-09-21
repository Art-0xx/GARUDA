---
mitre_data:
  id: T1593
  linker_tags:
  - mitre/attack/linker/reconnaissance/search_open_websites_domains
  name: Search Open Websites/Domains
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Search Open Websites/Domains (`T1593`)

Adversaries may search freely available websites and/or domains for information about victims that can be used during targeting. Information about victims may be available in various online sites, such as social media, new sites, or those hosting information about business operations such as hiring or requested/rewarded contracts.[^fn2][^fn1][^fn3]

Adversaries may search in different online sites depending on what information they seek to gather. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [External Remote Services](https://attack.mitre.org/techniques/T1133) or [Phishing](https://attack.mitre.org/techniques/T1566)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Search Engines (T1593.002)|Search Engines]]
- [[../Techniques/Code Repositories (T1593.003)|Code Repositories]]
- [[../Techniques/Social Media (T1593.001)|Social Media]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1593](https://attack.mitre.org/techniques/T1593)

[^fn1]: [Borges, E. (2019, March 5). Exploring Google Hacking Techniques. Retrieved September 12, 2024.](https://www.recordedfuture.com/threat-intelligence-101/threat-analysis-techniques/google-dorks)
[^fn2]: [Cyware Hacker News. (2019, October 2). How Hackers Exploit Social Media To Break Into Your Company. Retrieved October 20, 2020.](https://cyware.com/news/how-hackers-exploit-social-media-to-break-into-your-company-88e8da8e)
[^fn3]: [Offensive Security. (n.d.). Google Hacking Database. Retrieved October 23, 2020.](https://www.exploit-db.com/google-hacking-database)