---
Acknowledgement:
- Person: elc
Author: Oddvar Moe
Commands:
- Category: Copy
  Command: replace.exe {PATH_ABSOLUTE:.cab} {PATH_ABSOLUTE:folder} /A
  Description: Copy .cab file to destination
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copy files
- Category: Download
  Command: replace.exe {PATH_SMB:.exe} {PATH_ABSOLUTE:folder} /A
  Description: Download/Copy executable to specified folder
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file
Created: 2018-05-25
Description: Used to replace file with another file
Detection:
- IOC: Replace.exe retrieving files from remote server
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_replace.yml
Full_Path:
- Path: C:\Windows\System32\replace.exe
- Path: C:\Windows\SysWOW64\replace.exe
Name: Replace.exe
Resources:
- Link: https://twitter.com/elceef/status/986334113941655553
- Link: https://twitter.com/elceef/status/986842299861782529
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# Replace.exe

Used to replace file with another file

# Path(s)

- `C:\Windows\System32\replace.exe`
- `C:\Windows\SysWOW64\replace.exe`

# Download Commands

Download/Copy executable to specified folder

```batch
replace.exe {PATH_SMB:.exe} {PATH_ABSOLUTE:folder} /A
```

- **Usecase:** Download file
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Copy Commands

Copy .cab file to destination

```batch
replace.exe {PATH_ABSOLUTE:.cab} {PATH_ABSOLUTE:folder} /A
```

- **Usecase:** Copy files
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/elceef/status/986334113941655553
- https://twitter.com/elceef/status/986842299861782529
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- elc