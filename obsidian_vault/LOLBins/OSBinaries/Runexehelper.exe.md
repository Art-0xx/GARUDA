---
Acknowledgement:
- Person: Grzegorz Two
Author: Grzegorz Tworek
Commands:
- Category: Execute
  Command: runexehelper.exe {PATH_ABSOLUTE:.exe}
  Description: 'Launches the specified exe. Prerequisites: (1) diagtrack_action_output
    environment variable must be set to an existing, writable folder; (2) runexewithargs_output.txt
    file cannot exist in the folder indicated by the variable.'
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11, Windows Server 2012, Windows Server 2016,
    Windows Server 2019, Windows Server 2022
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes arbitrary code
Created: 2022-12-13
Description: Launcher process
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/197615345b927682ab7ad7fa3c5f5bb2ed911eed/rules/windows/process_creation/proc_creation_win_lolbin_runexehelper.yml
- IOC: c:\windows\system32\runexehelper.exe is run
- IOC: Existence of runexewithargs_output.txt file
Full_Path:
- Path: c:\windows\system32\runexehelper.exe
Name: Runexehelper.exe
Resources:
- Link: https://twitter.com/0gtweet/status/1206692239839289344
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Runexehelper.exe

Launcher process

# Path(s)

- `c:\windows\system32\runexehelper.exe`

# Execute Commands

Launches the specified exe. Prerequisites: (1) diagtrack_action_output environment variable must be set to an existing, writable folder; (2) runexewithargs_output.txt file cannot exist in the folder indicated by the variable.

```batch
runexehelper.exe {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Executes arbitrary code
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11, Windows Server 2012, Windows Server 2016, Windows Server 2019, Windows Server 2022



# Resource(s)

- https://twitter.com/0gtweet/status/1206692239839289344
# Acknowledgements

- Grzegorz Tworek (Authored, 2022-12-13)
- Grzegorz Two