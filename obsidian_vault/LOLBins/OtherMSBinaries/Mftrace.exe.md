---
Acknowledgement:
- Person: fabri
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Mftrace.exe {PATH:.exe}
  Description: Launch specified executable as a subprocess of Mftrace.exe.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Local execution of cmd.exe as a subprocess of Mftrace.exe.
Created: 2018-05-25
Description: Trace log generation tool for Media Foundation Tools.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_mftrace.yml
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x86\mftrace.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x64\mftrace.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\x86\mftrace.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\x64\mftrace.exe
Name: Mftrace.exe
Resources:
- Link: https://twitter.com/0rbz_/status/988911181422186496
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Mftrace.exe

Trace log generation tool for Media Foundation Tools.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x86\mftrace.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x64\mftrace.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\x86\mftrace.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\x64\mftrace.exe`

# Execute Commands

Launch specified executable as a subprocess of Mftrace.exe.

```batch
Mftrace.exe {PATH:.exe}
```

- **Usecase:** Local execution of cmd.exe as a subprocess of Mftrace.exe.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/0rbz_/status/988911181422186496
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- fabri