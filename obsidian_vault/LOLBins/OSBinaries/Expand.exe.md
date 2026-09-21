---
Acknowledgement:
- Handle: '@infosecn1nja'
  Person: Rahmat Nurfauzi
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: Download
  Command: expand {PATH_SMB:.bat} {PATH_ABSOLUTE:.bat}
  Description: Copies source file to destination.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Use to copies the source file to the destination file
- Category: Copy
  Command: expand {PATH_ABSOLUTE:.source.ext} {PATH_ABSOLUTE:.dest.ext}
  Description: Copies source file to destination.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copies files from A to B
- Category: ADS
  Command: expand {PATH_SMB:.bat} {PATH_ABSOLUTE}:file.bat
  Description: Copies source file to destination Alternate Data Stream (ADS)
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copies files from A to B
Created: 2018-05-25
Description: Binary that expands one or more compressed files
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_expand_cabinet_files.yml
- Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_misc_lolbin_connecting_to_the_internet.toml
Full_Path:
- Path: C:\Windows\System32\Expand.exe
- Path: C:\Windows\SysWOW64\Expand.exe
Name: Expand.exe
Resources:
- Link: https://twitter.com/infosecn1nja/status/986628482858807297
- Link: https://twitter.com/Oddvarmoe/status/986709068759949319
mitre_data:
  technique_ids:
  - T1105
  - T1564.004
tags:
- lolbas/osbinaries
---

# Expand.exe

Binary that expands one or more compressed files

# Path(s)

- `C:\Windows\System32\Expand.exe`
- `C:\Windows\SysWOW64\Expand.exe`

# ADS Commands

Copies source file to destination Alternate Data Stream (ADS)

```batch
expand {PATH_SMB:.bat} {PATH_ABSOLUTE}:file.bat
```

- **Usecase:** Copies files from A to B
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Copy Commands

Copies source file to destination.

```batch
expand {PATH_ABSOLUTE:.source.ext} {PATH_ABSOLUTE:.dest.ext}
```

- **Usecase:** Copies files from A to B
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Download Commands

Copies source file to destination.

```batch
expand {PATH_SMB:.bat} {PATH_ABSOLUTE:.bat}
```

- **Usecase:** Use to copies the source file to the destination file
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/infosecn1nja/status/986628482858807297
- https://twitter.com/Oddvarmoe/status/986709068759949319
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Rahmat Nurfauzi (@infosecn1nja)
- Oddvar