---
Acknowledgement:
- Handle: '@NickTyrer'
  Person: Nick Tyrer
- Person: Ji
Author: Jimmy (@bohops)
Code_Sample:
- Code: https://gist.github.com/NickTyrer/51eb8c774a909634fa69b4d06fc79ae1
Commands:
- Category: AWL Bypass
  Command: fsianycpu.exe {PATH:.fsscript}
  Description: Execute F# code via script file
  MitreID: T1059
  OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  Privileges: User
  Tags:
  - Execute: FSharp
  Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
- Category: AWL Bypass
  Command: fsianycpu.exe
  Description: Execute F# code via interactive command line
  MitreID: T1059
  OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  Privileges: User
  Tags:
  - Execute: FSharp
  Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
Created: 2021-09-26
Description: 32/64-bit FSharp (F#) Interpreter included with Visual Studio.
Detection:
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- IOC: FsiAnyCpu.exe execution may be suspicious on non-developer machines
- Sigma: https://github.com/SigmaHQ/sigma/blob/6b34764215b0e97e32cbc4c6325fc933d2695c3a/rules/windows/process_creation/proc_creation_win_lolbin_fsharp_interpreters.yml
Full_Path:
- Path: c:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp\fsianycpu.exe
Name: FsiAnyCpu.exe
Resources:
- Link: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
mitre_data:
  technique_ids:
  - T1059
tags:
- lolbas/othermsbinaries
---

# FsiAnyCpu.exe

32/64-bit FSharp (F#) Interpreter included with Visual Studio.

# Path(s)

- `c:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp\fsianycpu.exe`

# AWL Bypass Commands

Execute F# code via script file

```batch
fsianycpu.exe {PATH:.fsscript}
```

- **Usecase:** Execute payload with Microsoft signed binary to bypass WDAC policies
- **Privileges Required:** User
- **MitreID:** `T1059`
- **Operating System(s):** Windows 10 2004 (likely previous and newer versions as well)



Execute F# code via interactive command line

```batch
fsianycpu.exe
```

- **Usecase:** Execute payload with Microsoft signed binary to bypass WDAC policies
- **Privileges Required:** User
- **MitreID:** `T1059`
- **Operating System(s):** Windows 10 2004 (likely previous and newer versions as well)



# Resource(s)

- https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
# Acknowledgements

- Jimmy (@bohops) (Authored, 2021-09-26)
- Nick Tyrer (@NickTyrer)
- Ji