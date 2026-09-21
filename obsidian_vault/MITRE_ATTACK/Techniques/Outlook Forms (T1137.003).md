---
mitre_data:
  id: T1137.003
  linker_tags:
  - mitre/attack/linker/persistence/outlook_forms
  name: Outlook Forms
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Outlook Forms (`T1137.003`)

Adversaries may abuse Microsoft Outlook forms to obtain persistence on a compromised system. Outlook forms are used as templates for presentation and functionality in Outlook messages. Custom Outlook forms can be created that will execute code when a specifically crafted email is sent by an adversary utilizing the same custom Outlook form.[^fn3]

Once malicious forms have been added to the user’s mailbox, they will be loaded when Outlook is started. Malicious forms will execute when an adversary sends a specifically crafted email to the user.[^fn3]


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

- [T1137.003](https://attack.mitre.org/techniques/T1137/003)
- [Fox, C., Vangel, D. (2018, April 22). Detect and Remediate Outlook Rules and Custom Forms Injections Attacks in Office 365. Retrieved February 4, 2019.](https://docs.microsoft.com/en-us/office365/securitycompliance/detect-and-remediate-outlook-rules-forms-attack)
- [SensePost. (2017, September 21). NotRuler - The opposite of Ruler, provides blue teams with the ability to detect Ruler usage against Exchange. Retrieved February 4, 2019.](https://github.com/sensepost/notruler)

[^fn3]: [Stalmans, E. (2017, April 28). Outlook Forms and Shells. Retrieved February 4, 2019.](https://sensepost.com/blog/2017/outlook-forms-and-shells/)