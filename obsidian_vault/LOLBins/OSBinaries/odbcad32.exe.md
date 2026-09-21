---
Acknowledgement:
- Person: amonitoring
- Person: Eki
Author: Ekitji
Commands:
- Category: UAC Bypass
  Command: odbcad32.exe
  Description: Launch odbcad32.exe GUI, click 'Tracing' tab, click 'Browsing' button,
    enter abitrary command in the File Dialog's path, press enter.
  MitreID: T1548.002
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  - Application: GUI
  Usecase: Execute a binary as a high-integrity process without a UAC prompt.
Created: 2025-09-04
Description: ODBC Data Source Administrator to manage User/System DSNs and ODBC drivers.
Detection:
- IOC: odbcad32.exe spawning unexpected child processes.
Full_Path:
- Path: c:\windows\system32\odbcad32.exe
- Path: c:\windows\syswow64\odbcad32.exe
Name: odbcad32.exe
Resources:
- Link: https://medium.com/@thebinaryhashira/living-off-the-land-and-living-above-uac-6a66738d225c
mitre_data:
  technique_ids:
  - T1548.002
tags:
- lolbas/osbinaries
---

# odbcad32.exe

ODBC Data Source Administrator to manage User/System DSNs and ODBC drivers.

# Path(s)

- `c:\windows\system32\odbcad32.exe`
- `c:\windows\syswow64\odbcad32.exe`

# UAC Bypass Commands

Launch odbcad32.exe GUI, click 'Tracing' tab, click 'Browsing' button, enter abitrary command in the File Dialog's path, press enter.

```batch
odbcad32.exe
```

- **Usecase:** Execute a binary as a high-integrity process without a UAC prompt.
- **Privileges Required:** User
- **MitreID:** `T1548.002`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://medium.com/@thebinaryhashira/living-off-the-land-and-living-above-uac-6a66738d225c
# Acknowledgements

- Ekitji (Authored, 2025-09-04)
- amonitoring
- Eki