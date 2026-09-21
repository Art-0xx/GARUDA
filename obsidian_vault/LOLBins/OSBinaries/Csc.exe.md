---
Author: Oddvar Moe
Commands:
- Category: Compile
  Command: csc.exe -out:{PATH:.exe} {PATH:.cs}
  Description: Use csc.exe to compile C# code, targeting the .NET Framework, stored
    in the specified .cs file and output the compiled version to the specified .exe
    path.
  MitreID: T1127
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
- Category: Compile
  Command: csc -target:library {PATH:.cs}
  Description: Use csc.exe to compile C# code, targeting the .NET Framework, stored
    in the specified .cs file and output the compiled version to a DLL file with the
    same name.
  MitreID: T1127
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
Created: 2018-05-25
Description: Binary file used by .NET Framework to compile C# code
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_csc_susp_parent.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_csc_susp_folder.yml
- Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_dotnet_compiler_parent_process.toml
- Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_execution_msbuild_started_unusal_process.toml
- IOC: Csc.exe should normally not run as System account unless it is used for development.
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v3.5\csc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v3.5\csc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\csc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\csc.exe
Name: Csc.exe
Resources:
- Link: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-optio
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# Csc.exe

Binary file used by .NET Framework to compile C# code

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe`
- `C:\Windows\Microsoft.NET\Framework\v3.5\csc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v3.5\csc.exe`
- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\csc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\csc.exe`

# Compile Commands

Use csc.exe to compile C# code, targeting the .NET Framework, stored in the specified .cs file and output the compiled version to the specified .exe path.

```batch
csc.exe -out:{PATH:.exe} {PATH:.cs}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Use csc.exe to compile C# code, targeting the .NET Framework, stored in the specified .cs file and output the compiled version to a DLL file with the same name.

```batch
csc -target:library {PATH:.cs}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-optio
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)