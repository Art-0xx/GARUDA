---
mitre_data:
  id: T1598.003
  linker_tags:
  - mitre/attack/linker/reconnaissance/spearphishing_link
  name: Spearphishing Link
  related_tactics:
  - reconnaissance
tags:
- mitre/attack/technique
---



# Spearphishing Link (`T1598.003`)

Adversaries may send spearphishing messages with a malicious link to elicit sensitive information that can be used during targeting. Spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. Spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: [Establish Accounts](https://attack.mitre.org/techniques/T1585) or [Compromise Accounts](https://attack.mitre.org/techniques/T1586)) and/or sending multiple, seemingly urgent messages.

All forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. In this scenario, the malicious emails contain links generally accompanied by social engineering text to coax the user to actively click or copy and paste a URL into a browser.[^fn2][^fn5] The given website may be a clone of a legitimate site (such as an online or corporate login portal) or may closely resemble a legitimate site in appearance and have a URL containing elements from the real site. URLs may also be obfuscated by taking advantage of quirks in the URL schema, such as the acceptance of integer- or hexadecimal-based hostname formats and the automatic discarding of text before an “@” symbol: for example, `hxxp://google.com@1157586937`.[^fn8]

Adversaries may also embed “tracking pixels,” "web bugs," or "web beacons" within phishing messages to verify the receipt of an email, while also potentially profiling and tracking victim information such as IP address.[^fn9][^fn11] These mechanisms often appear as small images (typically one pixel in size) or otherwise obfuscated objects and are typically delivered as HTML code containing a link to a remote server.[^fn11][^fn3]

Adversaries may also be able to spoof a complete website using what is known as a "browser-in-the-browser" (BitB) attack. By generating a fake browser popup window with an HTML-based address bar that appears to contain a legitimate URL (such as an authentication portal), they may be able to prompt users to enter their credentials while bypassing typical URL verification methods.[^fn13][^fn7]

Adversaries can use phishing kits such as `EvilProxy` and `Evilginx2` to perform adversary-in-the-middle phishing by proxying the connection between the victim and the legitimate website. On a successful login, the victim is redirected to the legitimate website, while the adversary captures their session cookie (i.e., [Steal Web Session Cookie](https://attack.mitre.org/techniques/T1539)) in addition to their username and password. This may enable the adversary to then bypass MFA via [Web Session Cookie](https://attack.mitre.org/techniques/T1550/004).[^fn10]

Adversaries may also send a malicious link in the form of Quick Response (QR) Codes (also known as “quishing”). These links may direct a victim to a credential phishing page.[^fn4] By using a QR code, the URL may not be exposed in the email and may thus go undetected by most automated email security scans.[^fn12] These QR codes may be scanned by or delivered directly  to a user’s mobile device (i.e., [Phishing](https://attack.mitre.org/techniques/T1660)), which may be less secure in several relevant ways.[^fn12] For example, mobile users may not be able to notice minor differences between genuine and credential harvesting websites due to mobile’s smaller form factor.

From the fake website, information is gathered in web forms and sent to the adversary. Adversaries may also use information from previous reconnaissance efforts (ex: [Search Open Websites/Domains](https://attack.mitre.org/techniques/T1593) or [Search Victim-Owned Websites](https://attack.mitre.org/techniques/T1594)) to craft persuasive and believable lures.


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Phishing for Information (T1598)|Phishing for Information]]

# Tool(s)

- [[../Tools/evilginx2|evilginx2]]
- [[../Tools/AADInternals|AADInternals]]

# Tactic(s)

- [[../Tactics/1. Reconnaissance|Reconnaissance]]


# External Reference(s)

- [T1598.003](https://attack.mitre.org/techniques/T1598/003)
- [Australian Cyber Security Centre. (2012, December). Mitigating Spoofed Emails Using Sender Policy Framework. Retrieved November 17, 2024.](https://web.archive.org/web/20210708014107/https://www.cyber.gov.au/sites/default/files/2019-03/spoof_email_sender_policy_framework.pdf)
- [Microsoft. (2020, October 13). Anti-spoofing protection in EOP. Retrieved October 19, 2020.](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/anti-spoofing-protection?view=o365-worldwide)

[^fn2]: [Babon, P. (2020, September 3). Tricky 'Forms' of Phishing. Retrieved October 20, 2020.](https://www.trendmicro.com/en_us/research/20/i/tricky-forms-of-phishing.html)
[^fn3]: [IAPP. (n.d.). Retrieved March 5, 2024.](https://iapp.org/resources/article/web-beacon/)
[^fn4]: [Jonathan Greig. (2023, August 16). Phishing campaign used QR codes to target large energy company. Retrieved November 27, 2023.](https://therecord.media/phishing-campaign-used-qr-codes-to-target-energy-firm)
[^fn5]: [Kan, M. (2019, October 24). Hackers Try to Phish United Nations Staffers With Fake Login Pages. Retrieved October 20, 2020.](https://www.pcmag.com/news/hackers-try-to-phish-united-nations-staffers-with-fake-login-pages)
[^fn7]: [mr.d0x. (2022, March 15). Browser In The Browser (BITB) Attack. Retrieved March 8, 2023.](https://mrd0x.com/browser-in-the-browser-phishing-attack/)
[^fn8]: [Nick Simonian. (2023, May 22). Don't @ Me: URL Obfuscation Through Schema Abuse. Retrieved August 4, 2023.](https://www.mandiant.com/resources/blog/url-obfuscation-schema-abuse)
[^fn9]: [NIST Information Technology Laboratory. (n.d.). web bug. Retrieved March 22, 2023.](https://csrc.nist.gov/glossary/term/web_bug)
[^fn10]: [Proofpoint. (n.d.). The Human Factor 2023: Analyzing the cyber attack chain. Retrieved July 20, 2023.](https://www.proofpoint.com/sites/default/files/threat-reports/pfpt-us-tr-human-factor-report.pdf)
[^fn11]: [Ryte Wiki. (n.d.). Retrieved November 17, 2024.](https://en.ryte.com/wiki/Tracking_Pixel/)
[^fn12]: [Tim Bedard and Tyler Johnson. (2023, October 4). QR Code Scams & Phishing. Retrieved November 27, 2023.](https://www.proofpoint.com/us/blog/email-and-cloud-threats/cybersecurity-stop-month-qr-code-phishing)
[^fn13]: [ZScaler. (2020, February 11). Fake Sites Stealing Steam Credentials. Retrieved March 8, 2023.](https://www.zscaler.com/blogs/security-research/fake-sites-stealing-steam-credentials)