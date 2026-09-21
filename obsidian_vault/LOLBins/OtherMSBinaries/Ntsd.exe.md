---
Acknowledgement:
- Person: Avihay El
Author: Avihay Eldad
Commands:
- Category: Execute
  Command: ntsd.exe -g {CMD}
  Description: Launches command through the debugging process; optionally add `-G`
    to exit the debugger automatically.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes an executable under a trusted microsoft signed binary.
Created: 2025-07-16
Description: Symbolic Debugger for Windows.
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\ntsd.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\ntsd.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\arm\ntsd.exe
- Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\arm64\ntsd.exe
Name: Ntsd.exe
Resources:
- Link: https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options
- Link: https://strontic.github.io/xcyclopedia/library/ntsd.exe-629EA12D527237B9CD945AC44C2DE80D.html
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Ntsd.exe

Symbolic Debugger for Windows.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\ntsd.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\ntsd.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\arm\ntsd.exe`
- `C:\Program Files (x86)\Windows Kits\10\Debuggers\arm64\ntsd.exe`

# Execute Commands

Launches command through the debugging process; optionally add `-G` to exit the debugger automatically.

```batch
ntsd.exe -g {CMD}
```

- **Usecase:** Executes an executable under a trusted microsoft signed binary.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options
- https://strontic.github.io/xcyclopedia/library/ntsd.exe-629EA12D527237B9CD945AC44C2DE80D.html
# Acknowledgements

- Avihay Eldad (Authored, 2025-07-16)
- Avihay El