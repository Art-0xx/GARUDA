---
Acknowledgement:
- Person: David Middlehu
Author: David Middlehurst
Commands:
- Category: Execute
  Command: wuauclt.exe /UpdateDeploymentProvider {PATH_ABSOLUTE:.dll} /RunHandlerComServer
  Description: Loads and executes DLL code on attach.
  MitreID: T1218
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute dll via attach/detach methods
Created: 2020-09-23
Description: Windows Update Client
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/network_connection/net_connection_win_wuauclt_network_connection.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_wuauclt.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_wuauclt_execution.yml
- IOC: wuauclt run with a parameter of a DLL path
- IOC: Suspicious wuauclt Internet/network connections
Full_Path:
- Path: C:\Windows\System32\wuauclt.exe
- Path: C:\Windows\UUS\amd64\wuauclt.exe
Name: wuauclt.exe
Resources:
- Link: https://dtm.uk/wuauclt/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# wuauclt.exe

Windows Update Client

# Path(s)

- `C:\Windows\System32\wuauclt.exe`
- `C:\Windows\UUS\amd64\wuauclt.exe`

# Execute Commands

Loads and executes DLL code on attach.

```batch
wuauclt.exe /UpdateDeploymentProvider {PATH_ABSOLUTE:.dll} /RunHandlerComServer
```

- **Usecase:** Execute dll via attach/detach methods
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10



# Resource(s)

- https://dtm.uk/wuauclt/
# Acknowledgements

- David Middlehurst (Authored, 2020-09-23)
- David Middlehu