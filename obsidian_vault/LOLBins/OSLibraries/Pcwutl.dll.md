---
Acknowledgement:
- Person: Matt harr
Author: LOLBAS Team
Commands:
- Category: Execute
  Command: rundll32.exe pcwutl.dll,LaunchApplication {PATH:.exe}
  Description: Launch executable by calling the LaunchApplication function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Launch an executable.
Created: 2018-05-25
Description: Microsoft HTML Viewer
Detection:
- Analysis: https://redcanary.com/threat-detection-report/techniques/rundll32/
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: c:\windows\system32\pcwutl.dll
- Path: c:\windows\syswow64\pcwutl.dll
Name: Pcwutl.dll
Resources:
- Link: https://twitter.com/harr0ey/status/989617817849876488
- Link: https://windows10dll.nirsoft.net/pcwutl_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Pcwutl.dll

Microsoft HTML Viewer

# Path(s)

- `c:\windows\system32\pcwutl.dll`
- `c:\windows\syswow64\pcwutl.dll`

# Execute Commands

Launch executable by calling the LaunchApplication function.

```batch
rundll32.exe pcwutl.dll,LaunchApplication {PATH:.exe}
```

- **Usecase:** Launch an executable.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/harr0ey/status/989617817849876488
- https://windows10dll.nirsoft.net/pcwutl_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Matt harr