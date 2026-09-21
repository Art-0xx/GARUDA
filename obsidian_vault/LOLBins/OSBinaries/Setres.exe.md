---
Acknowledgement:
- Person: Grzegorz Two
Author: Grzegorz Tworek
Commands:
- Category: Execute
  Command: setres.exe -w 800 -h 600
  Description: Sets the resolution and then launches 'choice' command from the working
    directory.
  MitreID: T1218
  OperatingSystem: Windows Server 2012, Windows Server 2016, Windows Server 2019,
    Windows Server 2022
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes arbitrary code
Created: 2022-10-21
Description: Configures display settings
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_setres.yml
- IOC: Unusual location for choice.exe file
- IOC: Process created from choice.com binary
- IOC: Existence of choice.cmd file
Full_Path:
- Path: c:\windows\system32\setres.exe
Name: Setres.exe
Resources:
- Link: https://twitter.com/0gtweet/status/1583356502340870144
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Setres.exe

Configures display settings

# Path(s)

- `c:\windows\system32\setres.exe`

# Execute Commands

Sets the resolution and then launches 'choice' command from the working directory.

```batch
setres.exe -w 800 -h 600
```

- **Usecase:** Executes arbitrary code
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows Server 2012, Windows Server 2016, Windows Server 2019, Windows Server 2022



# Resource(s)

- https://twitter.com/0gtweet/status/1583356502340870144
# Acknowledgements

- Grzegorz Tworek (Authored, 2022-10-21)
- Grzegorz Two