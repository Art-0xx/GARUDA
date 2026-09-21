---
mitre_data:
  id: T1505.001
  linker_tags:
  - mitre/attack/linker/persistence/sql_stored_procedures
  name: SQL Stored Procedures
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# SQL Stored Procedures (`T1505.001`)

Adversaries may abuse SQL stored procedures to establish persistent access to systems. SQL Stored Procedures are code that can be saved and reused so that database users do not waste time rewriting frequently used SQL queries. Stored procedures can be invoked via SQL statements to the database using the procedure name or via defined events (e.g. when a SQL server application is started/restarted).

Adversaries may craft malicious stored procedures that can provide a persistence mechanism in SQL database servers.[^fn4][^fn3] To execute operating system commands through SQL syntax the adversary may have to enable additional functionality, such as xp_cmdshell for MSSQL Server.[^fn4][^fn3][^fn2] 

Microsoft SQL Server can enable common language runtime (CLR) integration. With CLR integration enabled, application developers can write stored procedures using any .NET framework language (e.g. VB .NET, C#, etc.).[^fn1] Adversaries may craft or modify CLR assemblies that are linked to stored procedures since these CLR assemblies can be made to execute arbitrary commands.[^fn5] 


# Platform(s)

- Windows
- Linux

# Parent Technique(s)

- [[../Techniques/Server Software Component (T1505)|Server Software Component]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1505.001](https://attack.mitre.org/techniques/T1505/001)

[^fn1]: [Microsoft. (2017, June 19). Common Language Runtime Integration. Retrieved July 8, 2019.](https://docs.microsoft.com/en-us/sql/relational-databases/clr-integration/common-language-runtime-integration-overview?view=sql-server-2017)
[^fn2]: [Microsoft. (2017, March 15). xp_cmdshell (Transact-SQL). Retrieved September 9, 2019.](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/xp-cmdshell-transact-sql?view=sql-server-2017)
[^fn3]: [Plakhov, A., Sitchikhin, D. (2019, August 22). Agent 1433: remote attack on Microsoft SQL Server. Retrieved September 4, 2019.](https://securelist.com/malicious-tasks-in-ms-sql-server/92167/)
[^fn4]: [Sutherland, S. (2016, March 7). Maintaining Persistence via SQL Server – Part 1: Startup Stored Procedures. Retrieved September 12, 2024.](https://www.netspi.com/blog/technical-blog/network-penetration-testing/sql-server-persistence-part-1-startup-stored-procedures/)
[^fn5]: [Sutherland, S. (2017, July 13). Attacking SQL Server CLR Assemblies. Retrieved September 12, 2024.](https://www.netspi.com/blog/technical-blog/adversary-simulation/attacking-sql-server-clr-assemblies/)