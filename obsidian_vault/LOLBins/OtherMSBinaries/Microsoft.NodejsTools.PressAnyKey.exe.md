---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: Execute
  Command: Microsoft.NodejsTools.PressAnyKey.exe normal 1 {PATH:.exe}
  Description: Launch specified executable as a subprocess of Microsoft.NodejsTools.PressAnyKey.exe.
  MitreID: T1127
  OperatingSystem: Windows
  Privileges: User
  Tags:
  - Execute: EXE
  Usecase: Spawn a new process via Microsoft.NodejsTools.PressAnyKey.exe.
Created: 2022-01-20
Description: Part of the NodeJS Visual Studio tools.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_renamed_pressanykey.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_pressanykey_lolbin_execution.yml
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\IDE\Extensions\Microsoft\NodeJsTools\NodeJsTools\Microsoft.NodejsTools.PressAnyKey.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\IDE\Extensions\Microsoft\NodeJsTools\NodeJsTools\Microsoft.NodejsTools.PressAnyKey.exe
Name: Microsoft.NodejsTools.PressAnyKey.exe
Resources:
- Link: https://twitter.com/mrd0x/status/1463526834918854661
mitre_data:
  technique_ids:
  - T1127
tags:
- lolbas/othermsbinaries
---

# Microsoft.NodejsTools.PressAnyKey.exe

Part of the NodeJS Visual Studio tools.

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\IDE\Extensions\Microsoft\NodeJsTools\NodeJsTools\Microsoft.NodejsTools.PressAnyKey.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\IDE\Extensions\Microsoft\NodeJsTools\NodeJsTools\Microsoft.NodejsTools.PressAnyKey.exe`

# Execute Commands

Launch specified executable as a subprocess of Microsoft.NodejsTools.PressAnyKey.exe.

```batch
Microsoft.NodejsTools.PressAnyKey.exe normal 1 {PATH:.exe}
```

- **Usecase:** Spawn a new process via Microsoft.NodejsTools.PressAnyKey.exe.
- **Privileges Required:** User
- **MitreID:** `T1127`
- **Operating System(s):** Windows



# Resource(s)

- https://twitter.com/mrd0x/status/1463526834918854661
# Acknowledgements

- mr.d0x (Authored, 2022-01-20)
- mr.