---
mitre_data:
  id: T1589.002
  linker_tags:
  - mitre/attack/linker/reconnaissance/email_addresses
  name: Email Addresses
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Email Addresses (`T1589.002`)

Adversaries may gather email addresses that can be used during targeting. Even if internal instances exist, organizations may have public-facing email infrastructure and addresses for employees.

Adversaries may easily gather email addresses, since they may be readily available and exposed via online or other accessible data sets (ex: [Social Media](https://attack.mitre.org/techniques/T1593/001) or [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594)).[^fn4][^fn5] Email addresses could also be enumerated via more active means (i.e. [Active Scanning](https://attack.mitre.org/techniques/T1595)), such as probing and analyzing responses from authentication services that may reveal valid usernames in a system.[^fn3] For example, adversaries may be able to enumerate email addresses in Office 365 environments by querying a variety of publicly available API endpoints, such as autodiscover and GetCredentialType.[^fn2][^fn1]

Gathering this information may reveal opportunities for other forms of reconnaissance (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Phishing for Information](https://attack.mitre.org/techniques/T1598)), establishing operational resources (ex: [Email Accounts](https://attack.mitre.org/techniques/T1586/002)), and/or initial access (ex: [Phishing](https://attack.mitre.org/techniques/T1566) or [Brute Force](https://attack.mitre.org/techniques/T1110) via [External Remote Services](https://attack.mitre.org/techniques/T1133)).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Gather Victim Identity Information (T1589)|Gather Victim Identity Information]]

# Tool(s)

- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1589.002](https://attack.mitre.org/techniques/T1589/002)

[^fn1]: [Dr. Nestori Syynimaa. (2020, June 13). Just looking: Azure Active Directory reconnaissance as an outsider. Retrieved May 27, 2022.](https://o365blog.com/post/just-looking/)
[^fn2]: [gremwell. (2020, March 24). Office 365 User Enumeration. Retrieved May 27, 2022.](https://github.com/gremwell/o365enum)
[^fn3]: [GrimHacker. (2017, July 24). Office365 ActiveSync Username Enumeration. Retrieved December 9, 2021.](https://grimhacker.com/2017/07/24/office365-activesync-username-enumeration/)
[^fn4]: [Hackers Arise. (n.d.). Email Scraping and Maltego. Retrieved October 20, 2020.](https://www.hackers-arise.com/email-scraping-and-maltego)
[^fn5]: [Ng, A. (2019, January 17). Massive breach leaks 773 million email addresses, 21 million passwords. Retrieved October 20, 2020.](https://www.cnet.com/news/massive-breach-leaks-773-million-emails-21-million-passwords/)