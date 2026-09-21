---
Acknowledgement:
- Person: 4n4s
Author: 4n4s4zi
Commands:
- Category: Execute
  Command: mscopilot.exe --no-startup-window --disable-gpu-sandbox --gpu-launcher="{CMD}
    && taskkill /f /im mscopilot.exe &&"
  Description: '`mscopilot.exe` will spawn the provided command. Parent `mscopilot.exe`
    process needs to be killed to avoid command being executed an infinite number
    of times.'
  MitreID: T1218.015
  OperatingSystem: Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes a process under a trusted Microsoft signed binary
Created: 2026-04-14
Description: Microsoft Copilot app
Full_Path:
- Path: C:\Program Files (x86)\Microsoft\Copilot\Application\mscopilot.exe
Name: Mscopilot.exe
Resources:
- Link: https://github.com/4n4s4zi/tour-de-mscopilot
mitre_data:
  technique_ids:
  - T1218.015
tags:
- lolbas/othermsbinaries
---

# Mscopilot.exe

Microsoft Copilot app

# Path(s)

- `C:\Program Files (x86)\Microsoft\Copilot\Application\mscopilot.exe`

# Execute Commands

`mscopilot.exe` will spawn the provided command. Parent `mscopilot.exe` process needs to be killed to avoid command being executed an infinite number of times.

```batch
mscopilot.exe --no-startup-window --disable-gpu-sandbox --gpu-launcher="{CMD} && taskkill /f /im mscopilot.exe &&"
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 11



# Resource(s)

- https://github.com/4n4s4zi/tour-de-mscopilot
# Acknowledgements

- 4n4s4zi (Authored, 2026-04-14)
- 4n4s