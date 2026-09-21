---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: Dump
  Command: dump64.exe {PID} out.dmp
  Description: Creates a memory dump of the LSASS process.
  MitreID: T1003.001
  OperatingSystem: Windows 10, Windows 11
  Privileges: Administrator
  Usecase: Create memory dump and parse it offline to retrieve credentials.
Created: 2021-11-16
Description: Memory dump tool that comes with Microsoft Visual Studio
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_dump64.yml
- IOC: As a Windows SDK binary, execution on a system may be suspicious
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Visual Studio\Installer\Feedback\dump64.exe
Name: Dump64.exe
Resources:
- Link: https://twitter.com/mrd0x/status/1460597833917251595
mitre_data:
  technique_ids:
  - T1003.001
tags:
- lolbas/othermsbinaries
---

# Dump64.exe

Memory dump tool that comes with Microsoft Visual Studio

# Path(s)

- `C:\Program Files (x86)\Microsoft Visual Studio\Installer\Feedback\dump64.exe`

# Dump Commands

Creates a memory dump of the LSASS process.

```batch
dump64.exe {PID} out.dmp
```

- **Usecase:** Create memory dump and parse it offline to retrieve credentials.
- **Privileges Required:** Administrator
- **MitreID:** `T1003.001`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/mrd0x/status/1460597833917251595
# Acknowledgements

- mr.d0x (Authored, 2021-11-16)
- mr.