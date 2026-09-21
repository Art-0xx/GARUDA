---
Acknowledgement:
- Person: null
Author: Jimmy (@bohops)
Code_Sample:
- Code: https://github.com/ThunderGunExpress/BringYourOwnBuilder
Commands:
- Category: AWL Bypass
  Command: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe -v
    none -p C:\users\cpl.internal\desktop\asptest\ -f C:\users\cpl.internal\desktop\asptest\none
    -u
  Description: Execute C# code with the Build Provider and proper folder structure
    in place.
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Execute proxied payload with Microsoft signed binary to bypass application
    control solutions
Created: 2021-09-26
Description: ASP.NET Compilation Tool
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_aspnet_compiler.yml
Full_Path:
- Path: c:\Windows\Microsoft.NET\Framework\v4.0.30319\aspnet_compiler.exe
- Path: c:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe
Name: Aspnet_Compiler.exe
Resources:
- Link: https://ijustwannared.team/2020/08/01/the-curious-case-of-aspnet_compiler-exe/
- Link: https://docs.microsoft.com/en-us/dotnet/api/system.web.compilation.buildprovider.generatecode?view=netframework-4.8
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# Aspnet_Compiler.exe

ASP.NET Compilation Tool

# Path(s)

- `c:\Windows\Microsoft.NET\Framework\v4.0.30319\aspnet_compiler.exe`
- `c:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe`

# AWL Bypass Commands

Execute C# code with the Build Provider and proper folder structure in place.

```batch
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe -v none -p C:\users\cpl.internal\desktop\asptest\ -f C:\users\cpl.internal\desktop\asptest\none -u
```

- **Usecase:** Execute proxied payload with Microsoft signed binary to bypass application control solutions
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://ijustwannared.team/2020/08/01/the-curious-case-of-aspnet_compiler-exe/
- https://docs.microsoft.com/en-us/dotnet/api/system.web.compilation.buildprovider.generatecode?view=netframework-4.8
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)