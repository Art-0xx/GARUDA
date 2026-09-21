---
Acknowledgement:
- Person: era
Author: Arjan Onwezen
Commands:
- Category: Copy
  Command: colorcpl {PATH}
  Description: Copies the referenced file to C:\Windows\System32\spool\drivers\color\.
  MitreID: T1036.005
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copies file(s) to a subfolder of a generally trusted folder (c:\Windows\System32),
    which can be used to hide files or make them blend into the environment.
Created: 2023-06-26
Description: Binary that handles color management
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/file/file_event/file_event_win_susp_colorcpl.yml
- IOC: colorcpl.exe writing files
Full_Path:
- Path: C:\Windows\System32\colorcpl.exe
- Path: C:\Windows\SysWOW64\colorcpl.exe
Name: Colorcpl.exe
Resources:
- Link: https://twitter.com/eral4m/status/1480468728324231172
mitre_data:
  technique_ids:
  - T1036.005
tags:
- lolbas/osbinaries
---

# Colorcpl.exe

Binary that handles color management

# Path(s)

- `C:\Windows\System32\colorcpl.exe`
- `C:\Windows\SysWOW64\colorcpl.exe`

# Copy Commands

Copies the referenced file to C:\Windows\System32\spool\drivers\color\.

```batch
colorcpl {PATH}
```

- **Usecase:** Copies file(s) to a subfolder of a generally trusted folder (c:\Windows\System32), which can be used to hide files or make them blend into the environment.
- **Privileges Required:** User
- **MitreID:** `T1036.005`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/eral4m/status/1480468728324231172
# Acknowledgements

- Arjan Onwezen (Authored, 2023-06-26)
- era