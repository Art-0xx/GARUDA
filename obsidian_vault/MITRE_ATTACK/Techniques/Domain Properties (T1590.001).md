---
mitre_data:
  id: T1590.001
  linker_tags:
  - mitre/attack/linker/reconnaissance/domain_properties
  name: Domain Properties
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Domain Properties (`T1590.001`)

Adversaries may gather information about the victim's network domain(s) that can be used during targeting. Information about domains and their properties may include a variety of details, including what domain(s) the victim owns as well as administrative data (ex: name, registrar, etc.) and more directly actionable information such as contacts (email addresses and phone numbers), business addresses, and name servers.

Adversaries may gather this information in various ways, such as direct collection actions via [Active Scanning](https://attack.mitre.org/techniques/T1595) or [Phishing for Information](https://attack.mitre.org/techniques/T1598). Information about victim domains and their properties may also be exposed to adversaries via online or other accessible data sets (ex: [WHOIS](https://attack.mitre.org/techniques/T1596/002)).[^fn5][^fn3][^fn1] Where third-party cloud providers are in use, this information may also be exposed through publicly available API endpoints, such as GetUserRealm and autodiscover in Office 365 environments.[^fn2][^fn4] Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Technical Databases](https://attack.mitre.org/techniques/T1596), [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593), or [Phishing for Information](https://attack.mitre.org/techniques/T1598)), establishing operational resources (ex: [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) or [Compromise Infrastructure](https://attack.mitre.org/techniques/T1584)), and/or initial access (ex: [Phishing](https://attack.mitre.org/techniques/T1566)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Network Information (T1590)|Gather Victim Network Information]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1590.001](https://attack.mitre.org/techniques/T1590/001)

[^fn1]: [CIRCL Computer Incident Response Center. (n.d.). Passive DNS. Retrieved October 20, 2020.](https://www.circl.lu/services/passive-dns/)
[^fn2]: [Dr. Nestori Syynimaa. (2020, June 13). Just looking: Azure Active Directory reconnaissance as an outsider. Retrieved May 27, 2022.](https://o365blog.com/post/just-looking/)
[^fn3]: [Hacker Target. (n.d.). DNS Dumpster. Retrieved October 20, 2020.](https://dnsdumpster.com/)
[^fn4]: [Microsoft. (2017, January 23). (Cloud) Tip of the Day: Advanced way to check domain availability for Office 365 and Azure. Retrieved May 27, 2022.](https://docs.microsoft.com/en-us/archive/blogs/tip_of_the_day/cloud-tip-of-the-day-advanced-way-to-check-domain-availability-for-office-365-and-azure)
[^fn5]: [NTT America. (n.d.). Whois Lookup. Retrieved November 17, 2024.](https://who.is/)