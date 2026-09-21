---
Acknowledgement:
- Person: Andrew Kisliakov
- Person: mr.
Author: Andrew Kisliakov
Code_Sample:
- Code: https://github.com/lltltk/LOLBAS-research/tree/master/Teams
Commands:
- Category: Execute
  Command: teams.exe
  Description: Generate JavaScript payload and package.json, and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app\\"
    before executing.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: Node.JS
  Usecase: Execute JavaScript code
- Category: Execute
  Command: teams.exe
  Description: Generate JavaScript payload and package.json, archive in ASAR file
    and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app.asar" before executing.
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: Node.JS
  Usecase: Execute JavaScript code
- Category: Execute
  Command: teams.exe --disable-gpu-sandbox --gpu-launcher="{CMD} &&"
  Description: Teams spawns cmd.exe as a child process of teams.exe and executes the
    ping command
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes a process under a trusted Microsoft signed binary
Created: 2022-01-17
Description: Electron runtime binary which runs the Teams application
Detection:
- IOC: '%LOCALAPPDATA%\Microsoft\Teams\current\app directory created'
- IOC: '%LOCALAPPDATA%\Microsoft\Teams\current\app.asar file created/modified by non-Teams
    installer/updater'
- Sigma: https://github.com/SigmaHQ/sigma/blob/43277f26fc1c81fc98fc79147b711189e901b757/rules/windows/process_creation/proc_creation_win_susp_electron_exeuction_proxy.yml
Full_Path:
- Path: C:\Users\<username>\AppData\Local\Microsoft\Teams\current\Teams.exe
Name: Teams.exe
Resources:
- Link: https://l--k.uk/2022/01/16/microsoft-teams-and-other-electron-apps-as-lolbins/
mitre_data:
  technique_ids:
  - T1218.015
tags:
- lolbas/othermsbinaries
---

# Teams.exe

Electron runtime binary which runs the Teams application

# Path(s)

- `C:\Users\<username>\AppData\Local\Microsoft\Teams\current\Teams.exe`

# Execute Commands

Generate JavaScript payload and package.json, and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app\\" before executing.

```batch
teams.exe
```

- **Usecase:** Execute JavaScript code
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



Generate JavaScript payload and package.json, archive in ASAR file and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app.asar" before executing.

```batch
teams.exe
```

- **Usecase:** Execute JavaScript code
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



Teams spawns cmd.exe as a child process of teams.exe and executes the ping command

```batch
teams.exe --disable-gpu-sandbox --gpu-launcher="{CMD} &&"
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://l--k.uk/2022/01/16/microsoft-teams-and-other-electron-apps-as-lolbins/
# Acknowledgements

- Andrew Kisliakov (Authored, 2022-01-17)
- Andrew Kisliakov
- mr.