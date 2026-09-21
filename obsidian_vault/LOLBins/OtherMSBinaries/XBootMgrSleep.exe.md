---
Acknowledgement:
- Handle: '@AvihayEldad'
  Person: Avihay Eldad
- Person: Yuval Sa
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: xbootmgrsleep.exe 1000 {PATH:.exe}
  Description: Execute executable via XBootMgrSleep, with a 1 second (=1000 milliseconds)
    delay. Alternatively, it is also possible to replace the delay with any string
    for immediate execution.
  MitreID: T1202
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Performs execution of specified executable, can be used as a defense evasion
Created: 2024-06-13
Description: Windows Performance Toolkit binary used for tracing and analyzing system
  performance during sleep and resume transitions.
Full_Path:
- Path: C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
Name: XBootMgrSleep.exe
Resources:
- Link: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# XBootMgrSleep.exe

Windows Performance Toolkit binary used for tracing and analyzing system performance during sleep and resume transitions.

# Path(s)

- `C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe`
- `C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe`

# Execute Commands

Execute executable via XBootMgrSleep, with a 1 second (=1000 milliseconds) delay. Alternatively, it is also possible to replace the delay with any string for immediate execution.

```batch
xbootmgrsleep.exe 1000 {PATH:.exe}
```

- **Usecase:** Performs execution of specified executable, can be used as a defense evasion
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
# Acknowledgements

- Avihay Eldad (Authored, 2024-06-13)
- Avihay Eldad (@AvihayEldad)
- Yuval Sa