---
Acknowledgement:
- Person: Nasreddine Bencherch
Author: Nasreddine Bencherchali
Commands:
- Category: Execute
  Command: OpenConsole.exe {PATH:.exe}
  Description: Execute specified process with OpenConsole.exe as parent process
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Use OpenConsole.exe as a proxy binary to evade defensive counter-measures
Created: 2022-06-17
Description: Console Window host for Windows Terminal
Detection:
- IOC: OpenConsole.exe spawning unexpected processes
- Sigma: https://github.com/SigmaHQ/sigma/blob/9e0ef7251b075f15e7abafbbec16d3230c5fa477/rules/windows/process_creation/proc_creation_win_lolbin_openconsole.yml
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os64\OpenConsole.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os86\OpenConsole.exe
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os64\OpenConsole.exe
- Path: C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.18.10301.0_x64__8wekyb3d8bbwe\OpenConsole.exe
Name: OpenConsole.exe
Resources:
- Link: https://twitter.com/nas_bench/status/1537563834478645252
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# OpenConsole.exe

Console Window host for Windows Terminal

# Path(s)

- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os64\OpenConsole.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os86\OpenConsole.exe`
- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\Terminal\ServiceHub\os64\OpenConsole.exe`
- `C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.18.10301.0_x64__8wekyb3d8bbwe\OpenConsole.exe`

# Execute Commands

Execute specified process with OpenConsole.exe as parent process

```batch
OpenConsole.exe {PATH:.exe}
```

- **Usecase:** Use OpenConsole.exe as a proxy binary to evade defensive counter-measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/nas_bench/status/1537563834478645252
# Acknowledgements

- Nasreddine Bencherchali (Authored, 2022-06-17)
- Nasreddine Bencherch