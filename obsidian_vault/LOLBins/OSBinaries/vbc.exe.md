---
Acknowledgement:
- Person: Lior Adar
- Person: Hai Vaknin(L
Author: Lior Adar
Commands:
- Category: Compile
  Command: vbc.exe /target:exe {PATH_ABSOLUTE:.vb}
  Description: Binary file used by .NET to compile Visual Basic code to an executable.
  MitreID: T1127
  OperatingSystem: Windows 7, Windows 10, Windows 11
  Privileges: User
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
- Category: Compile
  Command: vbc -reference:Microsoft.VisualBasic.dll {PATH_ABSOLUTE:.vb}
  Description: Binary file used by .NET to compile Visual Basic code to an executable.
  MitreID: T1127
  OperatingSystem: Windows 7, Windows 10, Windows 11
  Privileges: User
  Usecase: Compile attacker code on system. Bypass defensive counter measures.
Created: 2020-02-27
Description: Binary file used for compile vbs code
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_visual_basic_compiler.yml
- Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_dotnet_compiler_parent_process.toml
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\vbc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v3.5\vbc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\vbc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\vbc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v3.5\vbc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\vbc.exe
Name: vbc.exe
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# vbc.exe

Binary file used for compile vbs code

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\vbc.exe`
- `C:\Windows\Microsoft.NET\Framework\v3.5\vbc.exe`
- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\vbc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\vbc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v3.5\vbc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\vbc.exe`

# Compile Commands

Binary file used by .NET to compile Visual Basic code to an executable.

```batch
vbc.exe /target:exe {PATH_ABSOLUTE:.vb}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 7, Windows 10, Windows 11



Binary file used by .NET to compile Visual Basic code to an executable.

```batch
vbc -reference:Microsoft.VisualBasic.dll {PATH_ABSOLUTE:.vb}
```

- **Usecase:** Compile attacker code on system. Bypass defensive counter measures.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 7, Windows 10, Windows 11


# Acknowledgements

- Lior Adar (Authored, 2020-02-27)
- Lior Adar
- Hai Vaknin(L