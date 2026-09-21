---
Acknowledgement:
- Handle: '@kylehanslovan'
  Person: Kyle Hanslovan
- Person: null
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: pcalua.exe -a {PATH:.exe}
  Description: Open the target .EXE using the Program Compatibility Assistant.
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution of binary
- Category: Execute
  Command: pcalua.exe -a {PATH_SMB:.dll}
  Description: Open the target .DLL file with the Program Compatibilty Assistant.
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Tags:
  - Execute: DLL
  - Execute: Remote
  Usecase: Proxy execution of remote dll file
- Category: Execute
  Command: pcalua.exe -a {PATH_ABSOLUTE:.cpl} -c Java
  Description: Open the target .CPL file with the Program Compatibility Assistant.
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execution of CPL files
Created: 2018-05-25
Description: Program Compatibility Assistant
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_pcalua.yml
Full_Path:
- Path: C:\Windows\System32\pcalua.exe
Name: Pcalua.exe
Resources:
- Link: https://twitter.com/KyleHanslovan/status/912659279806640128
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# Pcalua.exe

Program Compatibility Assistant

# Path(s)

- `C:\Windows\System32\pcalua.exe`

# Execute Commands

Open the target .EXE using the Program Compatibility Assistant.

```batch
pcalua.exe -a {PATH:.exe}
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Open the target .DLL file with the Program Compatibilty Assistant.

```batch
pcalua.exe -a {PATH_SMB:.dll}
```

- **Usecase:** Proxy execution of remote dll file
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10



Open the target .CPL file with the Program Compatibility Assistant.

```batch
pcalua.exe -a {PATH_ABSOLUTE:.cpl} -c Java
```

- **Usecase:** Execution of CPL files
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/KyleHanslovan/status/912659279806640128
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Kyle Hanslovan (@kylehanslovan)