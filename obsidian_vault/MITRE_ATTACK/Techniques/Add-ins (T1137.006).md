---
mitre_data:
  id: T1137.006
  linker_tags:
  - mitre/attack/linker/persistence/add-ins
  name: Add-ins
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Add-ins (`T1137.006`)

Adversaries may abuse Microsoft Office add-ins to obtain persistence on a compromised system. Office add-ins can be used to add functionality to Office programs. [^fn3] There are different types of add-ins that can be used by the various Office products; including Word/Excel add-in Libraries (WLL/XLL), VBA add-ins, Office Component Object Model (COM) add-ins, automation add-ins, VBA Editor (VBE), Visual Studio Tools for Office (VSTO) add-ins, and Outlook add-ins. [^fn2][^fn1]

Add-ins can be used to obtain persistence because they can be set to execute code when an Office application starts. 


# Platform(s)

- Windows
- Office Suite

# Parent Technique(s)

- [[../Techniques/Office Application Startup (T1137)|Office Application Startup]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1137.006](https://attack.mitre.org/techniques/T1137/006)
- [Shukrun, S. (2019, June 2). Office Templates and GlobalDotName - A Stealthy Office Persistence Technique. Retrieved August 26, 2019.](https://www.221bluestreet.com/post/office-templates-and-globaldotname-a-stealthy-office-persistence-technique)

[^fn1]: [Caban, D. and Hirani, M. (2018, October 3). You’ve Got Mail! Enterprise Email Compromise. Retrieved November 17, 2024.](https://web.archive.org/web/20190508170121/https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s03-youve-got-mail.pdf)
[^fn2]: [Knowles, W. (2017, April 21). Add-In Opportunities for Office Persistence. Retrieved November 17, 2024.](https://web.archive.org/web/20190526112859/https://labs.mwrinfosecurity.com/blog/add-in-opportunities-for-office-persistence/)
[^fn3]: [Microsoft. (n.d.). Add or remove add-ins. Retrieved July 3, 2017.](https://support.office.com/article/Add-or-remove-add-ins-0af570c4-5cf3-4fa9-9b88-403625a0b460)