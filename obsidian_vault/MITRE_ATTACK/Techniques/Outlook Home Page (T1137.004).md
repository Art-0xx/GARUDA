---
mitre_data:
  id: T1137.004
  linker_tags:
  - mitre/attack/linker/persistence/outlook_home_page
  name: Outlook Home Page
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Outlook Home Page (`T1137.004`)

Adversaries may abuse Microsoft Outlook's Home Page feature to obtain persistence on a compromised system. Outlook Home Page is a legacy feature used to customize the presentation of Outlook folders. This feature allows for an internal or external URL to be loaded and presented whenever a folder is opened. A malicious HTML page can be crafted that will execute code when loaded by Outlook Home Page.[^fn3]

Once malicious home pages have been added to the user’s mailbox, they will be loaded when Outlook is started. Malicious Home Pages will execute when the right Outlook folder is loaded/reloaded.[^fn3]



# Platform(s)

- Windows
- Office Suite

# Parent Technique(s)

- [[../Techniques/Office Application Startup (T1137)|Office Application Startup]]

# Tool(s)

- [[../Tools/Ruler|Ruler]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1137.004](https://attack.mitre.org/techniques/T1137/004)
- [Fox, C., Vangel, D. (2018, April 22). Detect and Remediate Outlook Rules and Custom Forms Injections Attacks in Office 365. Retrieved February 4, 2019.](https://docs.microsoft.com/en-us/office365/securitycompliance/detect-and-remediate-outlook-rules-forms-attack)
- [SensePost. (2017, September 21). NotRuler - The opposite of Ruler, provides blue teams with the ability to detect Ruler usage against Exchange. Retrieved February 4, 2019.](https://github.com/sensepost/notruler)

[^fn3]: [Stalmans, E. (2017, October 11). Outlook Home Page – Another Ruler Vector. Retrieved February 4, 2019.](https://sensepost.com/blog/2017/outlook-home-page-another-ruler-vector/)