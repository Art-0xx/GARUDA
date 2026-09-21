---
Acknowledgement:
- Person: Kyle Hanslo
Author: Oddvar Moe
Code_Sample:
- Code: https://gist.github.com/KyleHanslovan/5e0f00d331984c1fb5be32c40f3b265a
Commands:
- Category: Execute
  Command: InfDefaultInstall.exe {PATH:.inf}
  Description: Executes SCT script using scrobj.dll from a command in entered into
    a specially prepared INF file.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Admin
  Tags:
  - Execute: INF
  Usecase: Code execution
Created: 2018-05-25
Description: Binary used to perform installation based on content inside inf files
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_infdefaultinstall_execute_sct_scripts.yml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Full_Path:
- Path: C:\Windows\System32\Infdefaultinstall.exe
- Path: C:\Windows\SysWOW64\Infdefaultinstall.exe
Name: Infdefaultinstall.exe
Resources:
- Link: https://twitter.com/KyleHanslovan/status/911997635455852544
- Link: https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
- Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Infdefaultinstall.exe

Binary used to perform installation based on content inside inf files

# Path(s)

- `C:\Windows\System32\Infdefaultinstall.exe`
- `C:\Windows\SysWOW64\Infdefaultinstall.exe`

# Execute Commands

Executes SCT script using scrobj.dll from a command in entered into a specially prepared INF file.

```batch
InfDefaultInstall.exe {PATH:.inf}
```

- **Usecase:** Code execution
- **Privileges Required:** Admin
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/KyleHanslovan/status/911997635455852544
- https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
- https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Kyle Hanslo