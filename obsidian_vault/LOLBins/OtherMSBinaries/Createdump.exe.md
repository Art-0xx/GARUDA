---
Acknowledgement:
- Person: bo
Author: mr.d0x, Daniel Santos
Commands:
- Category: Dump
  Command: createdump.exe -n -f {PATH:.dmp} {PID}
  Description: Dump process by PID and create a minidump file. If "-f dump.dmp" is
    not specified, the file is created as '%TEMP%\dump.%p.dmp' where %p is the PID
    of the target process.
  MitreID: T1003
  OperatingSystem: Windows 10, Windows 11
  Privileges: SYSTEM
  Usecase: Dump process memory contents using PID.
Created: 2022-01-20
Description: Microsoft .NET Runtime Crash Dump Generator (included in .NET Core)
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_proc_dump_createdump.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_renamed_createdump.yml
- IOC: createdump.exe process with a command line containing the lsass.exe process
    id
Full_Path:
- Path: C:\Program Files\dotnet\shared\Microsoft.NETCore.App\<version>\createdump.exe
- Path: C:\Program Files (x86)\dotnet\shared\Microsoft.NETCore.App\<version>\createdump.exe
- Path: C:\Program Files\Microsoft Visual Studio\<version>\Community\dotnet\runtime\shared\Microsoft.NETCore.App\6.0.0\createdump.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\dotnet\runtime\shared\Microsoft.NETCore.App\6.0.0\createdump.exe
Name: Createdump.exe
Resources:
- Link: https://twitter.com/bopin2020/status/1366400799199272960
- Link: https://docs.microsoft.com/en-us/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/lab-1-3-capture-core-crash-dumps
mitre_data:
  technique_ids:
  - T1003
tags:
- lolbas/othermsbinaries
---

# Createdump.exe

Microsoft .NET Runtime Crash Dump Generator (included in .NET Core)

# Path(s)

- `C:\Program Files\dotnet\shared\Microsoft.NETCore.App\<version>\createdump.exe`
- `C:\Program Files (x86)\dotnet\shared\Microsoft.NETCore.App\<version>\createdump.exe`
- `C:\Program Files\Microsoft Visual Studio\<version>\Community\dotnet\runtime\shared\Microsoft.NETCore.App\6.0.0\createdump.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\dotnet\runtime\shared\Microsoft.NETCore.App\6.0.0\createdump.exe`

# Dump Commands

Dump process by PID and create a minidump file. If "-f dump.dmp" is not specified, the file is created as '%TEMP%\dump.%p.dmp' where %p is the PID of the target process.

```batch
createdump.exe -n -f {PATH:.dmp} {PID}
```

- **Usecase:** Dump process memory contents using PID.
- **Privileges Required:** SYSTEM
- **MitreID:** `T1003`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/bopin2020/status/1366400799199272960
- https://docs.microsoft.com/en-us/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/lab-1-3-capture-core-crash-dumps
# Acknowledgements

- mr.d0x, Daniel Santos (Authored, 2022-01-20)
- bo