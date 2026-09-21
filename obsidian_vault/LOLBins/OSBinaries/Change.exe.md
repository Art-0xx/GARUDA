---
Acknowledgement:
- Person: Idan Ler
Author: Idan Lerman
Commands:
- Category: Execute
  Command: change.exe user
  Description: Once executed, `change.exe` will execute `chgusr.exe` in the same folder.
    Thus, if `change.exe` is copied to a folder and an arbitrary executable is renamed
    to `chgusr.exe`, `change.exe` will spawn it. Instead of `user`, it is also possible
    to use `port` or `logon` as command-line option.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Rename
  Usecase: Execute an arbitrary executable via trusted system executable.
Created: 2025-07-31
Description: Remote Desktop Services MultiUser Change Utility
Detection:
- IOC: change.exe being executed and executes a child process outside of its normal
    path of c:\windows\system32\ or c:\windows\syswow64\
Full_Path:
- Path: c:\windows\system32\change.exe
- Path: c:\windows\syswow64\change.exe
Name: Change.exe
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Change.exe

Remote Desktop Services MultiUser Change Utility

# Path(s)

- `c:\windows\system32\change.exe`
- `c:\windows\syswow64\change.exe`

# Execute Commands

Once executed, `change.exe` will execute `chgusr.exe` in the same folder. Thus, if `change.exe` is copied to a folder and an arbitrary executable is renamed to `chgusr.exe`, `change.exe` will spawn it. Instead of `user`, it is also possible to use `port` or `logon` as command-line option.

```batch
change.exe user
```

- **Usecase:** Execute an arbitrary executable via trusted system executable.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Idan Lerman (Authored, 2025-07-31)
- Idan Ler