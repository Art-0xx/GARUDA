---
Acknowledgement:
- Handle: '@elliotkillick'
  Person: Elliot Killick
- Handle: '@bohops'
  Person: Jimmy
- Person: Grzegorz Two
Author: Elliot Killick
Commands:
- Category: Tamper
  Command: fsutil.exe file setZeroData offset=0 length=9999999999 {PATH_ABSOLUTE}
  Description: Zero out a file
  MitreID: T1485
  OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows
    10
  Privileges: User
  Usecase: Can be used to forensically erase a file
- Category: Tamper
  Command: 'fsutil.exe usn deletejournal /d c:'
  Description: Delete the USN journal volume to hide file creation activity
  MitreID: T1485
  OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows
    10
  Privileges: User
  Usecase: Can be used to hide file creation activity
- Category: Execute
  Command: fsutil.exe trace decode
  Description: Executes a pre-planted binary named netsh.exe from the current directory.
  MitreID: T1218
  OperatingSystem: Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Spawn a pre-planted executable from fsutil.exe.
Created: 2021-08-16
Description: File System Utility
Detection:
- IOC: fsutil.exe should not be run on a normal workstation
- IOC: file setZeroData (not case-sensitive) in the process arguments
- IOC: Sysmon Event ID 1
- IOC: Execution of process fsutil.exe with trace decode could be suspicious
- IOC: Non-Windows netsh.exe execution
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff5102832031425f6eed011dd3a2e62653008c94/rules/windows/process_creation/proc_creation_win_susp_fsutil_usage.yml
Full_Path:
- Path: C:\Windows\System32\fsutil.exe
- Path: C:\Windows\SysWOW64\fsutil.exe
Name: Fsutil.exe
Resources:
- Link: https://twitter.com/0gtweet/status/1720724516324704404
mitre_data:
  technique_ids:
  - T1485
  - T1218
tags:
- lolbas/osbinaries
---

# Fsutil.exe

File System Utility

# Path(s)

- `C:\Windows\System32\fsutil.exe`
- `C:\Windows\SysWOW64\fsutil.exe`

# Tamper Commands

Zero out a file

```batch
fsutil.exe file setZeroData offset=0 length=9999999999 {PATH_ABSOLUTE}
```

- **Usecase:** Can be used to forensically erase a file
- **Privileges Required:** User
- **MitreID:** `T1485`
- **Operating System(s):** Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10



Delete the USN journal volume to hide file creation activity

```batch
fsutil.exe usn deletejournal /d c:
```

- **Usecase:** Can be used to hide file creation activity
- **Privileges Required:** User
- **MitreID:** `T1485`
- **Operating System(s):** Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10



# Execute Commands

Executes a pre-planted binary named netsh.exe from the current directory.

```batch
fsutil.exe trace decode
```

- **Usecase:** Spawn a pre-planted executable from fsutil.exe.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 11



# Resource(s)

- https://twitter.com/0gtweet/status/1720724516324704404
# Acknowledgements

- Elliot Killick (Authored, 2021-08-16)
- Elliot Killick (@elliotkillick)
- Jimmy (@bohops)
- Grzegorz Two