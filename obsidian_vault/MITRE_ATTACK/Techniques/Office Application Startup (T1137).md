---
mitre_data:
  id: T1137
  linker_tags:
  - mitre/attack/linker/persistence/office_application_startup
  name: Office Application Startup
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Office Application Startup (`T1137`)

Adversaries may leverage Microsoft Office-based applications for persistence between startups. Microsoft Office is a fairly common application suite on Windows-based operating systems within an enterprise network. There are multiple mechanisms that can be used with Office for persistence when an Office-based application is started; this can include the use of Office Template Macros and add-ins.

A variety of features have been discovered in Outlook that can be abused to obtain persistence, such as Outlook rules, forms, and Home Page.[^fn4] These persistence mechanisms can work within Outlook or be used through Office 365.[^fn2]


# Platform(s)

- Windows
- Office Suite

# Sub-Technique(s)

- [[../Techniques/Add-ins (T1137.006)|Add-ins]]
- [[../Techniques/Outlook Rules (T1137.005)|Outlook Rules]]
- [[../Techniques/Office Template Macros (T1137.001)|Office Template Macros]]
- [[../Techniques/Outlook Forms (T1137.003)|Outlook Forms]]
- [[../Techniques/Outlook Home Page (T1137.004)|Outlook Home Page]]
- [[../Techniques/Office Test (T1137.002)|Office Test]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1137](https://attack.mitre.org/techniques/T1137)
- [Fox, C., Vangel, D. (2018, April 22). Detect and Remediate Outlook Rules and Custom Forms Injections Attacks in Office 365. Retrieved February 4, 2019.](https://docs.microsoft.com/en-us/office365/securitycompliance/detect-and-remediate-outlook-rules-forms-attack)
- [Parisi, T., et al. (2017, July). Using Outlook Forms for Lateral Movement and Persistence. Retrieved February 5, 2019.](https://malware.news/t/using-outlook-forms-for-lateral-movement-and-persistence/13746)
- [SensePost. (2017, September 21). NotRuler - The opposite of Ruler, provides blue teams with the ability to detect Ruler usage against Exchange. Retrieved February 4, 2019.](https://github.com/sensepost/notruler)
- [Soutcast. (2018, September 14). Outlook Today Homepage Persistence. Retrieved February 5, 2019.](https://medium.com/@bwtech789/outlook-today-homepage-persistence-33ea9b505943)

[^fn2]: [Koeller, B.. (2018, February 21). Defending Against Rules and Forms Injection. Retrieved November 5, 2019.](https://blogs.technet.microsoft.com/office365security/defending-against-rules-and-forms-injection/)
[^fn4]: [SensePost. (2016, August 18). Ruler: A tool to abuse Exchange services. Retrieved February 4, 2019.](https://github.com/sensepost/ruler)