---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: windbg.exe -g {CMD}
  Description: Launches a command line through the debugging process; optionally add
    `-G` to exit the debugger automatically.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes an executable under a trusted microsoft signed binary.
Created: 2025-07-16
Description: Windows Debugger for advanced user-mode and kernel-mode debugging.
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\windbg.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\arm\windbg.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\arm64\windbg.exe
Name: WinDbg.exe
Resources:
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/windbg-command-line-options
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# WinDbg.exe

Windows Debugger for advanced user-mode and kernel-mode debugging.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\windbg.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\windbg.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\arm\windbg.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\arm64\windbg.exe`

# Execute Commands

Launches a command line through the debugging process; optionally add `-G` to exit the debugger automatically.

```batch
windbg.exe -g {CMD}
```

- **Usecase:** Executes an executable under a trusted microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/windbg-command-line-options
# Acknowledgements

- Avihay Eldad (Authored, 2025-07-16)
- Avihay El