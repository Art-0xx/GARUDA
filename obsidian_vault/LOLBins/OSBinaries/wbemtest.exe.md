---
Acknowledgement:
- Person: Paul Sand
Author: saulpanders
Commands:
- Category: Execute
  Command: wbemtest.exe
  Description: Execute arbitary commands through WMI through a GUI managment interface
    for Web Based Enterprise Management testing (WBEM). Uses WMI to Create and instance
    of a Win32_Process WMI class with a commandline argument of the target command
    to spawn. Spawns a GUI so it requires interactive access. For a demo, see link
    to blog in resources.
  MitreID: T1047
  OperatingSystem: Windows 10, Windows 11
  Privileges: Any
  Tags:
  - Application: GUI
  - Execute: CMD
  Usecase: Execute arbitrary commands through WMI classes
Created: 2025-04-22
Description: WMI/WBEM Test Binary
Detection:
- IOC: wbemtest.exe binary spawned
Full_Path:
- Path: c:\windows\system32\wbem\wbemtest.exe
Name: wbemtest.exe
Resources:
- Link: https://saulpanders.github.io/2025/01/20/lolbas-wbemtest.html
mitre_data:
  technique_ids:
  - T1047
tags:
- lolbas/osbinaries
---

# wbemtest.exe

WMI/WBEM Test Binary

# Path(s)

- `c:\windows\system32\wbem\wbemtest.exe`

# Execute Commands

Execute arbitary commands through WMI through a GUI managment interface for Web Based Enterprise Management testing (WBEM). Uses WMI to Create and instance of a Win32_Process WMI class with a commandline argument of the target command to spawn. Spawns a GUI so it requires interactive access. For a demo, see link to blog in resources.

```batch
wbemtest.exe
```

- **Usecase:** Execute arbitrary commands through WMI classes
- **Privileges Required:** Any
- **MitreID:** `T1047`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://saulpanders.github.io/2025/01/20/lolbas-wbemtest.html
# Acknowledgements

- saulpanders (Authored, 2025-04-22)
- Paul Sand