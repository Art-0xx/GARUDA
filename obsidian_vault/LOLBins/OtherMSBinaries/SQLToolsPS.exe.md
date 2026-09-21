---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: SQLToolsPS.exe -noprofile -command Start-Process {PATH:.exe}
  Description: Run a SQL Server PowerShell mini-console without Module and ScriptBlock
    Logging.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: PowerShell
  Usecase: Execute PowerShell command.
Created: 2018-05-25
Description: Tool included with Microsoft SQL that loads SQL Server cmdlts. A replacement
  for sqlps.exe. Successor to sqlps.exe in SQL Server 2016+.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_mssql_sqltoolsps_susp_execution.yml
- Splunk: https://github.com/splunk/security_content/blob/aa9f7e0d13a61626c69367290ed1b7b71d1281fd/docs/_posts/2021-10-05-suspicious_copy_on_system32.md
Full_Path:
- Path: C:\Program files (x86)\Microsoft SQL Server\130\Tools\Binn\sqlps.exe
Name: SQLToolsPS.exe
Resources:
- Link: https://twitter.com/pabraeken/status/993298228840992768
- Link: https://docs.microsoft.com/en-us/sql/powershell/sql-server-powershell?view=sql-server-2017
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# SQLToolsPS.exe

Tool included with Microsoft SQL that loads SQL Server cmdlts. A replacement for sqlps.exe. Successor to sqlps.exe in SQL Server 2016+.

# Path(s)

- `C:\Program files (x86)\Microsoft SQL Server\130\Tools\Binn\sqlps.exe`

# Execute Commands

Run a SQL Server PowerShell mini-console without Module and ScriptBlock Logging.

```batch
SQLToolsPS.exe -noprofile -command Start-Process {PATH:.exe}
```

- **Usecase:** Execute PowerShell command.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/pabraeken/status/993298228840992768
- https://docs.microsoft.com/en-us/sql/powershell/sql-server-powershell?view=sql-server-2017
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Brae