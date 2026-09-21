---
Acknowledgement:
- Person: Sean Metc
Author: Tony Lambert
Commands:
- Category: Dump
  Command: ntdsutil.exe "ac i ntds" "ifm" "create full c:\" q q
  Description: Dump NTDS.dit into folder
  MitreID: T1003.003
  OperatingSystem: Windows
  Privileges: Administrator
  Usecase: Dumping of Active Directory NTDS.dit database
Created: 2020-01-10
Description: Command line utility used to export Active Directory.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_ntdsutil_usage.yml
- Splunk: https://github.com/splunk/security_content/blob/2b87b26bdc2a84b65b1355ffbd5174bdbdb1879c/detections/endpoint/ntdsutil_export_ntds.yml
- Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
- IOC: ntdsutil.exe with command line including "ifm"
Full_Path:
- Path: C:\Windows\System32\ntdsutil.exe
Name: ntdsutil.exe
Resources:
- Link: https://adsecurity.org/?p=2398#CreateIFM
mitre_data:
  technique_ids:
  - T1003.003
tags:
- lolbas/othermsbinaries
---

# ntdsutil.exe

Command line utility used to export Active Directory.

# Path(s)

- `C:\Windows\System32\ntdsutil.exe`

# Dump Commands

Dump NTDS.dit into folder

```batch
ntdsutil.exe "ac i ntds" "ifm" "create full c:\" q q
```

- **Usecase:** Dumping of Active Directory NTDS.dit database
- **Privileges Required:** Administrator
- **MitreID:** `T1003.003`
- **Operating System(s):** Windows



# Resource(s)

- https://adsecurity.org/?p=2398#CreateIFM
# Acknowledgements

- Tony Lambert (Authored, 2020-01-10)
- Sean Metc