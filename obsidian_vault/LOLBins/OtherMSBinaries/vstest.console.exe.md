---
Acknowledgement:
- Person: Onat Uzunyayla
- Person: Ayberk Ha
Author: Onat Uzunyayla
Code_Sample:
- Code: https://github.com/onatuzunyayla/vstest-lolbin-example/
Commands:
- Category: AWL Bypass
  Command: vstest.console.exe {PATH:.dll}
  Description: VSTest functionality may allow an adversary to executes their malware
    by wrapping it as a test method then build it to a .exe or .dll file to be later
    run by vstest.console.exe. This may both allow AWL bypass or defense bypass in
    general
  MitreID: T1127
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Proxy Execution and AWL bypass, Adversaries may run malicious code embedded
    inside the test methods of crafted dll/exe
Created: 2023-09-08
Description: VSTest.Console.exe is the command-line tool to run tests
Detection:
- IOC: vstest.console.exe spawning unexpected processes
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\2022\TestAgent\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe
Name: vstest.console.exe
Resources:
- Link: https://learn.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2022
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# vstest.console.exe

VSTest.Console.exe is the command-line tool to run tests

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\2022\TestAgent\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe`

# AWL Bypass Commands

VSTest functionality may allow an adversary to executes their malware by wrapping it as a test method then build it to a .exe or .dll file to be later run by vstest.console.exe. This may both allow AWL bypass or defense bypass in general

```batch
vstest.console.exe {PATH:.dll}
```

- **Usecase:** Proxy Execution and AWL bypass, Adversaries may run malicious code embedded inside the test methods of crafted dll/exe
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://learn.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2022
# Acknowledgements

- Onat Uzunyayla (Authored, 2023-09-08)
- Onat Uzunyayla
- Ayberk Ha