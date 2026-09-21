---
mitre_data:
  id: T1087.003
  linker_tags:
  - mitre/attack/linker/discovery/email_account
  name: Email Account
  related_tactics:
  - discovery
tags:
- mitre/attack/technique
---



# Email Account (`T1087.003`)

Adversaries may attempt to get a listing of email addresses and accounts. Adversaries may try to dump Exchange address lists such as global address lists (GALs).[^fn3]

In on-premises Exchange and Exchange Online, the <code>Get-GlobalAddressList</code> PowerShell cmdlet can be used to obtain email addresses and accounts from a domain using an authenticated session.[^fn4][^fn1]

In Google Workspace, the GAL is shared with Microsoft Outlook users through the Google Workspace Sync for Microsoft Outlook (GWSMO) service. Additionally, the Google Workspace Directory allows for users to get a listing of other users within the organization.[^fn2]


# Platform(s)

- Windows
- Office Suite

# Parent Technique(s)

- [[../Techniques/Account Discovery (T1087)|Account Discovery]]

# Tool(s)

- [[../Tools/Ruler|Ruler]]
- [[../Tools/MailSniper|MailSniper]]

# Tactic(s)

- [[../Tactics/10. Discovery|Discovery]]


# External Reference(s)

- [T1087.003](https://attack.mitre.org/techniques/T1087/003)

[^fn1]: [Bullock, B.. (2016, October 3). Attacking Exchange with MailSniper. Retrieved October 6, 2019.](https://www.blackhillsinfosec.com/attacking-exchange-with-mailsniper/)
[^fn2]: [Google. (n.d.). Retrieved March 16, 2021.](https://support.google.com/a/answer/166870?hl=en)
[^fn3]: [Microsoft. (2020, February 7). Address lists in Exchange Server. Retrieved March 26, 2020.](https://docs.microsoft.com/en-us/exchange/email-addresses-and-address-books/address-lists/address-lists?view=exchserver-2019)
[^fn4]: [Microsoft. (n.d.). Get-GlobalAddressList. Retrieved October 6, 2019.](https://docs.microsoft.com/en-us/powershell/module/exchange/email-addresses-and-address-books/get-globaladdresslist)