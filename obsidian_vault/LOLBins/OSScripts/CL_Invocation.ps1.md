---
Acknowledgement:
- Handle: '@bohops'
  Person: Jimmy
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: . C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1   \nSyncInvoke {CMD}
  Description: Import the PowerShell Diagnostic CL_Invocation script and call SyncInvoke
    to launch an executable.
  MitreID: T1216
  OperatingSystem: Windows 10
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution
Created: 2018-05-25
Description: Aero diagnostics script
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_cl_invocation.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/powershell/powershell_script/posh_ps_cl_invocation_lolscript.yml
Full_Path:
- Path: C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1
- Path: C:\Windows\diagnostics\system\Audio\CL_Invocation.ps1
- Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Invocation.ps1
Name: CL_Invocation.ps1
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# CL_Invocation.ps1

Aero diagnostics script

# Path(s)

- `C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1`
- `C:\Windows\diagnostics\system\Audio\CL_Invocation.ps1`
- `C:\Windows\diagnostics\system\WindowsUpdate\CL_Invocation.ps1`

# Execute Commands

Import the PowerShell Diagnostic CL_Invocation script and call SyncInvoke to launch an executable.

```batch
. C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1   \nSyncInvoke {CMD}
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10


# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Jimmy (@bohops)
- Pierre-Alexandre Brae