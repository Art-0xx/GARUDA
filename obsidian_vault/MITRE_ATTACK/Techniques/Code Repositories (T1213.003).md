---
mitre_data:
  id: T1213.003
  linker_tags:
  - mitre/attack/linker/collection/code_repositories
  name: Code Repositories
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Code Repositories (`T1213.003`)

Adversaries may leverage code repositories to collect valuable information. Code repositories are tools/services that store source code and automate software builds. They may be hosted internally or privately on third party sites such as Github, GitLab, SourceForge, and BitBucket. Users typically interact with code repositories through a web application or command-line utilities such as git.

Once adversaries gain access to a victim network or a private code repository, they may collect sensitive information such as proprietary source code or [Unsecured Credentials](https://attack.mitre.org/techniques/T1552) contained within software's source code.  Having access to software's source code may allow adversaries to develop [Exploits](https://attack.mitre.org/techniques/T1587/004), while credentials may provide access to additional resources using [Valid Accounts](https://attack.mitre.org/techniques/T1078).[^fn1][^fn2]

**Note:** This is distinct from [Code Repositories](https://attack.mitre.org/techniques/T1593/003), which focuses on conducting [Reconnaissance](https://attack.mitre.org/tactics/TA0043) via public code repositories.


# Platform(s)

- SaaS

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tool(s)

- [[../Tools/TruffleHog|TruffleHog]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.003](https://attack.mitre.org/techniques/T1213/003)

[^fn1]: [Andy Greenberg. (2017, January 21). Hack Brief: Uber Paid Off Hackers to Hide a 57-Million User Data Breach. Retrieved May 14, 2021.](https://www.wired.com/story/uber-paid-off-hackers-to-hide-a-57-million-user-data-breach/)
[^fn2]: [Brian Krebs. (2013, October 3). Adobe To Announce Source Code, Customer Data Breach. Retrieved May 17, 2021.](https://krebsonsecurity.com/2013/10/adobe-to-announce-source-code-customer-data-breach/)