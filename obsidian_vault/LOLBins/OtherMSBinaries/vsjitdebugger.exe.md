---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Vsjitdebugger.exe {PATH:.exe}
  Description: Executes specified executable as a subprocess of Vsjitdebugger.exe.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execution of local PE file as a subprocess of Vsjitdebugger.exe.
Created: 2018-05-25
Description: Just-In-Time (JIT) debugger included with Visual Studio
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_susp_use_of_vsjitdebugger_bin.yml
Full_Path:
- Path: c:\windows\system32\vsjitdebugger.exe
Name: vsjitdebugger.exe
Resources:
- Link: https://twitter.com/pabraeken/status/990758590020452353
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# vsjitdebugger.exe

Just-In-Time (JIT) debugger included with Visual Studio

# Path(s)

- `c:\windows\system32\vsjitdebugger.exe`

# Execute Commands

Executes specified executable as a subprocess of Vsjitdebugger.exe.

```batch
Vsjitdebugger.exe {PATH:.exe}
```

- **Usecase:** Execution of local PE file as a subprocess of Vsjitdebugger.exe.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/pabraeken/status/990758590020452353
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Brae