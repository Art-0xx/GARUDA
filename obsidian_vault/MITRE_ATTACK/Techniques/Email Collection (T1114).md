---
mitre_data:
  id: T1114
  linker_tags:
  - mitre/attack/linker/collection/email_collection
  name: Email Collection
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Email Collection (`T1114`)

Adversaries may target user email to collect sensitive information. Emails may contain sensitive data, including trade secrets or personal information, that can prove valuable to adversaries. Emails may also contain details of ongoing incident response operations, which may allow adversaries to adjust their techniques in order to maintain persistence or evade defenses.[^fn3][^fn1] Adversaries can collect or forward email from mail servers or clients. 


# Platform(s)

- Windows
- macOS
- Linux
- Office Suite

# Sub-Technique(s)

- [[../Techniques/Local Email Collection (T1114.001)|Local Email Collection]]
- [[../Techniques/Email Forwarding Rule (T1114.003)|Email Forwarding Rule]]
- [[../Techniques/Remote Email Collection (T1114.002)|Remote Email Collection]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1114](https://attack.mitre.org/techniques/T1114)
- [McMichael, T.. (2015, June 8). Exchange and Office 365 Mail Forwarding. Retrieved October 8, 2019.](https://blogs.technet.microsoft.com/timmcmic/2015/06/08/exchange-and-office-365-mail-forwarding-2/)

[^fn1]: [CISA. (2021, April 15). Advanced Persistent Threat Compromise of Government Agencies, Critical Infrastructure, and Private Sector Organizations. Retrieved August 30, 2024.](https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a)
[^fn3]: [Tyler Hudak. (2022, December 29). To OOB, or Not to OOB?: Why Out-of-Band Communications are Essential for Incident Response. Retrieved August 30, 2024.](https://trustedsec.com/blog/to-oob-or-not-to-oob-why-out-of-band-communications-are-essential-for-incident-response)