---
Acknowledgement:
- Person: Ji
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: ie4uinit.exe -BaseSettings
  Description: Executes commands from a specially prepared ie4uinit.inf file.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Get code execution by copy files to another location
Created: 2018-05-25
Description: Executes commands from a specially prepared ie4uinit.inf file.
Detection:
- IOC: ie4uinit.exe copied outside of %windir%
- IOC: ie4uinit.exe loading an inf file (ieuinit.inf) from outside %windir%
- Sigma: https://github.com/SigmaHQ/sigma/blob/bea6f18d350d9c9fdc067f93dde0e9b11cc22dc2/rules/windows/process_creation/proc_creation_win_lolbin_ie4uinit.yml
Full_Path:
- Path: c:\windows\system32\ie4uinit.exe
- Path: c:\windows\sysWOW64\ie4uinit.exe
- Path: c:\windows\system32\ieuinit.inf
- Path: c:\windows\sysWOW64\ieuinit.inf
Name: Ie4uinit.exe
Resources:
- Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Ie4uinit.exe

Executes commands from a specially prepared ie4uinit.inf file.

# Path(s)

- `c:\windows\system32\ie4uinit.exe`
- `c:\windows\sysWOW64\ie4uinit.exe`
- `c:\windows\system32\ieuinit.inf`
- `c:\windows\sysWOW64\ieuinit.inf`

# Execute Commands

Executes commands from a specially prepared ie4uinit.inf file.

```batch
ie4uinit.exe -BaseSettings
```

- **Usecase:** Get code execution by copy files to another location
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Ji