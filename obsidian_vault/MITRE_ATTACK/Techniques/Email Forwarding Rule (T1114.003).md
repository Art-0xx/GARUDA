---
mitre_data:
  id: T1114.003
  linker_tags:
  - mitre/attack/linker/collection/email_forwarding_rule
  name: Email Forwarding Rule
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Email Forwarding Rule (`T1114.003`)

Adversaries may setup email forwarding rules to collect sensitive information. Adversaries may abuse email forwarding rules to monitor the activities of a victim, steal information, and further gain intelligence on the victim or the victim’s organization to use as part of further exploits or operations.[^fn5] Furthermore, email forwarding rules can allow adversaries to maintain persistent access to victim's emails even after compromised credentials are reset by administrators.[^fn2] Most email clients allow users to create inbox rules for various email functions, including forwarding to a different recipient. These rules may be created through a local email application, a web interface, or by command-line interface. Messages can be forwarded to internal or external recipients, and there are no restrictions limiting the extent of this rule. Administrators may also create forwarding rules for user accounts with the same considerations and outcomes.[^fn3][^fn1]

Any user or administrator within the organization (or adversary with valid credentials) can create rules to automatically forward all received messages to another recipient, forward emails to different locations based on the sender, and more. Adversaries may also hide the rule by making use of the Microsoft Messaging API (MAPI) to modify the rule properties, making it hidden and not visible from Outlook, OWA or most Exchange Administration tools.[^fn2]

In some environments, administrators may be able to enable email forwarding rules that operate organization-wide rather than on individual inboxes. For example, Microsoft Exchange supports transport rules that evaluate all mail an organization receives against user-specified conditions, then performs a user-specified action on mail that adheres to those conditions.[^fn4] Adversaries that abuse such features may be able to enable forwarding on all or specific mail an organization receives. 


# Platform(s)

- Linux
- macOS
- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Email Collection (T1114)|Email Collection]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1114.003](https://attack.mitre.org/techniques/T1114/003)

[^fn1]: [Apple. (n.d.). Reply to, forward, or redirect emails in Mail on Mac. Retrieved June 22, 2021.](https://support.apple.com/guide/mail/reply-to-forward-or-redirect-emails-mlhlp1010/mac)
[^fn2]: [Damian Pfammatter. (2018, September 17). Hidden Inbox Rules in Microsoft Exchange. Retrieved October 12, 2021.](https://blog.compass-security.com/2018/09/hidden-inbox-rules-in-microsoft-exchange/)
[^fn3]: [McMichael, T.. (2015, June 8). Exchange and Office 365 Mail Forwarding. Retrieved October 8, 2019.](https://blogs.technet.microsoft.com/timmcmic/2015/06/08/exchange-and-office-365-mail-forwarding-2/)
[^fn4]: [Microsoft. (2023, February 22). Mail flow rules (transport rules) in Exchange Online. Retrieved March 13, 2023.](https://learn.microsoft.com/en-us/exchange/security-and-compliance/mail-flow-rules/mail-flow-rules)
[^fn5]: [US-CERT. (2018, March 27). TA18-068A Brute Force Attacks Conducted by Cyber Actors. Retrieved October 2, 2019.](https://www.us-cert.gov/ncas/alerts/TA18-086A)