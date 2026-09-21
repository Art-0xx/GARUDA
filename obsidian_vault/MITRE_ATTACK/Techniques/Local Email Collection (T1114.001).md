---
mitre_data:
  id: T1114.001
  linker_tags:
  - mitre/attack/linker/collection/local_email_collection
  name: Local Email Collection
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Local Email Collection (`T1114.001`)

Adversaries may target user email on local systems to collect sensitive information. Files containing email data can be acquired from a user’s local system, such as Outlook storage or cache files.

Outlook stores data locally in offline data files with an extension of .ost. Outlook 2010 and later supports .ost file sizes up to 50GB, while earlier versions of Outlook support up to 20GB.[^fn2] IMAP accounts in Outlook 2013 (and earlier) and POP accounts use Outlook Data Files (.pst) as opposed to .ost, whereas IMAP accounts in Outlook 2016 (and later) use .ost files. Both types of Outlook data files are typically stored in `C:\Users\<username>\Documents\Outlook Files` or `C:\Users\<username>\AppData\Local\Microsoft\Outlook`.[^fn1]


# Platform(s)

- Windows

# Parent Technique(s)

- [[../Techniques/Email Collection (T1114)|Email Collection]]

# Tool(s)

- [[../Tools/Empire|Empire]]
- [[../Tools/Out1|Out1]]
- [[../Tools/Pupy|Pupy]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1114.001](https://attack.mitre.org/techniques/T1114/001)

[^fn1]: [Microsoft. (n.d.). Introduction to Outlook Data Files (.pst and .ost). Retrieved February 19, 2020.](https://support.office.com/en-us/article/introduction-to-outlook-data-files-pst-and-ost-222eaf92-a995-45d9-bde2-f331f60e2790)
[^fn2]: [N. O'Bryan. (2018, May 30). Managing Outlook Cached Mode and OST File Sizes. Retrieved February 19, 2020.](https://practical365.com/clients/office-365-proplus/outlook-cached-mode-ost-file-sizes/)