---
Acknowledgement:
- Handle: '@YoSignals'
  Person: John Carroll
- Handle: '@elliotkillick'
  Person: Elliot Killick
- Person: Naor E
Author: Elliot Killick
Commands:
- Category: Execute
  Command: WorkFolders
  Description: Execute `control.exe` in the current working directory
  MitreID: T1218
  OperatingSystem: Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Rename
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism
- Category: Execute
  Command: WorkFolders
  Description: '`WorkFolders` attempts to execute `control.exe`. By modifying the
    default value of the App Paths registry key for `control.exe` in `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\App
    Paths\control.exe`, an attacker can achieve proxy execution.'
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Registry change
  Usecase: Proxy execution of a malicious payload via App Paths registry hijacking.
Created: 2021-08-16
Description: Work Folders
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_susp_workfolders.yml
- IOC: WorkFolders.exe should not be run on a normal workstation
- IOC: Registry modification to HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\App
    Paths\control.exe
Full_Path:
- Path: C:\Windows\System32\WorkFolders.exe
Name: WorkFolders.exe
Resources:
- Link: https://www.ctus.io/2021/04/12/exploading/
- Link: https://twitter.com/ElliotKillick/status/1449812843772227588
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# WorkFolders.exe

Work Folders

# Path(s)

- `C:\Windows\System32\WorkFolders.exe`

# Execute Commands

Execute `control.exe` in the current working directory

```batch
WorkFolders
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 8, Windows 8.1, Windows 10, Windows 11



`WorkFolders` attempts to execute `control.exe`. By modifying the default value of the App Paths registry key for `control.exe` in `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\control.exe`, an attacker can achieve proxy execution.

```batch
WorkFolders
```

- **Usecase:** Proxy execution of a malicious payload via App Paths registry hijacking.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://www.ctus.io/2021/04/12/exploading/
- https://twitter.com/ElliotKillick/status/1449812843772227588
# Acknowledgements

- Elliot Killick (Authored, 2021-08-16)
- John Carroll (@YoSignals)
- Elliot Killick (@elliotkillick)
- Naor E