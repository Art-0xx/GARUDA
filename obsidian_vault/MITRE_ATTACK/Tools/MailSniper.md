---
tags:
  - mitre/attack/tool
---

# MailSniper (`S0413`)

MailSniper is a penetration testing tool for searching through email in a Microsoft Exchange environment for specific terms (passwords, insider intel, network architecture information, etc.). It can be used by a non-administrative user to search their own email, or by an Exchange administrator to search the mailboxes of every user in a domain.[^fn1]



# Platform(s)

- Windows
- Office Suite

# Techniques Used

## Remote Email Collection

[MailSniper](https://attack.mitre.org/software/S0413) can be used for searching through email in Exchange and Office 365 environments.[\[GitHub MailSniper\]](https://github.com/dafthack/MailSniper)

- *Technique:* [[../Techniques/Remote Email Collection (T1114.002)|Remote Email Collection]]

## Password Spraying

[MailSniper](https://attack.mitre.org/software/S0413) can be used for password spraying against Exchange and Office 365.[\[GitHub MailSniper\]](https://github.com/dafthack/MailSniper)

- *Technique:* [[../Techniques/Password Spraying (T1110.003)|Password Spraying]]

## Email Account

[MailSniper](https://attack.mitre.org/software/S0413) can be used to obtain account names from Exchange and Office 365 using the <code>Get-GlobalAddressList</code> cmdlet.[\[Black Hills Attacking Exchange MailSniper, 2016\]](https://www.blackhillsinfosec.com/attacking-exchange-with-mailsniper/)

- *Technique:* [[../Techniques/Email Account (T1087.003)|Email Account]]


# External References(s)

- [S0413](https://attack.mitre.org/software/S0413)

[^fn1]: [Bullock, B., . (2018, November 20). MailSniper. Retrieved October 4, 2019.](https://github.com/dafthack/MailSniper)