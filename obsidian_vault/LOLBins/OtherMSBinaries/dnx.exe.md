---
Acknowledgement:
- Person: Matt Nel
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: dnx.exe {PATH_ABSOLUTE:folder}
  Description: Execute C# code located in the specified folder via 'Program.cs' and
    'Project.json' (Note - Requires dependencies)
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CSharp
  Usecase: Local execution of C# project stored in consoleapp folder.
Created: 2018-05-25
Description: .NET Execution environment file included with .NET.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_dnx.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Full_Path:
- Path: no default
Name: dnx.exe
Resources:
- Link: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# dnx.exe

.NET Execution environment file included with .NET.

# Path(s)

- `no default`

# Execute Commands

Execute C# code located in the specified folder via 'Program.cs' and 'Project.json' (Note - Requires dependencies)

```batch
dnx.exe {PATH_ABSOLUTE:folder}
```

- **Usecase:** Local execution of C# project stored in consoleapp folder.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt Nel