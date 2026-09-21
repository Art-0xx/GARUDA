---
mitre_data:
  id: T1213.006
  linker_tags:
  - mitre/attack/linker/collection/databases
  name: Databases
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Databases (`T1213.006`)

Adversaries may leverage databases to mine valuable information. These databases may be hosted on-premises or in the cloud (both in platform-as-a-service and software-as-a-service environments). 

Examples of databases from which information may be collected include MySQL, PostgreSQL, MongoDB, Amazon Relational Database Service, Azure SQL Database, Google Firebase, and Snowflake. Databases may include a variety of information of interest to adversaries, such as usernames, hashed passwords, personally identifiable information, and financial data. Data collected from databases may be used for [Lateral Movement](https://attack.mitre.org/tactics/TA0008), [Command and Control](https://attack.mitre.org/tactics/TA0011), or [Exfiltration](https://attack.mitre.org/tactics/TA0010). Data exfiltrated from databases may also be used to extort victims or may be sold for profit.[^fn1]


# Platform(s)

- IaaS
- Linux
- macOS
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.006](https://attack.mitre.org/techniques/T1213/006)

[^fn1]: [Mandiant. (2024, June 10). UNC5537 Targets Snowflake Customer Instances for Data Theft and Extortion. Retrieved May 22, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion)