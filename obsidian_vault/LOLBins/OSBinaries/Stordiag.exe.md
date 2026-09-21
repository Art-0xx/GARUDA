---
Acknowledgement:
- Handle: '@eral4m'
  Person: Eral4m
- Person: Eki
Author: Eral4m
Commands:
- Category: Execute
  Command: stordiag.exe
  Description: Once executed, Stordiag.exe will execute schtasks.exe systeminfo.exe
    and fltmc.exe - if stordiag.exe is copied to a folder and an arbitrary executable
    is renamed to one of these names, stordiag.exe will execute it.
  MitreID: T1218
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Possible defence evasion purposes.
- Category: Execute
  Command: stordiag.exe
  Description: Once executed, Stordiag.exe will execute schtasks.exe and powershell.exe
    - if stordiag.exe is copied to a folder and an arbitrary executable is renamed
    to one of these names, stordiag.exe will execute it.
  MitreID: T1218
  OperatingSystem: Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Possible defence evasion purposes.
Created: 2021-10-21
Description: Storage diagnostic tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_stordiag_susp_child_process.yml
- IOC: systeminfo.exe, fltmc.exe or schtasks.exe or powershell.exe being executed
    outside of their normal path of c:\windows\system32\ or c:\windows\syswow64\
Full_Path:
- Path: c:\windows\system32\stordiag.exe
- Path: c:\windows\syswow64\stordiag.exe
Name: Stordiag.exe
Resources:
- Link: https://twitter.com/eral4m/status/1451112385041911809
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Stordiag.exe

Storage diagnostic tool

# Path(s)

- `c:\windows\system32\stordiag.exe`
- `c:\windows\syswow64\stordiag.exe`

# Execute Commands

Once executed, Stordiag.exe will execute schtasks.exe systeminfo.exe and fltmc.exe - if stordiag.exe is copied to a folder and an arbitrary executable is renamed to one of these names, stordiag.exe will execute it.

```batch
stordiag.exe
```

- **Usecase:** Possible defence evasion purposes.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10



Once executed, Stordiag.exe will execute schtasks.exe and powershell.exe - if stordiag.exe is copied to a folder and an arbitrary executable is renamed to one of these names, stordiag.exe will execute it.

```batch
stordiag.exe
```

- **Usecase:** Possible defence evasion purposes.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 11



# Resource(s)

- https://twitter.com/eral4m/status/1451112385041911809
# Acknowledgements

- Eral4m (Authored, 2021-10-21)
- Eral4m (@eral4m)
- Eki