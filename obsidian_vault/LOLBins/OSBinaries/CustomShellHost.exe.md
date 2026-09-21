---
Acknowledgement:
- Person: John Carr
Author: Wietze Beukema
Commands:
- Category: Execute
  Command: CustomShellHost.exe
  Description: Executes explorer.exe (with command-line argument /NoShellRegistrationCheck)
    if present in the current working folder.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Can be used to evade defensive counter-measures
Created: 2021-11-14
Description: A host process that is used by custom shells when using Windows in Kiosk
  mode.
Detection:
- IOC: CustomShellHost.exe is unlikely to run on normal workstations
- Sigma: https://github.com/SigmaHQ/sigma/blob/ff5102832031425f6eed011dd3a2e62653008c94/rules/windows/process_creation/proc_creation_win_lolbin_customshellhost.yml
Full_Path:
- Path: C:\Windows\System32\CustomShellHost.exe
Name: CustomShellHost.exe
Resources:
- Link: https://twitter.com/YoSignals/status/1381353520088113154
- Link: https://docs.microsoft.com/en-us/windows/configuration/kiosk-shelllauncher
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# CustomShellHost.exe

A host process that is used by custom shells when using Windows in Kiosk mode.

# Path(s)

- `C:\Windows\System32\CustomShellHost.exe`

# Execute Commands

Executes explorer.exe (with command-line argument /NoShellRegistrationCheck) if present in the current working folder.

```batch
CustomShellHost.exe
```

- **Usecase:** Can be used to evade defensive counter-measures
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/YoSignals/status/1381353520088113154
- https://docs.microsoft.com/en-us/windows/configuration/kiosk-shelllauncher
# Acknowledgements

- Wietze Beukema (Authored, 2021-11-14)
- John Carr