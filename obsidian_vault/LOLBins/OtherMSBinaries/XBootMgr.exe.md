---
Acknowledgement:
- Handle: '@AvihayEldad'
  Person: Avihay Eldad
- Person: Tommy War
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: xbootmgr.exe -trace "{boot|hibernate|standby|shutdown|rebootCycle}" -callBack
    {PATH:.exe}
  Description: Executes an executable after the trace is complete using the callBack
    parameter.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: Administrator
  Tags:
  - Execute: EXE
  Usecase: Executes code as part of post-trace automation flow.
- Category: Execute
  Command: xbootmgr.exe -trace "{boot|hibernate|standby|shutdown|rebootCycle}" -preTraceCmd
    {PATH:.exe}
  Description: Executes an executable before each trace run using the preTraceCmd
    parameter.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: Administrator
  Tags:
  - Execute: EXE
  Usecase: Executes code as part of pre-trace automation or staging.
Created: 2025-07-10
Description: Windows Performance Toolkit binary used to start performance traces.
Full_Path:
- Path: C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgr.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgr.exe
Name: XBootMgr.exe
Resources:
- Link: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# XBootMgr.exe

Windows Performance Toolkit binary used to start performance traces.

# Path(s)

- `C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgr.exe`
- `C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgr.exe`

# Execute Commands

Executes an executable after the trace is complete using the callBack parameter.

```batch
xbootmgr.exe -trace "{boot|hibernate|standby|shutdown|rebootCycle}" -callBack {PATH:.exe}
```

- **Usecase:** Executes code as part of post-trace automation flow.
- **Privileges Required:** Administrator
- **MitreID:** `T1202`
- **Operating System(s):** Windows



Executes an executable before each trace run using the preTraceCmd parameter.

```batch
xbootmgr.exe -trace "{boot|hibernate|standby|shutdown|rebootCycle}" -preTraceCmd {PATH:.exe}
```

- **Usecase:** Executes code as part of pre-trace automation or staging.
- **Privileges Required:** Administrator
- **MitreID:** `T1202`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
# Acknowledgements

- Avihay Eldad (Authored, 2025-07-10)
- Avihay Eldad (@AvihayEldad)
- Tommy War