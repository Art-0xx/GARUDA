---
Acknowledgement:
- Person: A
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Extexport.exe {PATH_ABSOLUTE:folder} foo bar
  Description: Load a DLL located in the specified folder with one of the following
    names mozcrt19.dll, mozsqlite3.dll, or sqlite.dll.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute dll file
Created: 2018-05-25
Description: Load a DLL located in the c:\test folder with a specific name.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_extexport.yml
- IOC: Extexport.exe loads dll and is execute from other folder the original path
Full_Path:
- Path: C:\Program Files\Internet Explorer\Extexport.exe
- Path: C:\Program Files (x86)\Internet Explorer\Extexport.exe
Name: Extexport.exe
Resources:
- Link: http://www.hexacorn.com/blog/2018/04/24/extexport-yet-another-lolbin/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Extexport.exe

Load a DLL located in the c:\test folder with a specific name.

# Path(s)

- `C:\Program Files\Internet Explorer\Extexport.exe`
- `C:\Program Files (x86)\Internet Explorer\Extexport.exe`

# Execute Commands

Load a DLL located in the specified folder with one of the following names mozcrt19.dll, mozsqlite3.dll, or sqlite.dll.

```batch
Extexport.exe {PATH_ABSOLUTE:folder} foo bar
```

- **Usecase:** Execute dll file
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- http://www.hexacorn.com/blog/2018/04/24/extexport-yet-another-lolbin/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- A