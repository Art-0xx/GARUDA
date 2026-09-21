---
Acknowledgement:
- Person: Matan Ba
Author: Matan Bahar
Commands:
- Category: Execute
  Command: reset.exe session
  Description: Once executed, `reset.exe` will execute `rwinsta.exe` in the same folder.
    Thus, if `reset.exe` is copied to a folder and an arbitrary executable is renamed
    to `rwinsta.exe`, `reset.exe` will spawn it.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Rename
  Usecase: Execute an arbitrary executable via trusted system executable.
Created: 2025-07-31
Description: Remote Desktop Services Reset Utility
Detection:
- IOC: reset.exe being executed and executes rwinsta.exe outside of its normal path
    of c:\windows\system32\ or c:\windows\syswow64\
Full_Path:
- Path: c:\windows\system32\reset.exe
- Path: c:\windows\syswow64\reset.exe
Name: Reset.exe
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Reset.exe

Remote Desktop Services Reset Utility

# Path(s)

- `c:\windows\system32\reset.exe`
- `c:\windows\syswow64\reset.exe`

# Execute Commands

Once executed, `reset.exe` will execute `rwinsta.exe` in the same folder. Thus, if `reset.exe` is copied to a folder and an arbitrary executable is renamed to `rwinsta.exe`, `reset.exe` will spawn it.

```batch
reset.exe session
```

- **Usecase:** Execute an arbitrary executable via trusted system executable.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Matan Bahar (Authored, 2025-07-31)
- Matan Ba