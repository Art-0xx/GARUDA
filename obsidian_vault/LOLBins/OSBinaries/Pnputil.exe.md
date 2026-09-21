---
Acknowledgement:
- Handle: '@LuxNoBulIshit'
  Person: Hai Vaknin(Lux)
- Person: Avihay el
Author: Hai vaknin (lux)
Code_Sample:
- Code: https://github.com/LuxNoBulIshit/test.inf/blob/main/inf
Commands:
- Category: Execute
  Command: pnputil.exe -i -a {PATH_ABSOLUTE:.inf}
  Description: Used for installing drivers
  MitreID: T1547
  OperatingSystem: Windows 7, Windows 10, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: INF
  Usecase: Add malicious driver
Created: 2020-12-25
Description: Used for installing drivers
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_susp_driver_installed_by_pnputil.yml
Full_Path:
- Path: C:\Windows\system32\pnputil.exe
Name: Pnputil.exe
mitre_data:
  technique_ids:
  - T1547
tags:
- lolbas/osbinaries
---

# Pnputil.exe

Used for installing drivers

# Path(s)

- `C:\Windows\system32\pnputil.exe`

# Execute Commands

Used for installing drivers

```batch
pnputil.exe -i -a {PATH_ABSOLUTE:.inf}
```

- **Usecase:** Add malicious driver
- **Privileges Required:** Administrator
- **MitreID:** `T1547`
- **Operating System(s):** Windows 7, Windows 10, Windows 11


# Acknowledgements

- Hai vaknin (lux) (Authored, 2020-12-25)
- Hai Vaknin(Lux) (@LuxNoBulIshit)
- Avihay el