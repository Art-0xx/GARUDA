---
Acknowledgement:
- Person: timwh
Author: timwhite
Commands:
- Category: Execute
  Command: VSIISExeLauncher.exe -p {PATH:.exe} -a "{CMD:args}"
  Description: The above binary will execute other binary.
  MitreID: T1218
  OperatingSystem: Windows 10 and up with VS/VScode installed
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute any binary with given arguments.
Created: 2021-09-24
Description: Binary will execute specified binary. Part of VS/VScode installation.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_vsiisexelauncher.yml
- IOC: VSIISExeLauncher.exe spawned an unknown process
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\Extensions\Microsoft\Web
    Tools\ProjectSystem\VSIISExeLauncher.exe
Name: VSIISExeLauncher.exe
Resources:
- Link: https://github.com/timwhitez
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# VSIISExeLauncher.exe

Binary will execute specified binary. Part of VS/VScode installation.

# Path(s)

- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\Extensions\Microsoft\Web Tools\ProjectSystem\VSIISExeLauncher.exe`

# Execute Commands

The above binary will execute other binary.

```batch
VSIISExeLauncher.exe -p {PATH:.exe} -a "{CMD:args}"
```

- **Usecase:** Execute any binary with given arguments.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 and up with VS/VScode installed



# Resource(s)

- https://github.com/timwhitez
# Acknowledgements

- timwhite (Authored, 2021-09-24)
- timwh