---
Acknowledgement:
- Person: Philip Tsuker
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Register-cimprovider -path {PATH_ABSOLUTE:.dll}
  Description: Load the target .DLL.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute code within dll file
Created: 2018-05-25
Description: Used to register new wmi providers
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/35a7244c62820fbc5a832e50b1e224ac3a1935da/rules/windows/process_creation/proc_creation_win_susp_register_cimprovider.yml
- IOC: Register-cimprovider.exe execution and cmdline DLL load may be supsicious
Full_Path:
- Path: C:\Windows\System32\Register-cimprovider.exe
- Path: C:\Windows\SysWOW64\Register-cimprovider.exe
Name: Register-cimprovider.exe
Resources:
- Link: https://twitter.com/PhilipTsukerman/status/992021361106268161
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Register-cimprovider.exe

Used to register new wmi providers

# Path(s)

- `C:\Windows\System32\Register-cimprovider.exe`
- `C:\Windows\SysWOW64\Register-cimprovider.exe`

# Execute Commands

Load the target .DLL.

```batch
Register-cimprovider -path {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Execute code within dll file
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/PhilipTsukerman/status/992021361106268161
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Philip Tsuker