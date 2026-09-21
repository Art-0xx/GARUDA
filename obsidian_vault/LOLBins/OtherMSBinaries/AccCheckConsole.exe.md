---
Acknowledgement:
- Person: Ji
Author: bohops
Code_Sample:
- Code: https://docs.microsoft.com/en-us/windows/win32/winauto/custom-verification-routines
Commands:
- Category: Execute
  Command: AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
  Description: Load a managed DLL in the context of AccCheckConsole.exe. The -window
    switch value can be set to an arbitrary active window name.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Local execution of managed code from assembly DLL.
- Category: AWL Bypass
  Command: AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
  Description: Load a managed DLL in the context of AccCheckConsole.exe. The -window
    switch value can be set to an arbitrary active window name.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  Usecase: Local execution of managed code to bypass AppLocker.
Created: 2022-01-02
Description: Verifies UI accessibility requirements
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_susp_acccheckconsole.yml
- IOC: Sysmon Event ID 1 - Process Creation
- Analysis: https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
Full_Path:
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x86\AccChecker\AccCheckConsole.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x64\AccChecker\AccCheckConsole.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm\AccChecker\AccCheckConsole.exe
- Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm64\AccChecker\AccCheckConsole.exe
Name: AccCheckConsole.exe
Resources:
- Link: https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
- Link: https://twitter.com/bohops/status/1477717351017680899
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# AccCheckConsole.exe

Verifies UI accessibility requirements

# Path(s)

- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x86\AccChecker\AccCheckConsole.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x64\AccChecker\AccCheckConsole.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm\AccChecker\AccCheckConsole.exe`
- `C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm64\AccChecker\AccCheckConsole.exe`

# AWL Bypass Commands

Load a managed DLL in the context of AccCheckConsole.exe. The -window switch value can be set to an arbitrary active window name.

```batch
AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Local execution of managed code to bypass AppLocker.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Execute Commands

Load a managed DLL in the context of AccCheckConsole.exe. The -window switch value can be set to an arbitrary active window name.

```batch
AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
```

- **Usecase:** Local execution of managed code from assembly DLL.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Resource(s)

- https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
- https://twitter.com/bohops/status/1477717351017680899
# Acknowledgements

- bohops (Authored, 2022-01-02)
- Ji