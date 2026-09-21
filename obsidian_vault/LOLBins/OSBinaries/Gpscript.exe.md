---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Gpscript /logon
  Description: Executes logon scripts configured in Group Policy.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Administrator
  Tags:
  - Execute: CMD
  Usecase: Add local group policy logon script to execute file and hide from defensive
    counter measures
- Category: Execute
  Command: Gpscript /startup
  Description: Executes startup scripts configured in Group Policy
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Administrator
  Tags:
  - Execute: CMD
  Usecase: Add local group policy logon script to execute file and hide from defensive
    counter measures
Created: 2018-05-25
Description: Used by group policy to process scripts
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_gpscript.yml
- IOC: Scripts added in local group policy
- IOC: Execution of Gpscript.exe after logon
Full_Path:
- Path: C:\Windows\System32\gpscript.exe
- Path: C:\Windows\SysWOW64\gpscript.exe
Name: Gpscript.exe
Resources:
- Link: https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Gpscript.exe

Used by group policy to process scripts

# Path(s)

- `C:\Windows\System32\gpscript.exe`
- `C:\Windows\SysWOW64\gpscript.exe`

# Execute Commands

Executes logon scripts configured in Group Policy.

```batch
Gpscript /logon
```

- **Usecase:** Add local group policy logon script to execute file and hide from defensive counter measures
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Executes startup scripts configured in Group Policy

```batch
Gpscript /startup
```

- **Usecase:** Add local group policy logon script to execute file and hide from defensive counter measures
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar