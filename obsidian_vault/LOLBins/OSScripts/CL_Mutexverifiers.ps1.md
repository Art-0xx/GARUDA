---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: . C:\Windows\diagnostics\system\AERO\CL_Mutexverifiers.ps1   \nrunAfterCancelProcess
    {PATH:.ps1}
  Description: Import the PowerShell Diagnostic CL_Mutexverifiers script and call
    runAfterCancelProcess to launch an executable.
  MitreID: T1216
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: PowerShell
  Usecase: Proxy execution
Created: 2018-05-25
Description: Proxy execution with CL_Mutexverifiers.ps1
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_cl_mutexverifiers.yml
Full_Path:
- Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
- Path: C:\Windows\diagnostics\system\Audio\CL_Mutexverifiers.ps1
- Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
- Path: C:\Windows\diagnostics\system\Video\CL_Mutexverifiers.ps1
- Path: C:\Windows\diagnostics\system\Speech\CL_Mutexverifiers.ps1
Name: CL_Mutexverifiers.ps1
Resources:
- Link: https://twitter.com/pabraeken/status/995111125447577600
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# CL_Mutexverifiers.ps1

Proxy execution with CL_Mutexverifiers.ps1

# Path(s)

- `C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1`
- `C:\Windows\diagnostics\system\Audio\CL_Mutexverifiers.ps1`
- `C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1`
- `C:\Windows\diagnostics\system\Video\CL_Mutexverifiers.ps1`
- `C:\Windows\diagnostics\system\Speech\CL_Mutexverifiers.ps1`

# Execute Commands

Import the PowerShell Diagnostic CL_Mutexverifiers script and call runAfterCancelProcess to launch an executable.

```batch
. C:\Windows\diagnostics\system\AERO\CL_Mutexverifiers.ps1   \nrunAfterCancelProcess {PATH:.ps1}
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10



# Resource(s)

- https://twitter.com/pabraeken/status/995111125447577600
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Brae