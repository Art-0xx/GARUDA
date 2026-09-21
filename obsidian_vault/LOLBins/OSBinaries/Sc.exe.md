---
Acknowledgement:
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works
    > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
  Description: Creates a new service and executes the file stored in the ADS.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary file hidden inside an alternate data stream
- Category: ADS
  Command: sc config {ExistingServiceName} binPath="\"c:\\ADS\\file.txt:cmd.exe\"
    /c echo works > \"c:\ADS\works.txt\"" & sc start {ExistingServiceName}
  Description: Modifies an existing service and executes the file stored in the ADS.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute binary file hidden inside an alternate data stream
Created: 2018-05-25
Description: Used by Windows to manage services
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_susp_service_creation.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_sc_change_sevice_image_path_by_non_admin.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_sc_service_path_modification.yml
- Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/sc_exe_manipulating_windows_services.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/lateral_movement_cmd_service.toml
- IOC: Unexpected service creation
- IOC: Unexpected service modification
Full_Path:
- Path: C:\Windows\System32\sc.exe
- Path: C:\Windows\SysWOW64\sc.exe
Name: Sc.exe
Resources:
- Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
mitre_data:
  technique_ids:
  - T1564.004
tags:
- lolbas/osbinaries
---

# Sc.exe

Used by Windows to manage services

# Path(s)

- `C:\Windows\System32\sc.exe`
- `C:\Windows\SysWOW64\sc.exe`

# ADS Commands

Creates a new service and executes the file stored in the ADS.

```batch
sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
```

- **Usecase:** Execute binary file hidden inside an alternate data stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Modifies an existing service and executes the file stored in the ADS.

```batch
sc config {ExistingServiceName} binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" & sc start {ExistingServiceName}
```

- **Usecase:** Execute binary file hidden inside an alternate data stream
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Oddvar