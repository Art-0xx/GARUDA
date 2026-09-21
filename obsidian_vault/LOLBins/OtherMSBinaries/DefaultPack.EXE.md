---
Acknowledgement:
- Person: checkyman
Author: '@checkymander'
Commands:
- Category: Execute
  Command: DefaultPack.EXE /C:"{CMD}"
  Description: Use DefaultPack.EXE to execute arbitrary binaries, with added argument
    support.
  MitreID: T1218
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Can be used to execute stagers, binaries, and other malicious commands.
Created: 2020-10-01
Description: This binary can be downloaded along side multiple software downloads
  on the Microsoft website. It gets downloaded when the user forgets to uncheck the
  option to set Bing as the default search provider.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_lolbin_defaultpack.yml
- IOC: DefaultPack.EXE spawned an unknown process
Full_Path:
- Path: C:\Program Files (x86)\Microsoft\DefaultPack\DefaultPack.exe
Name: DefaultPack.EXE
Resources:
- Link: https://twitter.com/checkymander/status/1311509470275604480.
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/othermsbinaries
---

# DefaultPack.EXE

This binary can be downloaded along side multiple software downloads on the Microsoft website. It gets downloaded when the user forgets to uncheck the option to set Bing as the default search provider.

# Path(s)

- `C:\Program Files (x86)\Microsoft\DefaultPack\DefaultPack.exe`

# Execute Commands

Use DefaultPack.EXE to execute arbitrary binaries, with added argument support.

```batch
DefaultPack.EXE /C:"{CMD}"
```

- **Usecase:** Can be used to execute stagers, binaries, and other malicious commands.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/checkymander/status/1311509470275604480.
# Acknowledgements

- @checkymander (Authored, 2020-10-01)
- checkyman