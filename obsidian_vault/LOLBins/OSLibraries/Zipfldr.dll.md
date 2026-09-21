---
Acknowledgement:
- Handle: '@moriarty_meng'
  Person: Moriarty (Execution)
- Person: r0lan (Obfuscati
Author: LOLBAS Team
Commands:
- Category: Execute
  Command: rundll32.exe zipfldr.dll,RouteTheCall {PATH:.exe}
  Description: Launch an executable payload by calling RouteTheCall.
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Launch an executable.
- Category: Execute
  Command: rundll32.exe zipfldr.dll,RouteTheCall file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
  Description: Launch an executable payload by calling RouteTheCall (obfuscated).
  MitreID: T1218.011
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Launch an executable.
Created: 2018-05-25
Description: Compressed Folder library
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: c:\windows\system32\zipfldr.dll
- Path: c:\windows\syswow64\zipfldr.dll
Name: Zipfldr.dll
Resources:
- Link: https://twitter.com/moriarty_meng/status/977848311603380224
- Link: https://twitter.com/bohops/status/997896811904929792
- Link: https://windows10dll.nirsoft.net/zipfldr_dll.html
mitre_data:
  technique_ids:
  - T1218.011
tags:
- lolbas/oslibraries
---

# Zipfldr.dll

Compressed Folder library

# Path(s)

- `c:\windows\system32\zipfldr.dll`
- `c:\windows\syswow64\zipfldr.dll`

# Execute Commands

Launch an executable payload by calling RouteTheCall.

```batch
rundll32.exe zipfldr.dll,RouteTheCall {PATH:.exe}
```

- **Usecase:** Launch an executable.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



Launch an executable payload by calling RouteTheCall (obfuscated).

```batch
rundll32.exe zipfldr.dll,RouteTheCall file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
```

- **Usecase:** Launch an executable.
- **Privileges Required:** User
- **MitreID:** `T1218.011`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/moriarty_meng/status/977848311603380224
- https://twitter.com/bohops/status/997896811904929792
- https://windows10dll.nirsoft.net/zipfldr_dll.html
# Acknowledgements

- LOLBAS Team (Authored, 2018-05-25)
- Moriarty (Execution) (@moriarty_meng)
- r0lan (Obfuscati