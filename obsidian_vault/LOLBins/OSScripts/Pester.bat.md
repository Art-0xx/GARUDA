---
Acknowledgement:
- Handle: '@p0w3rsh3ll'
  Person: Emin Atac
- Person: Stamatis Chatziman
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Pester.bat [/help|?|-?|/?] "$null; {CMD}"
  Description: Execute code using Pester. The third parameter can be anything. The
    fourth is the payload.
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution
- Category: Execute
  Command: Pester.bat ;{PATH:.exe}
  Description: Execute code using Pester. Example here executes specified executable.
  MitreID: T1216
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution
Created: 2018-05-25
Description: Used as part of the Powershell pester
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_pester_1.yml
Full_Path:
- Path: c:\Program Files\WindowsPowerShell\Modules\Pester\<VERSION>\bin\Pester.bat
Name: Pester.bat
Resources:
- Link: https://twitter.com/Oddvarmoe/status/993383596244258816
- Link: https://twitter.com/_st0pp3r_/status/1560072680887525378
- Link: https://twitter.com/_st0pp3r_/status/1560072680887525378
mitre_data:
  technique_ids:
  - T1216
tags:
- lolbas/osscripts
---

# Pester.bat

Used as part of the Powershell pester

# Path(s)

- `c:\Program Files\WindowsPowerShell\Modules\Pester\<VERSION>\bin\Pester.bat`

# Execute Commands

Execute code using Pester. The third parameter can be anything. The fourth is the payload.

```batch
Pester.bat [/help|?|-?|/?] "$null; {CMD}"
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



Execute code using Pester. Example here executes specified executable.

```batch
Pester.bat ;{PATH:.exe}
```

- **Usecase:** Proxy execution
- **Privileges Required:** User
- **MitreID:** `T1216`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/Oddvarmoe/status/993383596244258816
- https://twitter.com/_st0pp3r_/status/1560072680887525378
- https://twitter.com/_st0pp3r_/status/1560072680887525378
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Emin Atac (@p0w3rsh3ll)
- Stamatis Chatziman