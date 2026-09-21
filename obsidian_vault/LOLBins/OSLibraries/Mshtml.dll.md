---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: LOLBAS Team
Commands:
- Category: Execute
  Command: rundll32.exe Mshtml.dll,PrintHTML {PATH_ABSOLUTE:.hta}
  Description: 'Invoke an HTML Application via mshta.exe (note: pops a security warning
    and a print dialogue box).'
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: HTA
  Usecase: Launch an HTA application.
Created: 2018-05-25
Description: Microsoft HTML Viewer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: c:\windows\system32\mshtml.dll
- Path: c:\windows\syswow64\mshtml.dll
Name: Mshtml.dll
Resources:
- Link: https://twitter.com/pabraeken/status/998567549670477824
- Link: https://windows10dll.nirsoft.net/mshtml_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Mshtml.dll

Microsoft HTML Viewer

# Path(s)

- `c:\windows\system32\mshtml.dll`
- `c:\windows\syswow64\mshtml.dll`

# Execute Commands

Invoke an HTML Application via mshta.exe (note: pops a security warning and a print dialogue box).

```batch
rundll32.exe Mshtml.dll,PrintHTML {PATH_ABSOLUTE:.hta}
```

- **Usecase:** Launch an HTA application.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/pabraeken/status/998567549670477824
- https://windows10dll.nirsoft.net/mshtml_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Pierre-Alexandre Brae