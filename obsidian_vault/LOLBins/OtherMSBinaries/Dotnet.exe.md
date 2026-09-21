---
Acknowledgement:
- Handle: '@_felamos'
  Person: felamos
- Handle: '@bohops'
  Person: Jimmy
- Person: yama
Author: felamos
Commands:
- Category: AWL Bypass
  Command: dotnet.exe {PATH:.dll}
  Description: dotnet.exe will execute any DLL even if applocker is enabled.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with .NET installed
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Execute code bypassing AWL
- Category: Execute
  Command: dotnet.exe {PATH:.dll}
  Description: dotnet.exe will execute any DLL.
  MitreID: T1218
  OperatingSystem: Windows 7 and up with .NET installed
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Execute DLL
- Category: Execute
  Command: dotnet.exe fsi
  Description: dotnet.exe will open a console which allows for the execution of arbitrary
    F# commands
  MitreID: T1059
  OperatingSystem: Windows 10 and up with .NET SDK installed
  Privileges: User
  Tags:
  - Execute: FSharp
  Usecase: Execute arbitrary F# code
- Category: AWL Bypass
  Command: dotnet.exe msbuild {PATH:.csproj}
  Description: dotnet.exe with msbuild (SDK Version) will execute unsigned code
  MitreID: T1218
  OperatingSystem: Windows 10 and up with .NET Core installed
  Privileges: User
  Tags:
  - Execute: CSharp
  Usecase: Execute code bypassing AWL
Created: 2019-11-12
Description: dotnet.exe comes with .NET Framework
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_dotnet.yml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- IOC: dotnet.exe spawned an unknown process
Full_Path:
- Path: C:\Program Files\dotnet\dotnet.exe
Name: Dotnet.exe
Resources:
- Link: https://twitter.com/_felamos/status/1204705548668555264
- Link: https://gist.github.com/bohops/3f645a7238d8022830ecf5511b3ecfbc
- Link: https://bohops.com/2019/08/19/dotnet-core-a-vector-for-awl-bypass-defense-evasion/
- Link: https://learn.microsoft.com/en-us/dotnet/fsharp/tools/fsharp-interactive/
mitre_data:
  technique_ids:
  - T1218
  - T1059
tags:
- lolbas/othermsbinaries
---

# Dotnet.exe

dotnet.exe comes with .NET Framework

# Path(s)

- `C:\Program Files\dotnet\dotnet.exe`

# AWL Bypass Commands

dotnet.exe will execute any DLL even if applocker is enabled.

```batch
dotnet.exe {PATH:.dll}
```

- **Usecase:** Execute code bypassing AWL
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with .NET installed



dotnet.exe with msbuild (SDK Version) will execute unsigned code

```batch
dotnet.exe msbuild {PATH:.csproj}
```

- **Usecase:** Execute code bypassing AWL
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10 and up with .NET Core installed



# Execute Commands

dotnet.exe will execute any DLL.

```batch
dotnet.exe {PATH:.dll}
```

- **Usecase:** Execute DLL
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7 and up with .NET installed



dotnet.exe will open a console which allows for the execution of arbitrary F# commands

```batch
dotnet.exe fsi
```

- **Usecase:** Execute arbitrary F# code
- **Privileges Required:** User
- **MitreID:** `T1059`
- **Operating System(s):** Windows 10 and up with .NET SDK installed



# Resource(s)

- https://twitter.com/_felamos/status/1204705548668555264
- https://gist.github.com/bohops/3f645a7238d8022830ecf5511b3ecfbc
- https://bohops.com/2019/08/19/dotnet-core-a-vector-for-awl-bypass-defense-evasion/
- https://learn.microsoft.com/en-us/dotnet/fsharp/tools/fsharp-interactive/
# Acknowledgements

- felamos (Authored, 2019-11-12)
- felamos (@_felamos)
- Jimmy (@bohops)
- yama