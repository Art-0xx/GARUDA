---
Acknowledgement:
- Handle: '@0gtweet'
  Person: Grzegorz Tworek
- Person: A
Author: Moshe Kaplan
Commands:
- Category: Execute
  Command: sigverif.exe
  Description: Launch sigverif.exe GUI, click 'Advanced', specify arbitrary executable
    path as 'log file name', then click 'View Log' to execute the binary.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  - Application: GUI
  Usecase: Execute arbitrary programs through a trusted Microsoft-signed binary to
    bypass application whitelisting.
Created: 2021-11-08
Description: File Signature Verification utility to verify digital signatures of files
Detection:
- IOC: sigverif.exe spawning unexpected child processes
Full_Path:
- Path: C:\Windows\System32\sigverif.exe
- Path: C:\Windows\SysWOW64\sigverif.exe
Name: Sigverif.exe
Resources:
- Link: https://twitter.com/0gtweet/status/1457676633809330184
- Link: https://www.hexacorn.com/blog/2018/04/27/i-shot-the-sigverif-exe-the-gui-based-lolbin/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Sigverif.exe

File Signature Verification utility to verify digital signatures of files

# Path(s)

- `C:\Windows\System32\sigverif.exe`
- `C:\Windows\SysWOW64\sigverif.exe`

# Execute Commands

Launch sigverif.exe GUI, click 'Advanced', specify arbitrary executable path as 'log file name', then click 'View Log' to execute the binary.

```batch
sigverif.exe
```

- **Usecase:** Execute arbitrary programs through a trusted Microsoft-signed binary to bypass application whitelisting.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/0gtweet/status/1457676633809330184
- https://www.hexacorn.com/blog/2018/04/27/i-shot-the-sigverif-exe-the-gui-based-lolbin/
# Acknowledgements

- Moshe Kaplan (Authored, 2021-11-08)
- Grzegorz Tworek (@0gtweet)
- A