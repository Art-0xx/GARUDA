---
mitre_data:
  id: T1496.004
  linker_tags:
  - mitre/attack/linker/impact/cloud_service_hijacking
  name: Cloud Service Hijacking
  related_tactics:
  - impact
tags:
- mitre/attack/technique
---



# Cloud Service Hijacking (`T1496.004`)

Adversaries may leverage compromised software-as-a-service (SaaS) applications to complete resource-intensive tasks, which may impact hosted service availability. 

For example, adversaries may leverage email and messaging services, such as AWS Simple Email Service (SES), AWS Simple Notification Service (SNS), SendGrid, and Twilio, in order to send large quantities of spam / [Phishing](https://attack.mitre.org/techniques/T1566) emails and SMS messages.[^fn2][^fn5][^fn1] Alternatively, they may engage in LLMJacking by leveraging reverse proxies to hijack the power of cloud-hosted AI models.[^fn4][^fn3]

In some cases, adversaries may leverage services that the victim is already using. In others, particularly when the service is part of a larger cloud platform, they may first enable the service.[^fn4] Leveraging SaaS applications may cause the victim to incur significant financial costs, use up service quotas, and otherwise impact availability. 


# Platform(s)

- SaaS

# Parent Technique(s)

- [[../Techniques/Resource Hijacking (T1496)|Resource Hijacking]]

# Tactic(s)

- [[../Tactics/15. Impact|Impact]]


# External Reference(s)

- [T1496.004](https://attack.mitre.org/techniques/T1496/004)

[^fn1]: [Alex Delamotte. (2024, February 15). SNS Sender | Active Campaigns Unleash Messaging Spam Through the Cloud. Retrieved September 25, 2024.](https://www.sentinelone.com/labs/sns-sender-active-campaigns-unleash-messaging-spam-through-the-cloud/)
[^fn2]: [Invictus Incident Response. (2024, January 31). The curious case of DangerDev@protonmail.me. Retrieved March 19, 2024.](https://www.invictus-ir.com/news/the-curious-case-of-dangerdev-protonmail-me)
[^fn3]: [Lacework Labs. (2024, June 6). Detecting AI resource-hijacking with Composite Alerts. Retrieved September 25, 2024.](https://www.lacework.com/blog/detecting-ai-resource-hijacking-with-composite-alerts)
[^fn4]: [LLMjacking: Stolen Cloud Credentials Used in New AI Attack. (2024, May 6). Alessandro Brucato. Retrieved September 25, 2024.](https://sysdig.com/blog/llmjacking-stolen-cloud-credentials-used-in-new-ai-attack/)
[^fn5]: [Nathan Eades. (2023, January 12). SES-pionage. Retrieved September 25, 2024.](https://permiso.io/blog/s/aws-ses-pionage-detecting-ses-abuse/)