---
Acknowledgement:
- Handle: '@gN3mes1s'
  Person: Giuseppe N3mes1s
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: MavInject.exe 3110 /INJECTRUNNING {PATH_ABSOLUTE:.dll}
  Description: Inject evil.dll into a process with PID 3110.
  MitreID: T1218.013
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Inject dll file into running process
- Category: ADS
  Command: Mavinject.exe 4172 /INJECTRUNNING {PATH_ABSOLUTE}:file.dll
  Description: Inject file.dll stored as an Alternate Data Stream (ADS) into a process
    with PID 4172
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Inject dll file into running process
Created: 2018-05-25
Description: Used by App-v in Windows
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_mavinject_process_injection.yml
- IOC: mavinject.exe should not run unless APP-v is in use on the workstation
Full_Path:
- Path: C:\Windows\System32\mavinject.exe
- Path: C:\Windows\SysWOW64\mavinject.exe
Name: Mavinject.exe
Resources:
- Link: https://twitter.com/gN3mes1s/status/941315826107510784
- Link: https://twitter.com/Hexcorn/status/776122138063409152
- Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
mitre_data:
  technique_ids:
  - T1218.013
  - T1564.004
tags:
- lolbas/osbinaries
---

# Mavinject.exe

Used by App-v in Windows

# Path(s)

- `C:\Windows\System32\mavinject.exe`
- `C:\Windows\SysWOW64\mavinject.exe`

# ADS Commands

Inject file.dll stored as an Alternate Data Stream (ADS) into a process with PID 4172

```batch
Mavinject.exe 4172 /INJECTRUNNING {PATH_ABSOLUTE}:file.dll
```

- **Usecase:** Inject dll file into running process
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Inject evil.dll into a process with PID 3110.

```batch
MavInject.exe 3110 /INJECTRUNNING {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Inject dll file into running process
- **Privileges Required:** User
- **MitreID:** `T1218.013`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/gN3mes1s/status/941315826107510784
- https://twitter.com/Hexcorn/status/776122138063409152
- https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Giuseppe N3mes1s (@gN3mes1s)
- Oddvar