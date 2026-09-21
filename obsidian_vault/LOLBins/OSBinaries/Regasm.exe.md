---
Acknowledgement:
- Person: Casey Sm
Author: Oddvar Moe
Commands:
- Category: AWL Bypass
  Command: regasm.exe {PATH:.dll}
  Description: Loads the target .NET DLL file and executes the RegisterClass function.
  MitreID: T1218.009
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Local Admin
  Tags:
  - Execute: DLL (.NET)
  Usecase: Execute code and bypass Application whitelisting
- Category: Execute
  Command: regasm.exe /U {PATH:.dll}
  Description: Loads the target .DLL file and executes the UnRegisterClass function.
  MitreID: T1218.009
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Execute code and bypass Application whitelisting
Created: 2018-05-25
Description: Part of .NET
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_regasm.yml
- Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/execution_register_server_program_connecting_to_the_internet.toml
- Splunk: https://github.com/splunk/security_content/blob/bc93e670f5dcb24e96fbe3664d6bcad92df5acad/docs/_stories/suspicious_regsvcs_regasm_activity.md
- Splunk: https://github.com/splunk/security_content/blob/bee2a4cefa533f286c546cbe6798a0b5dec3e5ef/detections/endpoint/detect_regasm_with_network_connection.yml
- IOC: regasm.exe executing dll file
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\regasm.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\regasm.exe
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\regasm.exe
Name: Regasm.exe
Resources:
- Link: https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
- Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
- Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.009/T1218.009.md
mitre_data:
  technique_ids:
  - T1218.009
tags:
- lolbas/osbinaries
---

# Regasm.exe

Part of .NET

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\regasm.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\regasm.exe`
- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\regasm.exe`

# AWL Bypass Commands

Loads the target .NET DLL file and executes the RegisterClass function.

```batch
regasm.exe {PATH:.dll}
```

- **Usecase:** Execute code and bypass Application whitelisting
- **Privileges Required:** Local Admin
- **MitreID:** `T1218.009`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Loads the target .DLL file and executes the UnRegisterClass function.

```batch
regasm.exe /U {PATH:.dll}
```

- **Usecase:** Execute code and bypass Application whitelisting
- **Privileges Required:** User
- **MitreID:** `T1218.009`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
- https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
- https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.009/T1218.009.md
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Sm