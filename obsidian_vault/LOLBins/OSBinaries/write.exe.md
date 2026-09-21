---
Acknowledgement:
- Person: Michal Bel
Author: Michal Belzak
Commands:
- Category: Execute
  Command: write.exe
  Description: Executes a binary provided in default value of `HKCU\Software\Microsoft\Windows\CurrentVersion\App
    Paths\wordpad.exe`.
  MitreID: T1218
  OperatingSystem: Windows 10, Windows 11 (before 24H2)
  Privileges: User
  Tags:
  - Execute: EXE
  - Requires: Registry Change
  Usecase: Execute binary through legitimate proxy. This might be utilized to confuse
    detection solutions that rely on parent-child relationships.
Created: 2025-06-17
Description: Windows Write
Detection:
- IOC: Changes to HKCU:\Software\Microsoft\Windows\CurrentVersion\App Paths\wordpad.exe
- Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/registry/registry_set/registry_set_persistence_app_paths.yml
Full_Path:
- Path: C:\Windows\write.exe
- Path: C:\Windows\System32\write.exe
- Path: C:\Windows\SysWOW64\write.exe
Name: write.exe
Resources:
- Link: https://gist.github.com/mblzk/b8c5ff7c2bd0fb2b385cc2fdd119874b
mitre_data:
  technique_ids:
  - T1218
tags:
- lolbas/osbinaries
---

# write.exe

Windows Write

# Path(s)

- `C:\Windows\write.exe`
- `C:\Windows\System32\write.exe`
- `C:\Windows\SysWOW64\write.exe`

# Execute Commands

Executes a binary provided in default value of `HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\wordpad.exe`.

```batch
write.exe
```

- **Usecase:** Execute binary through legitimate proxy. This might be utilized to confuse detection solutions that rely on parent-child relationships.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 10, Windows 11 (before 24H2)



# Resource(s)

- https://gist.github.com/mblzk/b8c5ff7c2bd0fb2b385cc2fdd119874b
# Acknowledgements

- Michal Belzak (Authored, 2025-06-17)
- Michal Bel