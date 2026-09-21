---
mitre_data:
  id: T1593.002
  linker_tags:
  - mitre/attack/linker/reconnaissance/search_engines
  name: Search Engines
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Search Engines (`T1593.002`)

Adversaries may use search engines to collect information about victims that can be used during targeting. Search engine services typical crawl online sites to index context and may provide users with specialized syntax to search for specific keywords or specific types of content (i.e. filetypes).[^fn1][^fn2]

Adversaries may craft various search engine queries depending on what information they seek to gather. Threat actors may use search engines to harvest general information about victims, as well as use specialized queries to look for spillages/leaks of sensitive information such as network details or credentials. Information from these sources may reveal opportunities for other forms of reconnaissance (ex: [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596)), establishing operational resources (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)), and/or initial access (ex: [Valid Accounts](https://attack.mitre.org/techniques/T1078) or [Phishing](https://attack.mitre.org/techniques/T1566)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Search Open Websites_Domains (T1593)|Search Open Websites/Domains]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1593.002](https://attack.mitre.org/techniques/T1593/002)

[^fn1]: [Borges, E. (2019, March 5). Exploring Google Hacking Techniques. Retrieved September 12, 2024.](https://www.recordedfuture.com/threat-intelligence-101/threat-analysis-techniques/google-dorks)
[^fn2]: [Offensive Security. (n.d.). Google Hacking Database. Retrieved October 23, 2020.](https://www.exploit-db.com/google-hacking-database)