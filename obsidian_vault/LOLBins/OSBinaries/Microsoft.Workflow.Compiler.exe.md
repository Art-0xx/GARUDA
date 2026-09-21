---
Acknowledgement:
- Handle: '@mattifestation'
  Person: Matt Graeber
- Handle: '@BergbomJohn'
  Person: John Bergbom
- Handle: '@FortyNorthSec'
  Person: FortyNorth Security
- Person: Bank Secur
Author: Conor Richard
Commands:
- Category: Execute
  Command: Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
  Description: Compile and execute C# or VB.net code in a XOML file referenced in
    the first argument (any extension accepted).
  MitreID: T1127
  OperatingSystem: Windows 10S, Windows 11
  Privileges: User
  Tags:
  - Execute: VB.Net
  - Execute: Csharp
  Usecase: Compile and run code
- Category: Execute
  Command: Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
  Description: Compile and execute C# or VB.net code in a XOML file referenced in
    the test.txt file.
  MitreID: T1127
  OperatingSystem: Windows 10S, Windows 11
  Privileges: User
  Tags:
  - Execute: XOML
  Usecase: Compile and run code
- Category: AWL Bypass
  Command: Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
  Description: Compile and execute C# or VB.net code in a XOML file referenced in
    the test.txt file.
  MitreID: T1127
  OperatingSystem: Windows 10S, Windows 11
  Privileges: User
  Tags:
  - Execute: XOML
  Usecase: Compile and run code
Created: 2018-10-22
Description: A utility included with .NET that is capable of compiling and executing
  C# or VB.net code.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_workflow_compiler.yml
- Splunk: https://github.com/splunk/security_content/blob/961a81d4a5cb5c5febec4894d6d812497171a85c/detections/endpoint/suspicious_microsoft_workflow_compiler_usage.yml
- Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/suspicious_microsoft_workflow_compiler_rename.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
- BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
- IOC: Microsoft.Workflow.Compiler.exe would not normally be run on workstations.
- IOC: The presence of csc.exe or vbc.exe as child processes of Microsoft.Workflow.Compiler.exe
- IOC: Presence of "<CompilerInput" in a text file.
Full_Path:
- Path: C:\Windows\Microsoft.Net\Framework64\v4.0.30319\Microsoft.Workflow.Compiler.exe
Name: Microsoft.Workflow.Compiler.exe
Resources:
- Link: https://twitter.com/mattifestation/status/1030445200475185154
- Link: https://posts.specterops.io/arbitrary-unsigned-code-execution-vector-in-microsoft-workflow-compiler-exe-3d9294bc5efb
- Link: https://gist.github.com/mattifestation/3e28d391adbd7fe3e0c722a107a25aba#file-workflowcompilerdetectiontests-ps1
- Link: https://gist.github.com/mattifestation/7ba8fc8f724600a9f525714c9cf767fd#file-createcompilerinputxml-ps1
- Link: https://www.forcepoint.com/blog/security-labs/using-c-post-powershell-attacks
- Link: https://www.fortynorthsecurity.com/microsoft-workflow-compiler-exe-veil-and-cobalt-strike/
- Link: https://medium.com/@Bank_Security/undetectable-c-c-reverse-shells-fab4c0ec4f15
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/osbinaries
---

# Microsoft.Workflow.Compiler.exe

A utility included with .NET that is capable of compiling and executing C# or VB.net code.

# Path(s)

- `C:\Windows\Microsoft.Net\Framework64\v4.0.30319\Microsoft.Workflow.Compiler.exe`

# AWL Bypass Commands

Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.

```batch
Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
```

- **Usecase:** Compile and run code
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10S, Windows 11



# Execute Commands

Compile and execute C# or VB.net code in a XOML file referenced in the first argument (any extension accepted).

```batch
Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
```

- **Usecase:** Compile and run code
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10S, Windows 11



Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.

```batch
Microsoft.Workflow.Compiler.exe {PATH} {PATH:.log}
```

- **Usecase:** Compile and run code
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10S, Windows 11



# Resource(s)

- https://twitter.com/mattifestation/status/1030445200475185154
- https://posts.specterops.io/arbitrary-unsigned-code-execution-vector-in-microsoft-workflow-compiler-exe-3d9294bc5efb
- https://gist.github.com/mattifestation/3e28d391adbd7fe3e0c722a107a25aba#file-workflowcompilerdetectiontests-ps1
- https://gist.github.com/mattifestation/7ba8fc8f724600a9f525714c9cf767fd#file-createcompilerinputxml-ps1
- https://www.forcepoint.com/blog/security-labs/using-c-post-powershell-attacks
- https://www.fortynorthsecurity.com/microsoft-workflow-compiler-exe-veil-and-cobalt-strike/
- https://medium.com/@Bank_Security/undetectable-c-c-reverse-shells-fab4c0ec4f15
# Acknowledgements

- Conor Richard (Authored, 2018-10-22)
- Matt Graeber (@mattifestation)
- John Bergbom (@BergbomJohn)
- FortyNorth Security (@FortyNorthSec)
- Bank Secur