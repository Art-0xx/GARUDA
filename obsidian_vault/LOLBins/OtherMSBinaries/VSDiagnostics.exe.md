---
Acknowledgement:
- Person: Bobby Co
Author: Bobby Cooke
Commands:
- Category: Execute
  Command: VSDiagnostics.exe start 1 /launch:{PATH:.exe}
  Description: Starts a collection session with sessionID 1 and calls kernelbase.CreateProcessW
    to launch specified executable.
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Proxy execution of binary
- Category: Execute
  Command: VSDiagnostics.exe start 2 /launch:{PATH:.exe} /launchArgs:"{CMD:args}"
  Description: Starts a collection session with sessionID 2 and calls kernelbase.CreateProcessW
    to launch specified executable. Arguments specified in launchArgs are passed to
    CreateProcessW.
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Proxy execution of binary with arguments
Created: 2023-07-12
Description: Command-line tool used for performing diagnostics.
Detection:
- Sigma: https://github.com/tsale/Sigma_rules/blob/d5b4a09418edfeeb3a2d654f556d5bca82003cd7/LOL_BINs/VSDiagnostics_LoLBin.yml
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Team Tools\DiagnosticsHub\Collector\VSDiagnostics.exe
Name: VSDiagnostics.exe
Resources:
- Link: https://twitter.com/0xBoku/status/1679200664013135872
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# VSDiagnostics.exe

Command-line tool used for performing diagnostics.

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\2022\Community\Team Tools\DiagnosticsHub\Collector\VSDiagnostics.exe`

# Execute Commands

Starts a collection session with sessionID 1 and calls kernelbase.CreateProcessW to launch specified executable.

```batch
VSDiagnostics.exe start 1 /launch:{PATH:.exe}
```

- **Usecase:** Proxy execution of binary
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



Starts a collection session with sessionID 2 and calls kernelbase.CreateProcessW to launch specified executable. Arguments specified in launchArgs are passed to CreateProcessW.

```batch
VSDiagnostics.exe start 2 /launch:{PATH:.exe} /launchArgs:"{CMD:args}"
```

- **Usecase:** Proxy execution of binary with arguments
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/0xBoku/status/1679200664013135872
# Acknowledgements

- Bobby Cooke (Authored, 2023-07-12)
- Bobby Co