---
Acknowledgement:
- Person: Ang Kar
Author: Ang Kar Min
Commands:
- Category: Execute
  Command: setupugc.exe specialize
  Description: 'By first setting a command to a specific registry under `Setup-Unattend-Settings`,
    e.g. via: `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\UnattendSettings\Setup-Unattend-Settings\RunSynchronous\1"
    /v Path /d "{CMD}" /f`, executing the following will cause it to execute the command.

    '
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11, Windows Server 2025
  Privileges: Administrator
  Tags:
  - Execute: CMD
  - Requires: Registry Change
  Usecase: Execute binary through legitimate proxy
- Category: Execute
  Command: setupugc.exe auditUser
  Description: Same technique as above, but using the `auditUser` command-line option.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11, Windows Server 2025
  Privileges: Administrator
  Tags:
  - Execute: CMD
  - Requires: Registry Change
  Usecase: Execute binary through legitimate proxy
Created: 2026-04-20
Description: Setup Unattend Generic Command Processor used during Windows deployment.
Detection:
- IOC: '`setupugc.exe` spawning child processes outside of Windows Setup context.
    Legitimate parents are `setuphost.exe` or `setup.exe`.'
- IOC: Registry writes to `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\UnattendSettings\Setup-Unattend-Settings\RunSynchronous\`
    on a deployed system.
Full_Path:
- Path: C:\Windows\System32\setupugc.exe
- Path: C:\Windows\SysWOW64\setupugc.exe
Name: setupugc.exe
Resources:
- Link: https://strontic.github.io/xcyclopedia/library/setupugc.exe-3CFE082E8656AD66B5B9FFEB28CF4EC3.html
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# setupugc.exe

Setup Unattend Generic Command Processor used during Windows deployment.

# Path(s)

- `C:\Windows\System32\setupugc.exe`
- `C:\Windows\SysWOW64\setupugc.exe`

# Execute Commands

By first setting a command to a specific registry under `Setup-Unattend-Settings`, e.g. via: `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\UnattendSettings\Setup-Unattend-Settings\RunSynchronous\1" /v Path /d "{CMD}" /f`, executing the following will cause it to execute the command.


```batch
setupugc.exe specialize
```

- **Usecase:** Execute binary through legitimate proxy
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11, Windows Server 2025



Same technique as above, but using the `auditUser` command-line option.

```batch
setupugc.exe auditUser
```

- **Usecase:** Execute binary through legitimate proxy
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11, Windows Server 2025



# Resource(s)

- https://strontic.github.io/xcyclopedia/library/setupugc.exe-3CFE082E8656AD66B5B9FFEB28CF4EC3.html
# Acknowledgements

- Ang Kar Min (Authored, 2026-04-20)
- Ang Kar