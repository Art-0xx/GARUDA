---
mitre_data:
  id: T1552.008
  linker_tags:
  - mitre/attack/linker/credential_access/chat_messages
  name: Chat Messages
  related_tactics:
  - credential_access
tags:
- mitre/attack/technique
---



# Chat Messages (`T1552.008`)

Adversaries may directly collect unsecured credentials stored or passed through user communication services. Credentials may be sent and stored in user chat communication applications such as email, chat services like Slack or Teams, collaboration tools like Jira or Trello, and any other services that support user communication. Users may share various forms of credentials (such as usernames and passwords, API keys, or authentication tokens) on private or public corporate internal communications channels.

Rather than accessing the stored chat logs (i.e., [Credentials In Files](https://attack.mitre.org/techniques/T1552/001)), adversaries may directly access credentials within these services on the user endpoint, through servers hosting the services, or through administrator portals for cloud hosted services. Adversaries may also compromise integration tools like Slack Workflows to automatically search through messages to extract user credentials. These credentials may then be abused to perform follow-on activities such as lateral movement or privilege escalation [^fn1].


# Platform(s)

- SaaS
- Office Suite

# Parent Technique(s)

- [[../Techniques/Unsecured Credentials (T1552)|Unsecured Credentials]]

# Tactic(s)

- [[../Tactics/9. Credential Access|Credential Access]]


# External Reference(s)

- [T1552.008](https://attack.mitre.org/techniques/T1552/008)

[^fn1]: [Michael Osakwe. (2020, November 18). 4 SaaS and Slack Security Risks to Consider. Retrieved March 17, 2023.](https://www.nightfall.ai/blog/saas-slack-security-risks-2020)