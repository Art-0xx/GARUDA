---
Acknowledgement:
- Person: Nicky Tyrer
- Person: Evan Pena
- Person: Casey Erik
Author: Martin Sohn Christensen
Commands:
- Category: Execute
  Command: coregen.exe /L {PATH_ABSOLUTE:.dll} dummy_assembly_name
  Description: Loads the target .DLL in arbitrary path specified with /L.
  MitreID: T1055
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute DLL code
- Category: Execute
  Command: coregen.exe dummy_assembly_name
  Description: Loads the coreclr.dll in the corgen.exe directory (e.g. C:\Program
    Files\Microsoft Silverlight\5.1.50918.0).
  MitreID: T1055
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute DLL code
- Category: AWL Bypass
  Command: coregen.exe /L {PATH_ABSOLUTE:.dll} dummy_assembly_name
  Description: Loads the target .DLL in arbitrary path specified with /L. Since binary
    is signed it can also be used to bypass application whitelisting solutions.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute DLL code
Created: 2020-10-09
Description: Binary coregen.exe (Microsoft CoreCLR Native Image Generator) loads exported
  function GetCLRRuntimeHost from coreclr.dll or from .DLL in arbitrary path. Coregen
  is located within "C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\" or
  another version of Silverlight. Coregen is signed by Microsoft and bundled with
  Microsoft Silverlight.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/image_load/image_load_side_load_coregen.yml
- IOC: coregen.exe loading .dll file not in "C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\"
- IOC: coregen.exe loading .dll file not named coreclr.dll
- IOC: coregen.exe command line containing -L or -l
- IOC: coregen.exe command line containing unexpected/invald assembly name
- IOC: coregen.exe application crash by invalid assembly name
Full_Path:
- Path: C:\Program Files\Microsoft Silverlight\5.1.50918.0\coregen.exe
- Path: C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\coregen.exe
Name: coregen.exe
Resources:
- Link: https://www.youtube.com/watch?v=75XImxOOInU
- Link: https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
mitre_data:
  technique_ids:
  - T1055
  - T1218
tags:
- lolbas/othermsbinaries
---

# coregen.exe

Binary coregen.exe (Microsoft CoreCLR Native Image Generator) loads exported function GetCLRRuntimeHost from coreclr.dll or from .DLL in arbitrary path. Coregen is located within "C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\" or another version of Silverlight. Coregen is signed by Microsoft and bundled with Microsoft Silverlight.

# Path(s)

- `C:\Program Files\Microsoft Silverlight\5.1.50918.0\coregen.exe`
- `C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\coregen.exe`

# AWL Bypass Commands

Loads the target .DLL in arbitrary path specified with /L. Since binary is signed it can also be used to bypass application whitelisting solutions.

```batch
coregen.exe /L {PATH_ABSOLUTE:.dll} dummy_assembly_name
```

- **Usecase:** Execute DLL code
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Execute Commands

Loads the target .DLL in arbitrary path specified with /L.

```batch
coregen.exe /L {PATH_ABSOLUTE:.dll} dummy_assembly_name
```

- **Usecase:** Execute DLL code
- **Privileges Required:** User
- **MitreID:** `T1055`
- **Operating System(s):** Windows



Loads the coreclr.dll in the corgen.exe directory (e.g. C:\Program Files\Microsoft Silverlight\5.1.50918.0).

```batch
coregen.exe dummy_assembly_name
```

- **Usecase:** Execute DLL code
- **Privileges Required:** User
- **MitreID:** `T1055`
- **Operating System(s):** Windows



# Resource(s)

- https://www.youtube.com/watch?v=75XImxOOInU
- https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
# Acknowledgements

- Martin Sohn Christensen (Authored, 2020-10-09)
- Nicky Tyrer
- Evan Pena
- Casey Erik