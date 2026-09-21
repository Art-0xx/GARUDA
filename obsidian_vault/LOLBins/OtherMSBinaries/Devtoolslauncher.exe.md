---
Acknowledgement:
- Person: fela
Author: felamos
Commands:
- Category: Execute
  Command: devtoolslauncher.exe LaunchForDeploy {PATH_ABSOLUTE:.exe} "{CMD:args}"
    test
  Description: The above binary will execute other binary.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute any binary with given arguments and it will call `developertoolssvc.exe`.
    `developertoolssvc` is actually executing the binary.
- Category: Execute
  Command: devtoolslauncher.exe LaunchForDebug {PATH_ABSOLUTE:.exe} "{CMD:args}" test
  Description: The above binary will execute other binary.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Execute any binary with given arguments.
Created: 2019-10-04
Description: Binary will execute specified binary. Part of VS/VScode installation.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_devtoolslauncher.yml
- IOC: DeveloperToolsSvc.exe spawned an unknown process
Full_Path:
- Path: c:\windows\system32\devtoolslauncher.exe
Name: Devtoolslauncher.exe
Resources:
- Link: https://twitter.com/_felamos/status/1179811992841797632
- Link: https://www.virustotal.com/gui/file/84877a507af8b70c145777a87eaf28a8327c50a1563fe650f34572bef8a42ff6/details
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Devtoolslauncher.exe

Binary will execute specified binary. Part of VS/VScode installation.

# Path(s)

- `c:\windows\system32\devtoolslauncher.exe`

# Execute Commands

The above binary will execute other binary.

```batch
devtoolslauncher.exe LaunchForDeploy {PATH_ABSOLUTE:.exe} "{CMD:args}" test
```

- **Usecase:** Execute any binary with given arguments and it will call `developertoolssvc.exe`. `developertoolssvc` is actually executing the binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



The above binary will execute other binary.

```batch
devtoolslauncher.exe LaunchForDebug {PATH_ABSOLUTE:.exe} "{CMD:args}" test
```

- **Usecase:** Execute any binary with given arguments.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/_felamos/status/1179811992841797632
- https://www.virustotal.com/gui/file/84877a507af8b70c145777a87eaf28a8327c50a1563fe650f34572bef8a42ff6/details
# Acknowledgements

- felamos (Authored, 2019-10-04)
- fela