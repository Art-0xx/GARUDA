---
Acknowledgement:
- Person: Idan Ler
Author: Idan Lerman
Commands:
- Category: Execute
  Command: query.exe user
  Description: Once executed, `query.exe` will execute `quser.exe` in the same folder.
    Thus, if `query.exe` is copied to a folder and an arbitrary executable is renamed
    to `quser.exe`, `query.exe` will spawn it. Instead of `user`, it is also possible
    to use `session`, `termsession` or `process` as command-line option.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Rename
  Usecase: Execute an arbitrary executable via trusted system executable.
Created: 2025-07-31
Description: Remote Desktop Services MultiUser Query Utility
Detection:
- IOC: query.exe being executed and executes a child process outside of its normal
    path of c:\windows\system32\ or c:\windows\syswow64\
Full_Path:
- Path: c:\windows\system32\query.exe
- Path: c:\windows\syswow64\query.exe
Name: Query.exe
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Query.exe

Remote Desktop Services MultiUser Query Utility

# Path(s)

- `c:\windows\system32\query.exe`
- `c:\windows\syswow64\query.exe`

# Execute Commands

Once executed, `query.exe` will execute `quser.exe` in the same folder. Thus, if `query.exe` is copied to a folder and an arbitrary executable is renamed to `quser.exe`, `query.exe` will spawn it. Instead of `user`, it is also possible to use `session`, `termsession` or `process` as command-line option.

```batch
query.exe user
```

- **Usecase:** Execute an arbitrary executable via trusted system executable.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Idan Lerman (Authored, 2025-07-31)
- Idan Ler