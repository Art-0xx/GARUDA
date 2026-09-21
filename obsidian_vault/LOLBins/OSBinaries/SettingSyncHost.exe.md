---
Acknowledgement:
- Handle: '@hexacorn'
  Person: Adam
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Execute
  Command: SettingSyncHost -LoadAndRunDiagScript {PATH:.exe}
  Description: Execute file specified in %COMSPEC%
  MitreID: T1218
  OperatingSystem: Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism
- Category: Execute
  Command: SettingSyncHost -LoadAndRunDiagScriptNoCab {PATH:.bat}
  Description: Execute a batch script in the background (no window ever pops up) which
    can be subverted to running arbitrary programs by setting the current working
    directory to %TMP% and creating files such as reg.bat/reg.exe in that directory
    thereby causing them to execute instead of the ones in C:\Windows\System32.
  MitreID: T1218
  OperatingSystem: Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism. Additionally, effectively act as a -WindowStyle Hidden option (as there
    is in PowerShell) for any arbitrary batch file.
Created: 2021-08-26
Description: Host Process for Setting Synchronization
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_settingsynchost.yml
- IOC: SettingSyncHost.exe should not be run on a normal workstation
Full_Path:
- Path: C:\Windows\System32\SettingSyncHost.exe
- Path: C:\Windows\SysWOW64\SettingSyncHost.exe
Name: SettingSyncHost.exe
Resources:
- Link: https://www.hexacorn.com/blog/2020/02/02/settingsynchost-exe-as-a-lolbin/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# SettingSyncHost.exe

Host Process for Setting Synchronization

# Path(s)

- `C:\Windows\System32\SettingSyncHost.exe`
- `C:\Windows\SysWOW64\SettingSyncHost.exe`

# Execute Commands

Execute file specified in %COMSPEC%

```batch
SettingSyncHost -LoadAndRunDiagScript {PATH:.exe}
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 8, Windows 8.1, Windows 10



Execute a batch script in the background (no window ever pops up) which can be subverted to running arbitrary programs by setting the current working directory to %TMP% and creating files such as reg.bat/reg.exe in that directory thereby causing them to execute instead of the ones in C:\Windows\System32.

```batch
SettingSyncHost -LoadAndRunDiagScriptNoCab {PATH:.bat}
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism. Additionally, effectively act as a -WindowStyle Hidden option (as there is in PowerShell) for any arbitrary batch file.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 8, Windows 8.1, Windows 10



# Resource(s)

- https://www.hexacorn.com/blog/2020/02/02/settingsynchost-exe-as-a-lolbin/
# Acknowledgements

- Elliot Killick (Authored, 2021-08-26)
- Adam (@hexacorn)
- Elliot Kill