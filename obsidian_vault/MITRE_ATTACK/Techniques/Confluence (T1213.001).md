---
mitre_data:
  id: T1213.001
  linker_tags:
  - mitre/attack/linker/collection/confluence
  name: Confluence
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Confluence (`T1213.001`)


Adversaries may leverage Confluence repositories to mine valuable information. Often found in development environments alongside Atlassian JIRA, Confluence is generally used to store development-related documentation, however, in general may contain more diverse categories of useful information, such as:

* Policies, procedures, and standards
* Physical / logical network diagrams
* System architecture diagrams
* Technical system documentation
* Testing / development credentials (i.e., [Unsecured Credentials](https://attack.mitre.org/techniques/T1552))
* Work / project schedules
* Source code snippets
* Links to network shares and other internal resources



# Platform(s)

- SaaS

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tool(s)

- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.001](https://attack.mitre.org/techniques/T1213/001)
- [Atlassian. (2018, January 9). How to Enable User Access Logging. Retrieved April 4, 2018.](https://confluence.atlassian.com/confkb/how-to-enable-user-access-logging-182943.html)
