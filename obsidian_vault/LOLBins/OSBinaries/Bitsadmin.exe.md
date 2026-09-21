---
Acknowledgement:
- Handle: '@mubix'
  Person: Rob Fuller
- Handle: '@carnal0wnage'
  Person: Chris Gates
- Person: Oddvar
Author: Oddvar Moe
Commands:
- Category: ADS
  Command: bitsadmin /create 1 bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe
    bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL bitsadmin
    /RESUME 1 bitsadmin /complete 1
  Description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the
    job to run the target command from an Alternate data stream, then resume and complete
    the job.
  MitreID: T1564.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Performs execution of specified file in the alternate data stream, can
    be used as a defensive evasion or persistence technique.
- Category: Download
  Command: bitsadmin /create 1 bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe
    c:\data\playfolder\autoruns.exe bitsadmin /RESUME 1 bitsadmin /complete 1
  Description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the
    job to run the target command, then resume and complete the job.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Download file from Internet
- Category: Copy
  Command: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe
    c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin
    /reset
  Description: Command for copying cmd.exe to another folder
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Usecase: Copy file
- Category: Execute
  Command: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe
    c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\cmd.exe
    NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
  Description: One-liner that creates a bitsadmin job named 1, add cmd.exe to the
    job, configure the job to run the target command, then resume and complete the
    job.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Usecase: Execute binary file specified. Can be used as a defensive evasion.
Created: 2018-05-25
Description: Used for managing background intelligent transfer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_bitsadmin_download.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/web/proxy_generic/proxy_ua_bitsadmin_susp_tld.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_bitsadmin_potential_persistence.yml
- Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/bitsadmin_download_file.yml
- IOC: Child process from bitsadmin.exe
- IOC: bitsadmin creates new files
- IOC: bitsadmin adds data to alternate data stream
Full_Path:
- Path: C:\Windows\System32\bitsadmin.exe
- Path: C:\Windows\SysWOW64\bitsadmin.exe
Name: Bitsadmin.exe
Resources:
- Link: https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679
- Link: https://www.youtube.com/watch?v=_8xJaaQlpBo
- Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- Link: https://www.soc-labs.top/en/detections/100
mitre_data:
  technique_ids:
  - T1564.004
  - T1105
  - T1218
tags:
- lolbas/osbinaries
---

# Bitsadmin.exe

Used for managing background intelligent transfer

# Path(s)

- `C:\Windows\System32\bitsadmin.exe`
- `C:\Windows\SysWOW64\bitsadmin.exe`

# Execute Commands

One-liner that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.

```batch
bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\cmd.exe NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
```

- **Usecase:** Execute binary file specified. Can be used as a defensive evasion.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10



# ADS Commands

Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command from an Alternate data stream, then resume and complete the job.

```batch
bitsadmin /create 1 bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL bitsadmin /RESUME 1 bitsadmin /complete 1
```

- **Usecase:** Performs execution of specified file in the alternate data stream, can be used as a defensive evasion or persistence technique.
- **Privileges Required:** User
- **MitreID:** `T1564.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Copy Commands

Command for copying cmd.exe to another folder

```batch
bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin /reset
```

- **Usecase:** Copy file
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10



# Download Commands

Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.

```batch
bitsadmin /create 1 bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe c:\data\playfolder\autoruns.exe bitsadmin /RESUME 1 bitsadmin /complete 1
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679
- https://www.youtube.com/watch?v=_8xJaaQlpBo
- https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
- https://www.soc-labs.top/en/detections/100
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Rob Fuller (@mubix)
- Chris Gates (@carnal0wnage)
- Oddvar