---
mitre_data:
  id: T1496.003
  linker_tags:
  - mitre/attack/linker/impact/sms_pumping
  name: SMS Pumping
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# SMS Pumping (`T1496.003`)

Adversaries may leverage messaging services for SMS pumping, which may impact system and/or hosted service availability.[^fn2] SMS pumping is a type of telecommunications fraud whereby a threat actor first obtains a set of phone numbers from a telecommunications provider, then leverages a victim’s messaging infrastructure to send large amounts of SMS messages to numbers in that set. By generating SMS traffic to their phone number set, a threat actor may earn payments from the telecommunications provider.[^fn3]

Threat actors often use publicly available web forms, such as one-time password (OTP) or account verification fields, in order to generate SMS traffic. These fields may leverage services such as Twilio, AWS SNS, and Amazon Cognito in the background.[^fn2][^fn1] In response to the large quantity of requests, SMS costs may increase and communication channels may become overwhelmed.[^fn2]


# Platform(s)

- SaaS

# Parent Technique(s)

- [[../Techniques/Resource Hijacking (T1496)|Resource Hijacking]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1496.003](https://attack.mitre.org/techniques/T1496/003)

[^fn1]: [Ben Fletcher and Steve de Vera. (2024, June). New tactics and techniques for proactive threat detection. Retrieved September 25, 2024.](https://reinforce.awsevents.com/content/dam/reinforce/2024/slides/TDR432_New-tactics-and-techniques-for-proactive-threat-detection.pdf)
[^fn2]: [Twilio. (2024, April 10). What Is SMS Pumping Fraud and How to Stop It. Retrieved September 25, 2024.](https://www.twilio.com/en-us/blog/sms-pumping-fraud-solutions)
[^fn3]: [Twilio. (n.d.). What is SMS Pumping Fraud?. Retrieved September 25, 2024.](https://www.twilio.com/docs/glossary/what-is-sms-pumping-fraud)