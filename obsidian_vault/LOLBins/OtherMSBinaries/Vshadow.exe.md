---
Acknowledgement:
- Person: Ayberk Ha
Author: "Ayberk Hala\xE7"
Commands:
- Category: Execute
  Command: 'vshadow.exe -nw -exec={PATH_ABSOLUTE:.exe} C:'
  Description: Executes specified executable from vshadow.exe.
  MitreID: T1202
  OperatingSystem: Windows 10, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: EXE
  Usecase: Performs execution of specified executable file.
Created: 2023-09-06
Description: VShadow is a command-line tool that can be used to create and manage
  volume shadow copies.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c7998c92b3c5f23ea67045bee8ee364d2ed1a775/rules/windows/process_creation/proc_creation_win_vshadow_exec.yml
- IOC: vshadow.exe usage with -exec parameter
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\bin\<version>\x64\vshadow.exe
Name: Vshadow.exe
Resources:
- Link: https://learn.microsoft.com/en-us/windows/win32/vss/vshadow-tool-and-sample
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/othermsbinaries
---

# Vshadow.exe

VShadow is a command-line tool that can be used to create and manage volume shadow copies.

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\bin\<version>\x64\vshadow.exe`

# Execute Commands

Executes specified executable from vshadow.exe.

```batch
vshadow.exe -nw -exec={PATH_ABSOLUTE:.exe} C:
```

- **Usecase:** Performs execution of specified executable file.
- **Privileges Required:** Administrator
- **MitreID:** `T1202`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/windows/win32/vss/vshadow-tool-and-sample
# Acknowledgements

- Ayberk Halaç (Authored, 2023-09-06)
- Ayberk Ha