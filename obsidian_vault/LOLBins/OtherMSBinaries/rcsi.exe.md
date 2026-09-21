---
Acknowledgement:
- Person: Matt Nel
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: rcsi.exe {PATH:.csx}
  Description: Use embedded C# within the csx script to execute the code.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CSharp
  Usecase: Local execution of arbitrary C# code stored in local CSX file.
- Category: AWL Bypass
  Command: rcsi.exe {PATH:.csx}
  Description: Use embedded C# within the csx script to execute the code.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CSharp
  Usecase: Local execution of arbitrary C# code stored in local CSX file.
Created: 2018-05-25
Description: Non-Interactive command line inerface included with Visual Studio.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_csi_execution.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
- BlockRule: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_csi_execution.yml
Full_Path:
- Path: no default
Name: rcsi.exe
Resources:
- Link: https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# rcsi.exe

Non-Interactive command line inerface included with Visual Studio.

# Path(s)

- `no default`

# AWL Bypass Commands

Use embedded C# within the csx script to execute the code.

```batch
rcsi.exe {PATH:.csx}
```

- **Usecase:** Local execution of arbitrary C# code stored in local CSX file.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Execute Commands

Use embedded C# within the csx script to execute the code.

```batch
rcsi.exe {PATH:.csx}
```

- **Usecase:** Local execution of arbitrary C# code stored in local CSX file.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Matt Nel