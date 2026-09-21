---
Acknowledgement:
- Handle: '@oulusoyum'
  Person: Onur Ulusoy
- Person: Matt Grae
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: tttracer.exe {PATH_ABSOLUTE:.exe}
  Description: Execute specified executable from tttracer.exe. Requires administrator
    privileges.
  MitreID: T1127
  OperatingSystem: Windows 10 1809 and newer, Windows 11
  Privileges: Administrator
  Tags:
  - Execute: EXE
  Usecase: Spawn process using other binary
- Category: Dump
  Command: TTTracer.exe -dumpFull -attach {PID}
  Description: Dumps process using tttracer.exe. Requires administrator privileges
  MitreID: T1003
  OperatingSystem: Windows 10 1809 and newer, Windows 11
  Privileges: Administrator
  Usecase: Dump process by PID
Created: 2019-11-05
Description: Used by Windows 1809 and newer to Debug Time Travel
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_tttracer_mod_load.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/image_load/image_load_tttracer_mod_load.yml
- Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
- IOC: Parent child relationship. Tttracer parent for executed command
Full_Path:
- Path: C:\Windows\System32\tttracer.exe
- Path: C:\Windows\SysWOW64\tttracer.exe
Name: Tttracer.exe
Resources:
- Link: https://twitter.com/oulusoyum/status/1191329746069655553
- Link: https://twitter.com/mattifestation/status/1196390321783025666
- Link: https://lists.samba.org/archive/cifs-protocol/2016-April/002877.html
mitre_data:
  technique_ids:
  - T1127
  - T1003
tags:
- lolbas/osbinaries
---

# Tttracer.exe

Used by Windows 1809 and newer to Debug Time Travel

# Path(s)

- `C:\Windows\System32\tttracer.exe`
- `C:\Windows\SysWOW64\tttracer.exe`

# Execute Commands

Execute specified executable from tttracer.exe. Requires administrator privileges.

```batch
tttracer.exe {PATH_ABSOLUTE:.exe}
```

- **Usecase:** Spawn process using other binary
- **Privileges Required:** Administrator
- **MitreID:** `T1127`
- **Operating System(s):** Windows 10 1809 and newer, Windows 11



# Dump Commands

Dumps process using tttracer.exe. Requires administrator privileges

```batch
TTTracer.exe -dumpFull -attach {PID}
```

- **Usecase:** Dump process by PID
- **Privileges Required:** Administrator
- **MitreID:** `T1003`
- **Operating System(s):** Windows 10 1809 and newer, Windows 11



# Resource(s)

- https://twitter.com/oulusoyum/status/1191329746069655553
- https://twitter.com/mattifestation/status/1196390321783025666
- https://lists.samba.org/archive/cifs-protocol/2016-April/002877.html
# Acknowledgements

- Oddvar Moe (Authored, 2019-11-05)
- Onur Ulusoy (@oulusoyum)
- Matt Grae