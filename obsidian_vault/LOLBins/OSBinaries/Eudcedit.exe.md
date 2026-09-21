---
Acknowledgement:
- Person: Matan Ba
Author: Matan Bahar
Commands:
- Category: UAC Bypass
  Command: eudcedit
  Description: Once executed, the Private Charecter Editor will be opened - click
    OK, then click File -> Font Links. In the next window choose the option "Link
    with Selected Fonts" and click on Save As, then in the opened enter the command
    you want to execute.
  MitreID: T1548.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: CMD
  - Application: GUI
  Usecase: Execute a binary or script as a high-integrity process without a UAC prompt.
Created: 2025-08-07
Description: Private Character Editor Windows Utility
Detection:
- IOC: Processes spawned by eudcedit.exe.
Full_Path:
- Path: c:\windows\system32\eudcedit.exe
- Path: c:\windows\syswow64\eudcedit.exe
Name: Eudcedit.exe
Resources:
- Link: https://medium.com/@matanb707/windows-fonts-exploitation-in-2025-bypassing-uac-with-eudcedit-915599705639
mitre_data:
  technique_ids:
  - T1548.002
tags:
- lolbas/osbinaries
---

# Eudcedit.exe

Private Character Editor Windows Utility

# Path(s)

- `c:\windows\system32\eudcedit.exe`
- `c:\windows\syswow64\eudcedit.exe`

# UAC Bypass Commands

Once executed, the Private Charecter Editor will be opened - click OK, then click File -> Font Links. In the next window choose the option "Link with Selected Fonts" and click on Save As, then in the opened enter the command you want to execute.

```batch
eudcedit
```

- **Usecase:** Execute a binary or script as a high-integrity process without a UAC prompt.
- **Privileges Required:** Administrator
- **MitreID:** `T1548.002`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://medium.com/@matanb707/windows-fonts-exploitation-in-2025-bypassing-uac-with-eudcedit-915599705639
# Acknowledgements

- Matan Bahar (Authored, 2025-08-07)
- Matan Ba