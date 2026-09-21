---
mitre_data:
  id: T1213
  linker_tags:
  - mitre/attack/linker/collection/data_from_information_repositories
  name: Data from Information Repositories
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Data from Information Repositories (`T1213`)

Adversaries may leverage information repositories to mine valuable information. Information repositories are tools that allow for storage of information, typically to facilitate collaboration or information sharing between users, and can store a wide variety of data that may aid adversaries in further objectives, such as Credential Access, Lateral Movement, or Defense Evasion, or direct access to the target information. Adversaries may also abuse external sharing features to share sensitive documents with recipients outside of the organization (i.e., [Transfer Data to Cloud Account](https://attack.mitre.org/techniques/T1537)). 

The following is a brief list of example information that may hold potential value to an adversary and may also be found on an information repository:

* Policies, procedures, and standards
* Physical / logical network diagrams
* System architecture diagrams
* Technical system documentation
* Testing / development credentials (i.e., [Unsecured Credentials](https://attack.mitre.org/techniques/T1552)) 
* Work / project schedules
* Source code snippets
* Links to network shares and other internal resources
* Contact or other sensitive information about business partners and customers, including personally identifiable information (PII) 

Information stored in a repository may vary based on the specific instance or environment. Specific common information repositories include the following:

* Storage services such as IaaS databases, enterprise databases, and more specialized platforms such as customer relationship management (CRM) databases 
* Collaboration platforms such as SharePoint, Confluence, and code repositories
* Messaging platforms such as Slack and Microsoft Teams 

In some cases, information repositories have been improperly secured, typically by unintentionally allowing for overly-broad access by all users or even public access to unauthenticated users. This is particularly common with cloud-native or cloud-hosted services, such as AWS Relational Database Service (RDS), Redis, or ElasticSearch.[^fn1][^fn3][^fn6]


# Platform(s)

- Linux
- Windows
- macOS
- SaaS
- IaaS
- Office Suite

# Sub-Technique(s)

- [[../Techniques/Sharepoint (T1213.002)|Sharepoint]]
- [[../Techniques/Databases (T1213.006)|Databases]]
- [[../Techniques/Confluence (T1213.001)|Confluence]]
- [[../Techniques/Customer Relationship Management Software (T1213.004)|Customer Relationship Management Software]]
- [[../Techniques/Code Repositories (T1213.003)|Code Repositories]]
- [[../Techniques/Messaging Applications (T1213.005)|Messaging Applications]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213](https://attack.mitre.org/techniques/T1213)
- [Atlassian. (2018, January 9). How to Enable User Access Logging. Retrieved April 4, 2018.](https://confluence.atlassian.com/confkb/how-to-enable-user-access-logging-182943.html)
- [Microsoft. (2017, July 19). Configure audit settings for a site collection. Retrieved April 4, 2018.](https://support.office.com/en-us/article/configure-audit-settings-for-a-site-collection-a9920c97-38c0-44f2-8bcb-4cf1e2ae22d2)
- [Microsoft. (n.d.). Sharepoint Sharing Events. Retrieved October 8, 2021.](https://docs.microsoft.com/en-us/microsoft-365/compliance/use-sharing-auditing?view=o365-worldwide#sharepoint-sharing-events)

[^fn1]: [Ariel Szarf, Doron Karmi, and Lionel Saposnik. (n.d.). Oops, I Leaked It Again — How Mitiga Found PII in Exposed Amazon RDS Snapshots. Retrieved September 24, 2024.](https://www.mitiga.io/blog/how-mitiga-found-pii-in-exposed-amazon-rds-snapshots)
[^fn3]: [David Fiser and Jaromir Horejsi. (2020, April 21). Exposed Redis Instances Abused for Remote Code Execution, Cryptocurrency Mining. Retrieved September 25, 2024.](https://www.trendmicro.com/en_us/research/20/d/exposed-redis-instances-abused-for-remote-code-execution-cryptocurrency-mining.html)
[^fn6]: [Vilius Petkauskas . (2022, November 3). Thomson Reuters collected and leaked at least 3TB of sensitive data. Retrieved September 25, 2024.](https://cybernews.com/security/thomson-reuters-leaked-terabytes-sensitive-data/)