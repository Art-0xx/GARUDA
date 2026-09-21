---
mitre_data:
  id: T1585.002
  linker_tags:
  - mitre/attack/linker/resource_development/email_accounts
  name: Email Accounts
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Email Accounts (`T1585.002`)

Adversaries may create email accounts that can be used during targeting. Adversaries can use accounts created with email providers to further their operations, such as leveraging them to conduct [Phishing for Information](https://attack.mitre.org/techniques/T1598) or [Phishing](https://attack.mitre.org/techniques/T1566).[^fn3] Establishing email accounts may also allow adversaries to abuse free services – such as trial periods – to [Acquire Infrastructure](https://attack.mitre.org/techniques/T1583) for follow-on purposes.[^fn2]

Adversaries may also take steps to cultivate a persona around the email account, such as through use of [Social Media Accounts](https://attack.mitre.org/techniques/T1585/001), to increase the chance of success of follow-on behaviors. Created email accounts can also be used in the acquisition of infrastructure (ex: [Domains](https://attack.mitre.org/techniques/T1583/001)).[^fn3]

To decrease the chance of physically tying back operations to themselves, adversaries may make use of disposable email services.[^fn1] 


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Establish Accounts (T1585)|Establish Accounts]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1585.002](https://attack.mitre.org/techniques/T1585/002)

[^fn1]: [Antazo, F. and Yambao, M. (2016, August 10). R980 Ransomware Found Abusing Disposable Email Address Service. Retrieved October 13, 2020.](https://blog.trendmicro.com/trendlabs-security-intelligence/r980-ransomware-disposable-email-service/)
[^fn2]: [Gamazo, William. Quist, Nathaniel.. (2023, January 5). PurpleUrchin Bypasses CAPTCHA and Steals Cloud Platform Resources. Retrieved February 28, 2024.](https://unit42.paloaltonetworks.com/purpleurchin-steals-cloud-resources/)
[^fn3]: [Mandiant. (n.d.). APT1 Exposing One of China’s Cyber Espionage Units. Retrieved July 18, 2016.](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf)