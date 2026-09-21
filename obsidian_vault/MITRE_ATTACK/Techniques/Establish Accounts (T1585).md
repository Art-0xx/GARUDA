---
mitre_data:
  id: T1585
  linker_tags:
  - mitre/attack/linker/resource_development/establish_accounts
  name: Establish Accounts
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Establish Accounts (`T1585`)

Adversaries may create and cultivate accounts with services that can be used during targeting. Adversaries can create accounts that can be used to build a persona to further operations. Persona development consists of the development of public information, presence, history and appropriate affiliations. This development could be applied to social media, website, or other publicly available information that could be referenced and scrutinized for legitimacy over the course of an operation using that persona or identity.[^fn2][^fn4]

For operations incorporating social engineering, the utilization of an online persona may be important. These personas may be fictitious or impersonate real people. The persona may exist on a single site or across multiple sites (ex: Facebook, LinkedIn, Twitter, Google, GitHub, Docker Hub, etc.). Establishing a persona may require development of additional documentation to make them seem real. This could include filling out profile information, developing social networks, or incorporating photos.[^fn2][^fn4]

Establishing accounts can also include the creation of accounts with email providers, which may be directly leveraged for [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Phishing](https://attack.mitre.org/techniques/T1566).[^fn3] In addition, establishing accounts may allow adversaries to abuse free services, such as registering for trial periods to [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) for malicious purposes.[^fn1]



# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Email Accounts (T1585.002)|Email Accounts]]
- [[../Techniques/Cloud Accounts (T1585.003)|Cloud Accounts]]
- [[../Techniques/Social Media Accounts (T1585.001)|Social Media Accounts]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1585](https://attack.mitre.org/techniques/T1585)

[^fn1]: [Gamazo, William. Quist, Nathaniel.. (2023, January 5). PurpleUrchin Bypasses CAPTCHA and Steals Cloud Platform Resources. Retrieved February 28, 2024.](https://unit42.paloaltonetworks.com/purpleurchin-steals-cloud-resources/)
[^fn2]: [Lennon, M. (2014, May 29). Iranian Hackers Targeted US Officials in Elaborate Social Media Attack Operation. Retrieved March 1, 2017.](https://www.securityweek.com/iranian-hackers-targeted-us-officials-elaborate-social-media-attack-operation)
[^fn3]: [Mandiant. (n.d.). APT1 Exposing One of China’s Cyber Espionage Units. Retrieved July 18, 2016.](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf)
[^fn4]: [Ryan, T. (2010). “Getting In Bed with Robin Sage.”. Retrieved March 6, 2017.](http://media.blackhat.com/bh-us-10/whitepapers/Ryan/BlackHat-USA-2010-Ryan-Getting-In-Bed-With-Robin-Sage-v1.0.pdf)