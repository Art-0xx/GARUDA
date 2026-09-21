---
Acknowledgement:
- Handle: '@gN3mes1s'
  Person: Giuseppe N3mes1s
- Person: Avihay El
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: te.exe {PATH:.wsc}
  Description: Run COM Scriptlets (e.g. VBScript) by calling a Windows Script Component
    (WSC) file.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: WSH
  Usecase: Execute Visual Basic script stored in local Windows Script Component file.
- Category: Execute
  Command: te.exe {PATH:.dll}
  Description: Execute commands from a DLL file with Test Authoring and Execution
    Framework (TAEF) tests. See resources section for required structures.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL
  - Input: Custom Format
  Usecase: Execute DLL file.
Created: 2018-05-25
Description: Testing tool included with Microsoft Test Authoring and Execution Framework
  (TAEF).
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_susp_use_of_te_bin.yml
Full_Path:
- Path: no default
Name: te.exe
Resources:
- Link: https://twitter.com/gn3mes1s/status/927680266390384640
- Link: https://github.com/LOLBAS-Project/LOLBAS/pull/359
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/taef/authoring-tests
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# te.exe

Testing tool included with Microsoft Test Authoring and Execution Framework (TAEF).

# Path(s)

- `no default`

# Execute Commands

Run COM Scriptlets (e.g. VBScript) by calling a Windows Script Component (WSC) file.

```batch
te.exe {PATH:.wsc}
```

- **Usecase:** Execute Visual Basic script stored in local Windows Script Component file.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



Execute commands from a DLL file with Test Authoring and Execution Framework (TAEF) tests. See resources section for required structures.

```batch
te.exe {PATH:.dll}
```

- **Usecase:** Execute DLL file.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/gn3mes1s/status/927680266390384640
- https://github.com/LOLBAS-Project/LOLBAS/pull/359
- https://learn.microsoft.com/en-us/windows-hardware/drivers/taef/authoring-tests
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Giuseppe N3mes1s (@gN3mes1s)
- Avihay El