---
mitre_data:
  id: T1114.002
  linker_tags:
  - mitre/attack/linker/collection/remote_email_collection
  name: Remote Email Collection
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Remote Email Collection (`T1114.002`)

Adversaries may target an Exchange server, Office 365, or Google Workspace to collect sensitive information. Adversaries may leverage a user's credentials and interact directly with the Exchange server to acquire information from within a network. Adversaries may also access externally facing Exchange services, Office 365, or Google Workspace to access email using credentials or access tokens. Tools such as [MailSniper](https://attack.mitre.org/software/S0413) can be used to automate searches for specific keywords.


# Platform(s)

- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Email Collection (T1114)|Email Collection]]

# Tool(s)

- [[../Tools/MailSniper|MailSniper]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1114.002](https://attack.mitre.org/techniques/T1114/002)
