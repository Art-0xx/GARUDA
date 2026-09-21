---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: IntelliTrace.exe launch /cp:"collectionplan.xml" /f:"c:\users\public\log"
    "C:\Windows\System32\calc.exe"
  Description: Launches an executable via Visual Studio command line utility.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes an executable under a trusted microsoft signed binary.
Created: 2025-09-21
Description: Visual Studio command-line tool for collecting and managing diagnostic
  trace files.
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\IntelliTrace\IntelliTrace.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\IntelliTrace\IntelliTrace.exe
Name: IntelliTrace.exe
Resources:
- Link: https://learn.microsoft.com/en-us/visualstudio/debugger/intellitrace
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# IntelliTrace.exe

Visual Studio command-line tool for collecting and managing diagnostic trace files.

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\IntelliTrace\IntelliTrace.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\IntelliTrace\IntelliTrace.exe`

# Execute Commands

Launches an executable via Visual Studio command line utility.

```batch
IntelliTrace.exe launch /cp:"collectionplan.xml" /f:"c:\users\public\log" "C:\Windows\System32\calc.exe"
```

- **Usecase:** Executes an executable under a trusted microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/visualstudio/debugger/intellitrace
# Acknowledgements

- Avihay Eldad (Authored, 2025-09-21)
- Avihay El