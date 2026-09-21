---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Runonce.exe /AlternateShellStartup
  Description: Executes a Run Once Task that has been configured in the registry.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Administrator
  Tags:
  - Execute: CMD
  Usecase: Persistence, bypassing defensive counter measures
Created: 2018-05-25
Description: Executes a Run Once Task that has been configured in the registry
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/registry/registry_event/registry_event_runonce_persistence.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_runonce_execution.yml
- Elastic: https://github.com/elastic/detection-rules/blob/2926e98c5d998706ef7e248a63fb0367c841f685/rules/windows/persistence_run_key_and_startup_broad.toml
- IOC: Registy key add - HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\YOURKEY
Full_Path:
- Path: C:\Windows\System32\runonce.exe
- Path: C:\Windows\SysWOW64\runonce.exe
Name: Runonce.exe
Resources:
- Link: https://twitter.com/pabraeken/status/990717080805789697
- Link: https://cmatskas.com/configure-a-runonce-task-on-windows/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Runonce.exe

Executes a Run Once Task that has been configured in the registry

# Path(s)

- `C:\Windows\System32\runonce.exe`
- `C:\Windows\SysWOW64\runonce.exe`

# Execute Commands

Executes a Run Once Task that has been configured in the registry.

```batch
Runonce.exe /AlternateShellStartup
```

- **Usecase:** Persistence, bypassing defensive counter measures
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/pabraeken/status/990717080805789697
- https://cmatskas.com/configure-a-runonce-task-on-windows/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Brae