---
Acknowledgement:
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Execute
  Command: OfflineScannerShell
  Description: Execute mpclient.dll library in the current working directory
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: DLL
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism
Created: 2021-08-16
Description: Windows Defender Offline Shell
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/bea6f18d350d9c9fdc067f93dde0e9b11cc22dc2/rules/windows/process_creation/proc_creation_win_lolbas_offlinescannershell.yml
- IOC: OfflineScannerShell.exe should not be run on a normal workstation
Full_Path:
- Path: C:\Program Files\Windows Defender\Offline\OfflineScannerShell.exe
Name: OfflineScannerShell.exe
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# OfflineScannerShell.exe

Windows Defender Offline Shell

# Path(s)

- `C:\Program Files\Windows Defender\Offline\OfflineScannerShell.exe`

# Execute Commands

Execute mpclient.dll library in the current working directory

```batch
OfflineScannerShell
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Elliot Killick (Authored, 2021-08-16)
- Elliot Kill