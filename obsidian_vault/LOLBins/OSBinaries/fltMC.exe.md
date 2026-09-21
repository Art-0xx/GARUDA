---
Acknowledgement:
- Person: Carlos Pe
Author: John Lambert
Commands:
- Category: Tamper
  Command: fltMC.exe unload SysmonDrv
  Description: Unloads a driver used by security agents
  MitreID: T1562.001
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Admin
  Usecase: Defense evasion
Created: 2021-09-18
Description: Filter Manager Control Program used by Windows
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_fltmc_unload_driver_sysmon.yml
- Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_via_filter_manager.toml
- Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/unload_sysmon_filter_driver.yml
- IOC: 4688 events with fltMC.exe
Full_Path:
- Path: C:\Windows\System32\fltMC.exe
Name: fltMC.exe
Resources:
- Link: https://www.darkoperator.com/blog/2018/10/5/operating-offensively-against-sysmon
mitre_data:
  technique_ids:
  - T1562.001
tags:
- lolbas/osbinaries
---

# fltMC.exe

Filter Manager Control Program used by Windows

# Path(s)

- `C:\Windows\System32\fltMC.exe`

# Tamper Commands

Unloads a driver used by security agents

```batch
fltMC.exe unload SysmonDrv
```

- **Usecase:** Defense evasion
- **Privileges Required:** Admin
- **MitreID:** `T1562.001`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://www.darkoperator.com/blog/2018/10/5/operating-offensively-against-sysmon
# Acknowledgements

- John Lambert (Authored, 2021-09-18)
- Carlos Pe