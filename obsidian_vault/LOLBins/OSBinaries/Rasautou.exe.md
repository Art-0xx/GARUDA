---
Acknowledgement:
- Person: Fire
Author: Tony Lambert
Commands:
- Category: Execute
  Command: rasautou -d {PATH:.dll} -p export_name -a a -e e
  Description: Loads the target .DLL specified in -d and executes the export specified
    in -p. Options removed in Windows 10.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1
  Privileges: User, Administrator in Windows 8
  Tags:
  - Execute: DLL
  Usecase: Execute DLL code
Created: 2020-01-10
Description: Windows Remote Access Dialer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_rasautou_dll_execution.yml
- IOC: rasautou.exe command line containing -d and -p
Full_Path:
- Path: C:\Windows\System32\rasautou.exe
Name: Rasautou.exe
Resources:
- Link: https://github.com/fireeye/DueDLLigence
- Link: https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Rasautou.exe

Windows Remote Access Dialer

# Path(s)

- `C:\Windows\System32\rasautou.exe`

# Execute Commands

Loads the target .DLL specified in -d and executes the export specified in -p. Options removed in Windows 10.

```batch
rasautou -d {PATH:.dll} -p export_name -a a -e e
```

- **Usecase:** Execute DLL code
- **Privileges Required:** User, Administrator in Windows 8
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1



# Resource(s)

- https://github.com/fireeye/DueDLLigence
- https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
# Acknowledgements

- Tony Lambert (Authored, 2020-01-10)
- Fire