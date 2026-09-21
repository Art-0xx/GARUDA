---
Acknowledgement:
- Handle: '@hexacorn'
  Person: Adam (Control_RunDLL, Control_RunDLLNoFallback)
- Handle: '@pabraeken'
  Person: Pierre-Alexandre Braeken (ShellExec_RunDLL)
- Handle: '@mattifestation'
  Person: Matt Graeber (ShellExec_RunDLL)
- Person: Kyle Hanslovan (ShellExec_RunD
Author: LOLBAS Team
Commands:
- Category: Execute
  Command: rundll32.exe shell32.dll,Control_RunDLL {PATH_ABSOLUTE:.dll}
  Description: Launch a DLL payload by calling the Control_RunDLL function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Load a DLL payload.
- Category: Execute
  Command: rundll32.exe shell32.dll,ShellExec_RunDLL {PATH:.exe}
  Description: Launch an executable by calling the ShellExec_RunDLL function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Run an executable payload.
- Category: Execute
  Command: rundll32 SHELL32.DLL,ShellExec_RunDLL {PATH:.exe} {CMD:args}
  Description: Launch command line by calling the ShellExec_RunDLL function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Run an executable payload.
- Category: Execute
  Command: rundll32.exe shell32.dll,#44 {PATH:.dll}
  Description: Load a DLL/CPL by calling undocumented Control_RunDLLNoFallback function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Load a DLL/CPL payload.
Created: 2018-05-25
Description: Windows Shell Common Dll
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/rundll32_control_rundll_hunt.yml
Full_Path:
- Path: c:\windows\system32\shell32.dll
- Path: c:\windows\syswow64\shell32.dll
Name: Shell32.dll
Resources:
- Link: https://twitter.com/Hexacorn/status/885258886428725250
- Link: https://twitter.com/pabraeken/status/991768766898941953
- Link: https://twitter.com/mattifestation/status/776574940128485376
- Link: https://twitter.com/KyleHanslovan/status/905189665120149506
- Link: https://windows10dll.nirsoft.net/shell32_dll.html
- Link: https://www.hexacorn.com/blog/2025/05/18/shell32-dll-44-lolbin/
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Shell32.dll

Windows Shell Common Dll

# Path(s)

- `c:\windows\system32\shell32.dll`
- `c:\windows\syswow64\shell32.dll`

# Execute Commands

Launch a DLL payload by calling the Control_RunDLL function.

```batch
rundll32.exe shell32.dll,Control_RunDLL {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Load a DLL payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling the ShellExec_RunDLL function.

```batch
rundll32.exe shell32.dll,ShellExec_RunDLL {PATH:.exe}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch command line by calling the ShellExec_RunDLL function.

```batch
rundll32 SHELL32.DLL,ShellExec_RunDLL {PATH:.exe} {CMD:args}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Load a DLL/CPL by calling undocumented Control_RunDLLNoFallback function.

```batch
rundll32.exe shell32.dll,#44 {PATH:.dll}
```

- **Usecase:** Load a DLL/CPL payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/Hexacorn/status/885258886428725250
- https://twitter.com/pabraeken/status/991768766898941953
- https://twitter.com/mattifestation/status/776574940128485376
- https://twitter.com/KyleHanslovan/status/905189665120149506
- https://windows10dll.nirsoft.net/shell32_dll.html
- https://www.hexacorn.com/blog/2025/05/18/shell32-dll-44-lolbin/
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Adam (Control_RunDLL, Control_RunDLLNoFallback) (@hexacorn)
- Pierre-Alexandre Braeken (ShellExec_RunDLL) (@pabraeken)
- Matt Graeber (ShellExec_RunDLL) (@mattifestation)
- Kyle Hanslovan (ShellExec_RunD