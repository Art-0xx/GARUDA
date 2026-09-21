---
Acknowledgement:
- Person: A
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: ATBroker.exe /start malware
  Description: Start a registered Assistive Technology (AT).
  MitreID: T1218
  OperatingSystem: Windows 8, Windows 8.1, Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Executes code defined in registry for a new AT. Modifications must be made
    to the system registry to either register or modify an existing Assistive Technology
    (AT) service entry.
Created: 2018-05-25
Description: Helper binary for Assistive Technology (AT)
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_susp_atbroker.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/registry/registry_event/registry_event_susp_atbroker_change.yml
- IOC: Changes to HKCU\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\Configuration
- IOC: Changes to HKLM\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs
- IOC: Unknown AT starting C:\Windows\System32\ATBroker.exe /start malware
Full_Path:
- Path: C:\Windows\System32\Atbroker.exe
- Path: C:\Windows\SysWOW64\Atbroker.exe
Name: Atbroker.exe
Resources:
- Link: http://www.hexacorn.com/blog/2016/07/22/beyond-good-ol-run-key-part-42/
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Atbroker.exe

Helper binary for Assistive Technology (AT)

# Path(s)

- `C:\Windows\System32\Atbroker.exe`
- `C:\Windows\SysWOW64\Atbroker.exe`

# Execute Commands

Start a registered Assistive Technology (AT).

```batch
ATBroker.exe /start malware
```

- **Usecase:** Executes code defined in registry for a new AT. Modifications must be made to the system registry to either register or modify an existing Assistive Technology (AT) service entry.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- http://www.hexacorn.com/blog/2016/07/22/beyond-good-ol-run-key-part-42/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- A