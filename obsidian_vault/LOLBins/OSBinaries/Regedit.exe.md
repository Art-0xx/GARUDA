---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: regedit /E {PATH_ABSOLUTE}:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
  Description: Export the target Registry key to the specified .REG file.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Hide registry data in alternate data stream
- Category: ADS
  Command: regedit {PATH_ABSOLUTE}:regfile.reg
  Description: Import the target .REG file into the Registry.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Import hidden registry data from alternate data stream
Created: 2018-05-25
Description: Used by Windows to manipulate registry
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_regedit_import_keys_ads.yml
- IOC: regedit.exe reading and writing to alternate data stream
- IOC: regedit.exe should normally not be executed by end-users
Full_Path:
- Path: C:\Windows\regedit.exe
Name: Regedit.exe
Resources:
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
mitre_data:
  technique_ids:
  - T1564.004
tags:
- lolbas/osbinaries
---

# Regedit.exe

Used by Windows to manipulate registry

# Path(s)

- `C:\Windows\regedit.exe`

# ADS Commands

Export the target Registry key to the specified .REG file.

```batch
regedit /E {PATH_ABSOLUTE}:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
```

- **Usecase:** Hide registry data in alternate data stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Import the target .REG file into the Registry.

```batch
regedit {PATH_ABSOLUTE}:regfile.reg
```

- **Usecase:** Import hidden registry data from alternate data stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar