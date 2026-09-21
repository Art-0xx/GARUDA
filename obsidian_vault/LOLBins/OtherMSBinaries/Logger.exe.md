---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: logger.exe RUN "{CMD}"
  Description: Executes the command specified after the `RUN` parameter as a child
    of `logger.exe`.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes an abitrary command via a signed binary to evade detection.
- Category: Execute
  Command: logger.exe RUNW "{CMD}"
  Description: Executes the command specified after the `RUNW` parameter as a child
    of `logger.exe`.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes an abitrary command via a signed binary to evade detection.
- Category: Execute
  Command: logger.exe "{CMD}"
  Description: Executes the command specified as a child of `logger.exe`.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes an abitrary command via a signed binary to evade detection.
Created: 2025-07-13
Description: A logging configuration tool from the Windows Kits used to start and
  manage process logging.
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\logger.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\logger.exe
- Path: C:\Program Files\Windows Kits\10\Debuggers\x86\logger.exe
- Path: C:\Program Files\Windows Kits\10\Debuggers\x64\logger.exe
Name: Logger.exe
Resources:
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/logger
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# Logger.exe

A logging configuration tool from the Windows Kits used to start and manage process logging.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\logger.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\logger.exe`
- `C:\Program Files\Windows Kits\10\Debuggers\x86\logger.exe`
- `C:\Program Files\Windows Kits\10\Debuggers\x64\logger.exe`

# Execute Commands

Executes the command specified after the `RUN` parameter as a child of `logger.exe`.

```batch
logger.exe RUN "{CMD}"
```

- **Usecase:** Executes an abitrary command via a signed binary to evade detection.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows



Executes the command specified after the `RUNW` parameter as a child of `logger.exe`.

```batch
logger.exe RUNW "{CMD}"
```

- **Usecase:** Executes an abitrary command via a signed binary to evade detection.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows



Executes the command specified as a child of `logger.exe`.

```batch
logger.exe "{CMD}"
```

- **Usecase:** Executes an abitrary command via a signed binary to evade detection.
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/logger
# Acknowledgements

- Avihay Eldad (Authored, 2025-07-13)
- Avihay El