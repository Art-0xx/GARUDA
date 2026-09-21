---
mitre_data:
  id: T1213.002
  linker_tags:
  - mitre/attack/linker/collection/sharepoint
  name: Sharepoint
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Sharepoint (`T1213.002`)

Adversaries may leverage the SharePoint repository as a source to mine valuable information. SharePoint will often contain useful information for an adversary to learn about the structure and functionality of the internal network and systems. For example, the following is a list of example information that may hold potential value to an adversary and may also be found on SharePoint:

* Policies, procedures, and standards
* Physical / logical network diagrams
* System architecture diagrams
* Technical system documentation
* Testing / development credentials (i.e., [Unsecured Credentials](https://attack.mitre.org/techniques/T1552))
* Work / project schedules
* Source code snippets
* Links to network shares and other internal resources



# Platform(s)

- Office Suite
- Windows

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tool(s)

- [[../Tools/spwebmember|spwebmember]]
- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.002](https://attack.mitre.org/techniques/T1213/002)
- [Microsoft. (2017, July 19). Configure audit settings for a site collection. Retrieved April 4, 2018.](https://support.office.com/en-us/article/configure-audit-settings-for-a-site-collection-a9920c97-38c0-44f2-8bcb-4cf1e2ae22d2)
