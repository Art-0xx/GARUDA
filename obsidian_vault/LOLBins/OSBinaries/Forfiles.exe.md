---
Acknowledgement:
- Handle: '@vector_sec'
  Person: Eric
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: forfiles /p c:\windows\system32 /m notepad.exe /c "{CMD}"
  Description: Executes specified command since there is a match for notepad.exe in
    the c:\windows\System32 folder.
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Use forfiles to start a new process to evade defensive counter measures
- Category: ADS
  Command: forfiles /p c:\windows\system32 /m notepad.exe /c "{PATH_ABSOLUTE}:evil.exe"
  Description: Executes the evil.exe Alternate Data Stream (AD) since there is a match
    for notepad.exe in the c:\windows\system32 folder.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Use forfiles to start a new process from a binary hidden in an alternate
    data stream
Created: 2018-05-25
Description: Selects and executes a command on a file or set of files. This command
  is useful for batch processing.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_forfiles.yml
Full_Path:
- Path: C:\Windows\System32\forfiles.exe
- Path: C:\Windows\SysWOW64\forfiles.exe
Name: Forfiles.exe
Resources:
- Link: https://twitter.com/vector_sec/status/896049052642533376
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
mitre_data:
  technique_ids:
  - T1202
  - T1564.004
tags:
- lolbas/osbinaries
---

# Forfiles.exe

Selects and executes a command on a file or set of files. This command is useful for batch processing.

# Path(s)

- `C:\Windows\System32\forfiles.exe`
- `C:\Windows\SysWOW64\forfiles.exe`

# ADS Commands

Executes the evil.exe Alternate Data Stream (AD) since there is a match for notepad.exe in the c:\windows\system32 folder.

```batch
forfiles /p c:\windows\system32 /m notepad.exe /c "{PATH_ABSOLUTE}:evil.exe"
```

- **Usecase:** Use forfiles to start a new process from a binary hidden in an alternate data stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Executes specified command since there is a match for notepad.exe in the c:\windows\System32 folder.

```batch
forfiles /p c:\windows\system32 /m notepad.exe /c "{CMD}"
```

- **Usecase:** Use forfiles to start a new process to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/vector_sec/status/896049052642533376
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Eric (@vector_sec)
- Oddvar