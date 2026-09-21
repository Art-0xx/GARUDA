---
Acknowledgement:
- Person: Nick Ty
Author: '@bohops'
Commands:
- Category: Execute
  Command: verclsid.exe /S /C {CLSID}
  Description: Used to verify a COM object before it is instantiated by Windows Explorer
  MitreID: T1218.012
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: COM
  Usecase: Run a COM object created in registry to evade defensive counter measures
Created: 2018-12-04
Description: Used to verify a COM object before it is instantiated by Windows Explorer
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_verclsid_runs_com.yml
- Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/verclsid_clsid_execution.yml
Full_Path:
- Path: C:\Windows\System32\verclsid.exe
- Path: C:\Windows\SysWOW64\verclsid.exe
Name: Verclsid.exe
Resources:
- Link: https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
- Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
mitre_data:
  technique_ids:
  - T1218.012
tags:
- lolbas/osbinaries
---

# Verclsid.exe

Used to verify a COM object before it is instantiated by Windows Explorer

# Path(s)

- `C:\Windows\System32\verclsid.exe`
- `C:\Windows\SysWOW64\verclsid.exe`

# Execute Commands

Used to verify a COM object before it is instantiated by Windows Explorer

```batch
verclsid.exe /S /C {CLSID}
```

- **Usecase:** Run a COM object created in registry to evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218.012`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
- https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
# Acknowledgements

- @bohops (Authored, 2018-12-04)
- Nick Ty