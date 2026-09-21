---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: Dump
  Command: DumpMinitool.exe --file {PATH_ABSOLUTE} --processId 1132 --dumpType Full
  Description: Creates a memory dump of the lsass process
  MitreID: T1003.001
  OperatingSystem: Windows 10, Windows 11
  Privileges: Administrator
  Usecase: Create memory dump and parse it offline
Created: 2022-01-20
Description: Dump tool part Visual Studio 2022
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_dumpminitool_execution.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_dumpminitool_susp_execution.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_devinit_lolbin_usage.yml
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\Extensions\TestPlatform\Extensions\DumpMinitool.exe
Name: DumpMinitool.exe
Resources:
- Link: https://twitter.com/mrd0x/status/1511415432888131586
mitre_data:
  technique_ids:
  - T1003.001
tags:
- lolbas/othermsbinaries
---

# DumpMinitool.exe

Dump tool part Visual Studio 2022

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\Extensions\TestPlatform\Extensions\DumpMinitool.exe`

# Dump Commands

Creates a memory dump of the lsass process

```batch
DumpMinitool.exe --file {PATH_ABSOLUTE} --processId 1132 --dumpType Full
```

- **Usecase:** Create memory dump and parse it offline
- **Privileges Required:** Administrator
- **MitreID:** `T1003.001`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/mrd0x/status/1511415432888131586
# Acknowledgements

- mr.d0x (Authored, 2022-01-20)
- mr.