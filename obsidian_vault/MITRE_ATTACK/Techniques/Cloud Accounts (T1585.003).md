---
mitre_data:
  id: T1585.003
  linker_tags:
  - mitre/attack/linker/resource_development/cloud_accounts
  name: Cloud Accounts
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Cloud Accounts (`T1585.003`)

Adversaries may create accounts with cloud providers that can be used during targeting. Adversaries can use cloud accounts to further their operations, including leveraging cloud storage services such as Dropbox, MEGA, Microsoft OneDrive, or AWS S3 buckets for [Exfiltration to Cloud Storage](https://attack.mitre.org/techniques/T1567/002) or to [Upload Tool](https://attack.mitre.org/techniques/T1608/002)s. Cloud accounts can also be used in the acquisition of infrastructure, such as [Virtual Private Server](https://attack.mitre.org/techniques/T1583/003)s or [Serverless](https://attack.mitre.org/techniques/T1583/007) infrastructure. Establishing cloud accounts may allow adversaries to develop sophisticated capabilities without managing their own servers.[^fn1]

Creating [Cloud Accounts](https://attack.mitre.org/techniques/T1585/003) may also require adversaries to establish [Email Accounts](https://attack.mitre.org/techniques/T1585/002) to register with the cloud provider. 


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Establish Accounts (T1585)|Establish Accounts]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1585.003](https://attack.mitre.org/techniques/T1585/003)

[^fn1]: [Gary Golomb and Tory Kei. (n.d.). Threat Hunting Series: Detecting Command & Control in the Cloud. Retrieved May 27, 2022.](https://awakesecurity.com/blog/threat-hunting-series-detecting-command-control-in-the-cloud/)