---
Acknowledgement:
- Person: Casey Sm
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: csi.exe {PATH:.cs}
  Description: Use csi.exe to run unsigned C# code.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CSharp
  Usecase: Local execution of unsigned C# code.
Created: 2018-05-25
Description: Command line interface included with Visual Studio.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_csi_execution.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_csi_use_of_csharp_console.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Full_Path:
- Path: c:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\Roslyn\csi.exe
- Path: c:\Program Files (x86)\Microsoft Web Tools\Packages\Microsoft.Net.Compilers.X.Y.Z\tools\csi.exe
Name: csi.exe
Resources:
- Link: https://twitter.com/subTee/status/781208810723549188
- Link: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# csi.exe

Command line interface included with Visual Studio.

# Path(s)

- `c:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\Roslyn\csi.exe`
- `c:\Program Files (x86)\Microsoft Web Tools\Packages\Microsoft.Net.Compilers.X.Y.Z\tools\csi.exe`

# Execute Commands

Use csi.exe to run unsigned C# code.

```batch
csi.exe {PATH:.cs}
```

- **Usecase:** Local execution of unsigned C# code.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/subTee/status/781208810723549188
- https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Sm