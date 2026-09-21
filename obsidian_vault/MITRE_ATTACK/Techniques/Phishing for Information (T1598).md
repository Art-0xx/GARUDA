---
mitre_data:
  id: T1598
  linker_tags:
  - mitre/attack/linker/reconnaissance/phishing_for_information
  name: Phishing for Information
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Phishing for Information (`T1598`)

Adversaries may send phishing messages to elicit sensitive information that can be used during targeting. Phishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. Phishing for information is different from [Phishing](https://attack.mitre.org/techniques/T1566) in that the objective is gathering data from the victim rather than executing malicious code.

All forms of phishing are electronically delivered social engineering. Phishing can be targeted, known as spearphishing. In spearphishing, a specific individual, company, or industry will be targeted by the adversary. More generally, adversaries can conduct non-targeted phishing, such as in mass credential harvesting campaigns.

Adversaries may also try to obtain information directly through the exchange of emails, instant messages, or other electronic conversation means.[^fn7][^fn2][^fn5][^fn3][^fn9] Victims may also receive phishing messages that direct them to call a phone number where the adversary attempts to collect confidential information.[^fn1]

Phishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)) and/or sending multiple, seemingly urgent messages. Another way to accomplish this is by [Email Spoofing](https://attack.mitre.org/techniques/T1684/002)[^fn8] the identity of the sender, which can be used to fool both the human recipient as well as automated security tools.[^fn4] 

Phishing for information may also involve evasive techniques, such as removing or manipulating emails or metadata/headers from compromised accounts being abused to send messages (e.g., [Email Hiding Rules](https://attack.mitre.org/techniques/T1564/008)).[^fn6][^fn10]


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Spearphishing Link (T1598.003)|Spearphishing Link]]
- [[../Techniques/Spearphishing Voice (T1598.004)|Spearphishing Voice]]
- [[../Techniques/Spearphishing Attachment (T1598.002)|Spearphishing Attachment]]
- [[../Techniques/Spearphishing Service (T1598.001)|Spearphishing Service]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1598](https://attack.mitre.org/techniques/T1598)

[^fn1]: [Avertium. (n.d.). EVERYTHING YOU NEED TO KNOW ABOUT CALLBACK PHISHING. Retrieved February 2, 2023.](https://www.avertium.com/resources/threat-reports/everything-you-need-to-know-about-callback-phishing)
[^fn2]: [Babon, P. (2020, September 3). Tricky 'Forms' of Phishing. Retrieved October 20, 2020.](https://www.trendmicro.com/en_us/research/20/i/tricky-forms-of-phishing.html)
[^fn3]: [Ducklin, P. (2020, October 2). Serious Security: Phishing without links – when phishers bring along their own web pages. Retrieved October 20, 2020.](https://nakedsecurity.sophos.com/2020/10/02/serious-security-phishing-without-links-when-phishers-bring-along-their-own-web-pages/)
[^fn4]: [Itkin, Liora. (2022, September 1). Double-bounced attacks with email spoofing . Retrieved February 24, 2023.](https://blog.cyberproof.com/blog/double-bounced-attacks-with-email-spoofing-2022-trends)
[^fn5]: [Kan, M. (2019, October 24). Hackers Try to Phish United Nations Staffers With Fake Login Pages. Retrieved October 20, 2020.](https://www.pcmag.com/news/hackers-try-to-phish-united-nations-staffers-with-fake-login-pages)
[^fn6]: [Microsoft. (2023, September 22). Malicious OAuth applications abuse cloud email services to spread spam. Retrieved March 13, 2023.](https://www.microsoft.com/en-us/security/blog/2022/09/22/malicious-oauth-applications-used-to-compromise-email-servers-and-spread-spam/)
[^fn7]: [O'Donnell, L. (2020, October 20). Facebook: A Top Launching Pad For Phishing Attacks. Retrieved October 20, 2020.](https://threatpost.com/facebook-launching-pad-phishing-attacks/160351/)
[^fn8]: [Proofpoint. (n.d.). What Is Email Spoofing?. Retrieved February 24, 2023.](https://www.proofpoint.com/us/threat-reference/email-spoofing)
[^fn9]: [Ryan Hanson. (2016, September 24). phishery. Retrieved October 23, 2020.](https://github.com/ryhanson/phishery)
[^fn10]: [Vicky Ray and Rob Downs. (2014, October 29). Examining a VBA-Initiated Infostealer Campaign. Retrieved March 13, 2023.](https://unit42.paloaltonetworks.com/examining-vba-initiated-infostealer-campaign/)