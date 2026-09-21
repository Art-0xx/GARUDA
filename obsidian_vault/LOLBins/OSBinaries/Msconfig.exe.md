---
Acknowledgement:
- Person: Pierre-Alexandre Brae
Author: Oddvar Moe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/mscfgtlc.xml
Commands:
- Category: Execute
  Command: Msconfig.exe -5
  Description: Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  Privileges: Administrator
  Tags:
  - Execute: CMD
  Usecase: Code execution using Msconfig.exe
Created: 2018-05-25
Description: MSConfig is a troubleshooting tool which is used to temporarily disable
  or re-enable software, device drivers or Windows services that run during startup
  process to help the user determine the cause of a problem with Windows
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_uac_bypass_msconfig_gui.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/file/file_event/file_event_win_uac_bypass_msconfig_gui.yml
- IOC: mscfgtlc.xml changes in system32 folder
Full_Path:
- Path: C:\Windows\System32\msconfig.exe
Name: Msconfig.exe
Resources:
- Link: https://twitter.com/pabraeken/status/991314564896690177
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# Msconfig.exe

MSConfig is a troubleshooting tool which is used to temporarily disable or re-enable software, device drivers or Windows services that run during startup process to help the user determine the cause of a problem with Windows

# Path(s)

- `C:\Windows\System32\msconfig.exe`

# Execute Commands

Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml.

```batch
Msconfig.exe -5
```

- **Usecase:** Code execution using Msconfig.exe
- **Privileges Required:** Administrator
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10



# Resource(s)

- https://twitter.com/pabraeken/status/991314564896690177
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Brae