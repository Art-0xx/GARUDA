---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: winfile.exe {PATH:.exe}
  Description: Execute an executable file with WinFile as a parent process.
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Performs execution of specified file, can be used as a defense evasion
Created: 2024-04-30
Description: Windows File Manager executable
Full_Path:
- Path: C:\Windows\System32\winfile.exe
- Path: C:\Windows\winfile.exe
- Path: C:\Program Files\WinFile\winfile.exe
- Path: C:\Program Files (x86)\WinFile\winfile.exe
- Path: C:\Program Files\WindowsApps\Microsoft.WindowsFileManager_10.3.0.0_x64__8wekyb3d8bbwe\WinFile\winfile.exe
Name: winfile.exe
Resources:
- Link: https://github.com/microsoft/winfile
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# winfile.exe

Windows File Manager executable

# Path(s)

- `C:\Windows\System32\winfile.exe`
- `C:\Windows\winfile.exe`
- `C:\Program Files\WinFile\winfile.exe`
- `C:\Program Files (x86)\WinFile\winfile.exe`
- `C:\Program Files\WindowsApps\Microsoft.WindowsFileManager_10.3.0.0_x64__8wekyb3d8bbwe\WinFile\winfile.exe`

# Execute Commands

Execute an executable file with WinFile as a parent process.

```batch
winfile.exe {PATH:.exe}
```

- **Usecase:** Performs execution of specified file, can be used as a defense evasion
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://github.com/microsoft/winfile
# Acknowledgements

- Avihay Eldad (Authored, 2024-04-30)
- Avihay El