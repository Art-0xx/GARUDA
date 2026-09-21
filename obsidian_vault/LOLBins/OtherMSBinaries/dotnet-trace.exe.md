---
Acknowledgement:
- Person: "Iv\xE1n Cabrer"
Author: "Iv\xE1n Cabrera"
Code_Sample:
- Code: https://github.com/dotnet/diagnostics/tree/main/src/Tools/dotnet-trace
Commands:
- Category: Execute
  Command: dotnet-trace.exe collect --duration 00:00:01 -- {PATH:.exe}
  Description: Launches the specified executable as a child process while collecting
    runtime trace data for 1 second during execution.
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Execute a child process under the guise of a legitimate .NET diagnostic
    tool.
Created: 2026-08-27
Description: .NET diagnostic tool for collecting runtime traces from .NET applications.
  Installed via 'dotnet tool install --global dotnet-trace' (.NET SDK required).
Detection:
- IOC: Process creation with command line containing "dotnet-trace collect" and "--"
Full_Path:
- Path: C:\Users\<user>\.dotnet\tools\dotnet-trace.exe
Name: dotnet-trace.exe
Resources:
- Link: https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-trace
- Link: https://github.com/dotnet/diagnostics
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# dotnet-trace.exe

.NET diagnostic tool for collecting runtime traces from .NET applications. Installed via 'dotnet tool install --global dotnet-trace' (.NET SDK required).

# Path(s)

- `C:\Users\<user>\.dotnet\tools\dotnet-trace.exe`

# Execute Commands

Launches the specified executable as a child process while collecting runtime trace data for 1 second during execution.

```batch
dotnet-trace.exe collect --duration 00:00:01 -- {PATH:.exe}
```

- **Usecase:** Execute a child process under the guise of a legitimate .NET diagnostic tool.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-trace
- https://github.com/dotnet/diagnostics
# Acknowledgements

- Iván Cabrera (Authored, 2026-08-27)
- Iván Cabrer