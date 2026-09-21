---
Acknowledgement:
- Person: Eron Cla
Author: Eron Clarke
Commands:
- Category: UAC Bypass
  Command: ComputerDefaults.exe
  Description: Upon execution, ComputerDefaults.exe checks two registry values at
    HKEY_CURRENT_USER\Software\Classes\ms-settings\Shell\open\command; if these are
    set by an attacker, the set command will be executed as a high-integrity process
    without a UAC prompt being displayed to the user. See 'resources' for which registry
    keys/values to set.
  MitreID: T1548.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Execute a binary or script as a high-integrity process without a UAC prompt.
Created: 2024-09-24
Description: ComputerDefaults.exe is a Windows system utility for managing default
  applications for tasks like web browsing, emailing, and media playback.
Detection:
- IOC: Event ID 10
- IOC: A binary or script spawned as a child process of ComputerDefaults.exe
- IOC: Changes to HKEY_CURRENT_USER\Software\Classes\ms-settings\Shell\open\command
- Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/process_creation/proc_creation_win_uac_bypass_computerdefaults.yml
Full_Path:
- Path: C:\Windows\System32\ComputerDefaults.exe
- Path: C:\Windows\SysWOW64\ComputerDefaults.exe
Name: ComputerDefaults.exe
Resources:
- Link: https://gist.github.com/havoc3-3/812547525107bd138a1a839118a3a44b
mitre_data:
  technique_ids:
  - T1548.002
tags:
- lolbas/osbinaries
---

# ComputerDefaults.exe

ComputerDefaults.exe is a Windows system utility for managing default applications for tasks like web browsing, emailing, and media playback.

# Path(s)

- `C:\Windows\System32\ComputerDefaults.exe`
- `C:\Windows\SysWOW64\ComputerDefaults.exe`

# UAC Bypass Commands

Upon execution, ComputerDefaults.exe checks two registry values at HKEY_CURRENT_USER\Software\Classes\ms-settings\Shell\open\command; if these are set by an attacker, the set command will be executed as a high-integrity process without a UAC prompt being displayed to the user. See 'resources' for which registry keys/values to set.

```batch
ComputerDefaults.exe
```

- **Usecase:** Execute a binary or script as a high-integrity process without a UAC prompt.
- **Privileges Required:** User
- **MitreID:** `T1548.002`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/havoc3-3/812547525107bd138a1a839118a3a44b
# Acknowledgements

- Eron Clarke (Authored, 2024-09-24)
- Eron Cla