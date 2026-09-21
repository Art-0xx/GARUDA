---
mitre_data:
  id: T1137.005
  linker_tags:
  - mitre/attack/linker/persistence/outlook_rules
  name: Outlook Rules
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Outlook Rules (`T1137.005`)

Adversaries may abuse Microsoft Outlook rules to obtain persistence on a compromised system. Outlook rules allow a user to define automated behavior to manage email messages. A benign rule might, for example, automatically move an email to a particular folder in Outlook if it contains specific words from a specific sender. Malicious Outlook rules can be created that can trigger code execution when an adversary sends a specifically crafted email to that user.[^fn3]

Once malicious rules have been added to the user’s mailbox, they will be loaded when Outlook is started. Malicious rules will execute when an adversary sends a specifically crafted email to the user.[^fn3]


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

- [T1137.005](https://attack.mitre.org/techniques/T1137/005)
- [Damian Pfammatter. (2018, September 17). Hidden Inbox Rules in Microsoft Exchange. Retrieved October 12, 2021.](https://blog.compass-security.com/2018/09/hidden-inbox-rules-in-microsoft-exchange/)
- [Fox, C., Vangel, D. (2018, April 22). Detect and Remediate Outlook Rules and Custom Forms Injections Attacks in Office 365. Retrieved February 4, 2019.](https://docs.microsoft.com/en-us/office365/securitycompliance/detect-and-remediate-outlook-rules-forms-attack)
- [SensePost. (2017, September 21). NotRuler - The opposite of Ruler, provides blue teams with the ability to detect Ruler usage against Exchange. Retrieved February 4, 2019.](https://github.com/sensepost/notruler)

[^fn3]: [Landers, N. (2015, December 4). Malicious Outlook Rules. Retrieved February 4, 2019.](https://silentbreaksecurity.com/malicious-outlook-rules/)