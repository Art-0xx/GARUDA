---
mitre_data:
  id: T1564.008
  linker_tags:
  - mitre/attack/linker/stealth/email_hiding_rules
  name: Email Hiding Rules
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Email Hiding Rules (`T1564.008`)

Adversaries may use email rules to hide inbound emails in a compromised user's mailbox. Many email clients allow users to create inbox rules for various email functions, including moving emails to other folders, marking emails as read, or deleting emails. Rules may be created or modified within email clients or through external features such as the <code>New-InboxRule</code> or <code>Set-InboxRule</code> [PowerShell](https://attack.mitre.org/techniques/T1059/001) cmdlets on Windows systems.[^fn3][^fn1][^fn4][^fn5]

Adversaries may utilize email rules within a compromised user's mailbox to delete and/or move emails to less noticeable folders. Adversaries may do this to hide security alerts, C2 communication, or responses to [Internal Spearphishing](https://attack.mitre.org/techniques/T1534) emails sent from the compromised account.

Any user or administrator within the organization (or adversary with valid credentials) may be able to create rules to automatically move or delete emails. These rules can be abused to impair/delay detection had the email content been immediately seen by a user or defender. Malicious rules commonly filter out emails based on key words (such as <code>malware</code>, <code>suspicious</code>, <code>phish</code>, and <code>hack</code>) found in message bodies and subject lines. [^fn6]

In some environments, administrators may be able to enable email rules that operate organization-wide rather than on individual inboxes. For example, Microsoft Exchange supports transport rules that evaluate all mail an organization receives against user-specified conditions, then performs a user-specified action on mail that adheres to those conditions.[^fn2] Adversaries that abuse such features may be able to automatically modify or delete all emails related to specific topics (such as internal security incident notifications).


# Platform(s)

- Windows
- Linux
- macOS
- Office Suite

# Parent Technique(s)

- [[../Techniques/Hide Artifacts (T1564)|Hide Artifacts]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1564.008](https://attack.mitre.org/techniques/T1564/008)

[^fn1]: [Apple. (n.d.). Use rules to manage emails you receive in Mail on Mac. Retrieved June 14, 2021.](https://support.apple.com/guide/mail/use-rules-to-manage-emails-you-receive-mlhlp1017/mac)
[^fn2]: [Microsoft. (2023, February 22). Mail flow rules (transport rules) in Exchange Online. Retrieved March 13, 2023.](https://learn.microsoft.com/en-us/exchange/security-and-compliance/mail-flow-rules/mail-flow-rules)
[^fn3]: [Microsoft. (n.d.). Manage email messages by using rules. Retrieved June 11, 2021.](https://support.microsoft.com/en-us/office/manage-email-messages-by-using-rules-c24f5dea-9465-4df4-ad17-a50704d66c59)
[^fn4]: [Microsoft. (n.d.). New-InboxRule. Retrieved June 7, 2021.](https://docs.microsoft.com/en-us/powershell/module/exchange/new-inboxrule?view=exchange-ps)
[^fn5]: [Microsoft. (n.d.). Set-InboxRule. Retrieved June 7, 2021.](https://docs.microsoft.com/en-us/powershell/module/exchange/set-inboxrule?view=exchange-ps)
[^fn6]: [Niv Goldenberg. (2018, December 12). Rule your inbox with Microsoft Cloud App Security. Retrieved June 7, 2021.](https://techcommunity.microsoft.com/t5/security-compliance-and-identity/rule-your-inbox-with-microsoft-cloud-app-security/ba-p/299154)