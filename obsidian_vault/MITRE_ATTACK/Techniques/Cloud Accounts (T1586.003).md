---
mitre_data:
  id: T1586.003
  linker_tags:
  - mitre/attack/linker/resource_development/cloud_accounts
  name: Cloud Accounts
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Cloud Accounts (`T1586.003`)

Adversaries may compromise cloud accounts that can be used during targeting. Adversaries can use compromised cloud accounts to further their operations, including leveraging cloud storage services such as Dropbox, Microsoft OneDrive, or AWS S3 buckets for [Exfiltration to Cloud Storage](https://attack.mitre.org/techniques/T1567/002) or to [Upload Tool](https://attack.mitre.org/techniques/T1608/002)s. Cloud accounts can also be used in the acquisition of infrastructure, such as [Virtual Private Server](https://attack.mitre.org/techniques/T1583/003)s or [Serverless](https://attack.mitre.org/techniques/T1583/007) infrastructure. Additionally, cloud-based messaging services such as Twilio, SendGrid, AWS End User Messaging, AWS SNS (Simple Notification Service), or AWS SES (Simple Email Service) may be leveraged for spam or [Phishing](https://attack.mitre.org/techniques/T1566).[^fn1][^fn3] Compromising cloud accounts may allow adversaries to develop sophisticated capabilities without managing their own servers.[^fn2]

A variety of methods exist for compromising cloud accounts, such as gathering credentials via [Phishing for Information](https://attack.mitre.org/techniques/T1598), purchasing credentials from third-party sites, conducting [Password Spraying](https://attack.mitre.org/techniques/T1110/003) attacks, or attempting to [Steal Application Access Token](https://attack.mitre.org/techniques/T1528)s.[^fn4] Prior to compromising cloud accounts, adversaries may conduct Reconnaissance to inform decisions about which accounts to compromise to further their operation. In some cases, adversaries may target privileged service provider accounts with the intent of leveraging a [Trusted Relationship](https://attack.mitre.org/techniques/T1199) between service providers and their customers.[^fn4]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Compromise Accounts (T1586)|Compromise Accounts]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1586.003](https://attack.mitre.org/techniques/T1586/003)

[^fn1]: [Dror Alon. (2022, December 8). Compromised Cloud Compute Credentials: Case Studies From the Wild. Retrieved March 9, 2023.](https://unit42.paloaltonetworks.com/compromised-cloud-compute-credentials/)
[^fn2]: [Gary Golomb and Tory Kei. (n.d.). Threat Hunting Series: Detecting Command & Control in the Cloud. Retrieved May 27, 2022.](https://awakesecurity.com/blog/threat-hunting-series-detecting-command-control-in-the-cloud/)
[^fn3]: [Graham Edgecombe. (2024, February 7). Phishception – SendGrid is abused to host phishing attacks impersonating itself. Retrieved October 15, 2024.](https://www.netcraft.com/blog/popular-email-platform-used-to-impersonate-itself/)
[^fn4]: [Microsoft Threat Intelligence Center. (2021, October 25). NOBELIUM targeting delegated administrative privileges to facilitate broader attacks. Retrieved March 25, 2022.](https://www.microsoft.com/security/blog/2021/10/25/nobelium-targeting-delegated-administrative-privileges-to-facilitate-broader-attacks/)