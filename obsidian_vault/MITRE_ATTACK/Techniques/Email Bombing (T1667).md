---
mitre_data:
  id: T1667
  linker_tags:
  - mitre/attack/linker/impact/email_bombing
  name: Email Bombing
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Email Bombing (`T1667`)

Adversaries may flood targeted email addresses with an overwhelming volume of messages. This may bury legitimate emails in a flood of spam and disrupt business operations.[^fn2][^fn1]

An adversary may accomplish email bombing by leveraging an automated bot to register a targeted address for e-mail lists that do not validate new signups, such as online newsletters. The result can be a wave of thousands of e-mails that effectively overloads the victim’s inbox.[^fn1][^fn4]

By sending hundreds or thousands of e-mails in quick succession, adversaries may successfully divert attention away from and bury legitimate messages including security alerts, daily business processes like help desk tickets and client correspondence, or ongoing scams.[^fn4] This behavior can also be used as a tool of harassment.[^fn1]

This behavior may be a precursor for [Spearphishing Voice](https://attack.mitre.org/techniques/T1566/004). For example, an adversary may email bomb a target and then follow up with a phone call to fraudulently offer assistance. This social engineering may lead to the use of [Remote Access Software](https://attack.mitre.org/techniques/T1663) to steal credentials, deploy ransomware, conduct [Financial Theft](https://attack.mitre.org/techniques/T1657)[^fn2], or engage in other malicious activity.[^fn3]



# Platform(s)

- Linux
- Office Suite
- Windows
- macOS

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1667](https://attack.mitre.org/techniques/T1667)

[^fn1]: [Brian Krebs. (2016, August 18). Massive Email Bombs Target .Gov Addresses. Retrieved January 31, 2025.](https://krebsonsecurity.com/2016/08/massive-email-bombs-target-gov-addresses/)
[^fn2]: [Mark Parsons, Colin Cowie, Daniel Souter, Hunter Neal, Anthony Bradshaw, Sean Gallagher. (2025, January 21). Sophos MDR tracks two ransomware campaigns using “email bombing,” Microsoft Teams “vishing”. Retrieved January 31, 2025.](https://news.sophos.com/en-us/2025/01/21/sophos-mdr-tracks-two-ransomware-campaigns-using-email-bombing-microsoft-teams-vishing/)
[^fn3]: [Tyler McGraw, Thomas Elkins, and Evan McCann. (2024, May 10). Ongoing Social Engineering Campaign Linked to Black Basta Ransomware Operators. Retrieved January 31, 2025.](https://www.rapid7.com/blog/post/2024/05/10/ongoing-social-engineering-campaign-linked-to-black-basta-ransomware-operators)
[^fn4]: [U.S. Department of Health and Human Services. (2024, March 12). Defense and Mitigations from E-mail Bombing. Retrieved January 31, 2025.](https://www.hhs.gov/sites/default/files/email-bombing-sector-alert-tlpclear.pdf)