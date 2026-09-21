---
mitre_data:
  id: T1098.002
  linker_tags:
  - mitre/attack/linker/persistence/additional_email_delegate_permissions
  - mitre/attack/linker/privilege_escalation/additional_email_delegate_permissions
  name: Additional Email Delegate Permissions
  related_tactics:
  - persistence
  - privilege_escalation
tags:
- mitre/attack/technique
---



# Additional Email Delegate Permissions (`T1098.002`)

Adversaries may grant additional permission levels to maintain persistent access to an adversary-controlled email account. 

For example, the <code>Add-MailboxPermission</code> [PowerShell](https://attack.mitre.org/techniques/T1059/001) cmdlet, available in on-premises Exchange and in the cloud-based service Office 365, adds permissions to a mailbox.[^fn7][^fn5][^fn2] In Google Workspace, delegation can be enabled via the Google Admin console and users can delegate accounts via their Gmail settings.[^fn4][^fn3] 

Adversaries may also assign mailbox folder permissions through individual folder permissions or roles. In Office 365 environments, adversaries may assign the Default or Anonymous user permissions or roles to the Top of Information Store (root), Inbox, or other mailbox folders. By assigning one or both user permissions to a folder, the adversary can utilize any other account in the tenant to maintain persistence to the target user’s mail folders.[^fn6]

This may be used in persistent threat incidents as well as BEC (Business Email Compromise) incidents where an adversary can add [Additional Cloud Roles](https://attack.mitre.org/techniques/T1098/003) to the accounts they wish to compromise. This may further enable use of additional techniques for gaining access to systems. For example, compromised business accounts are often used to send messages to other accounts in the network of the target business while creating inbox rules (ex: [Internal Spearphishing](https://attack.mitre.org/techniques/T1534)), so the messages evade spam/phishing detection mechanisms.[^fn1]


# Platform(s)

- Windows
- Office Suite

# Parent Technique(s)

- [[../Techniques/Account Manipulation (T1098)|Account Manipulation]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]
- [[../Tactics/6. Privilege Escalation|Privilege Escalation]]


# External Reference(s)

- [T1098.002](https://attack.mitre.org/techniques/T1098/002)

[^fn1]: [Bienstock, D.. (2019). BECS and Beyond: Investigating and Defending O365. Retrieved November 17, 2024.](https://www.slideshare.net/slideshow/shmoocon-2019-becs-and-beyond-investigating-and-defending-office-365/128744511)
[^fn2]: [Crowdstrike. (2018, July 18). Hiding in Plain Sight: Using the Office 365 Activities API to Investigate Business Email Compromises. Retrieved January 19, 2020.](https://www.crowdstrike.com/blog/hiding-in-plain-sight-using-the-office-365-activities-api-to-investigate-business-email-compromises/)
[^fn3]: [Google. (2011, June 1). Ensuring your information is safe online. Retrieved April 1, 2022.](https://googleblog.blogspot.com/2011/06/ensuring-your-information-is-safe.html)
[^fn4]: [Google. (n.d.). Turn Gmail delegation on or off. Retrieved April 1, 2022.](https://support.google.com/a/answer/7223765?hl=en)
[^fn5]: [Mandiant. (2018). Mandiant M-Trends 2018. Retrieved November 17, 2024.](https://static.carahsoft.com/concrete/files/1015/2779/3571/M-Trends-2018-Report.pdf)
[^fn6]: [Mandiant. (2021, January 19). Remediation and Hardening Strategies for Microsoft 365 to Defend Against UNC2452. Retrieved January 22, 2021.](https://www.mandiant.com/resources/blog/remediation-and-hardening-strategies-for-microsoft-365-to-defend-against-unc2452)
[^fn7]: [Microsoft. (n.d.). Add-Mailbox Permission. Retrieved September 13, 2019.](https://docs.microsoft.com/en-us/powershell/module/exchange/mailboxes/add-mailboxpermission?view=exchange-ps)