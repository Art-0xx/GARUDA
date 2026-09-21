---
Acknowledgement:
- Handle: '@bohops'
  Person: Jimmy (LaunchINFSection)
- Handle: '@0rbz_'
  Person: Fabrizio (RegisterOCX - DLL)
- Person: Pierre-Alexandre Braeken (RegisterOCX - C
Author: LOLBAS Team
Code_Sample:
- Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack.inf
- Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack_calc.sct
Commands:
- Category: AWL Bypass
  Command: rundll32.exe ieadvpack.dll,LaunchINFSection {PATH_ABSOLUTE:.inf},DefaultInstall_SingleUser,1,
  Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll
    in the .inf file by calling an information file directive (section name specified).
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Run local or remote script(let) code through INF file specification.
- Category: AWL Bypass
  Command: rundll32.exe ieadvpack.dll,LaunchINFSection {PATH_ABSOLUTE:.inf},,1,
  Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll
    in the .inf file by calling an information file directive (DefaultInstall section
    implied).
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Run local or remote script(let) code through INF file specification.
- Category: Execute
  Command: rundll32.exe ieadvpack.dll,RegisterOCX {PATH:.dll}
  Description: Launch a DLL payload by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Load a DLL payload.
- Category: Execute
  Command: rundll32.exe ieadvpack.dll,RegisterOCX {PATH:.exe}
  Description: Launch an executable by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Run an executable payload.
- Category: Execute
  Command: rundll32 ieadvpack.dll, RegisterOCX {CMD}
  Description: Launch command line by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Run an executable payload.
Created: 2018-05-25
Description: INF installer for Internet Explorer. Has much of the same functionality
  as advpack.dll.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_rundll32_application_control_bypass___advpack.yml
Full_Path:
- Path: c:\windows\system32\ieadvpack.dll
- Path: c:\windows\syswow64\ieadvpack.dll
Name: Ieadvpack.dll
Resources:
- Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
- Link: https://twitter.com/pabraeken/status/991695411902599168
- Link: https://twitter.com/0rbz_/status/974472392012689408
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Ieadvpack.dll

INF installer for Internet Explorer. Has much of the same functionality as advpack.dll.

# Path(s)

- `c:\windows\system32\ieadvpack.dll`
- `c:\windows\syswow64\ieadvpack.dll`

# AWL Bypass Commands

Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).

```batch
rundll32.exe ieadvpack.dll,LaunchINFSection {PATH_ABSOLUTE:.inf},DefaultInstall_SingleUser,1,
```

- **Usecase:** Run local or remote script(let) code through INF file specification.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).

```batch
rundll32.exe ieadvpack.dll,LaunchINFSection {PATH_ABSOLUTE:.inf},,1,
```

- **Usecase:** Run local or remote script(let) code through INF file specification.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Execute Commands

Launch a DLL payload by calling the RegisterOCX function.

```batch
rundll32.exe ieadvpack.dll,RegisterOCX {PATH:.dll}
```

- **Usecase:** Load a DLL payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling the RegisterOCX function.

```batch
rundll32.exe ieadvpack.dll,RegisterOCX {PATH:.exe}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch command line by calling the RegisterOCX function.

```batch
rundll32 ieadvpack.dll, RegisterOCX {CMD}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
- https://twitter.com/pabraeken/status/991695411902599168
- https://twitter.com/0rbz_/status/974472392012689408
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Jimmy (LaunchINFSection) (@bohops)
- Fabrizio (RegisterOCX - DLL) (@0rbz_)
- Pierre-Alexandre Braeken (RegisterOCX - C