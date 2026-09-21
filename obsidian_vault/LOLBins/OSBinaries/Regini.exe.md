---
Acknowledgement:
- Person: Eli Sa
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: regini.exe {PATH}:hidden.ini
  Description: Write registry keys from data inside the Alternate data stream.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Write to registry
Created: 2020-07-03
Description: Used to manipulate the registry
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_regini_ads.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_regini_execution.yml
- IOC: regini.exe reading from ADS
Full_Path:
- Path: C:\Windows\System32\regini.exe
- Path: C:\Windows\SysWOW64\regini.exe
Name: Regini.exe
Resources:
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
mitre_data:
  technique_ids:
  - T1564.004
tags:
- lolbas/osbinaries
---

# Regini.exe

Used to manipulate the registry

# Path(s)

- `C:\Windows\System32\regini.exe`
- `C:\Windows\SysWOW64\regini.exe`

# ADS Commands

Write registry keys from data inside the Alternate data stream.

```batch
regini.exe {PATH}:hidden.ini
```

- **Usecase:** Write to registry
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
# Acknowledgements

- Oddvar Moe (Authored, 2020-07-03)
- Eli Sa