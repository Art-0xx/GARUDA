---
Acknowledgement:
- Handle: '@harr0ey'
  Person: Matt harr0ey
- Handle: '@vikas891'
  Person: Vikas Singh
- Person: Naor E
Author: Oddvar Moe
Code_Sample:
- Code: https://gist.github.com/ghosts621/1d0e0f43f7288c826035d5d011b6ca51
Commands:
- Category: Execute
  Command: Dxcap.exe -c {PATH_ABSOLUTE:.exe}
  Description: Launch specified executable as a subprocess of dxcap.exe. Note that
    you should have write permissions in the current working directory for the command
    to succeed; alternatively, add '-file c:\path\to\writable\location.ext' as first
    argument.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Local execution of a process as a subprocess of dxcap.exe
- Category: Execute
  Command: dxcap.exe -usage
  Description: Once executed, `dxcap.exe` will execute `xperf.exe` in the same folder.
    Thus, if `dxcap.exe` is copied to a folder and an arbitrary executable is renamed
    to `xperf.exe`, `dxcap.exe` will spawn it.
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Rename
  Usecase: Execute an arbitrary executable via trusted system executable.
Created: 2018-05-25
Description: DirectX diagnostics/debugger included with Visual Studio.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_susp_dxcap.yml
- IOC: dxcap.exe executing from outside of System32/SysWOW64
- IOC: dxcap.exe spawning Xperf.exe
- IOC: Xperf.exe executing from unusual directories (if not running from ADK path)
Full_Path:
- Path: C:\Windows\System32\dxcap.exe
- Path: C:\Windows\SysWOW64\dxcap.exe
Name: Dxcap.exe
Resources:
- Link: https://twitter.com/harr0ey/status/992008180904419328
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Dxcap.exe

DirectX diagnostics/debugger included with Visual Studio.

# Path(s)

- `C:\Windows\System32\dxcap.exe`
- `C:\Windows\SysWOW64\dxcap.exe`

# Execute Commands

Launch specified executable as a subprocess of dxcap.exe. Note that you should have write permissions in the current working directory for the command to succeed; alternatively, add '-file c:\path\to\writable\location.ext' as first argument.

```batch
Dxcap.exe -c {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Local execution of a process as a subprocess of dxcap.exe
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



Once executed, `dxcap.exe` will execute `xperf.exe` in the same folder. Thus, if `dxcap.exe` is copied to a folder and an arbitrary executable is renamed to `xperf.exe`, `dxcap.exe` will spawn it.

```batch
dxcap.exe -usage
```

- **Usecase:** Execute an arbitrary executable via trusted system executable.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/harr0ey/status/992008180904419328
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt harr0ey (@harr0ey)
- Vikas Singh (@vikas891)
- Naor E