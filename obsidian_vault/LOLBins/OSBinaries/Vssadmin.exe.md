---
Author: mmadersbacher
Commands:
- Category: Tamper
  Command: vssadmin delete shadows /all /quiet
  Description: Delete all volume shadow copies on the host without prompting
  MitreID: T1490
  OperatingSystem: Windows 11, Windows 10, Windows Server
  Privileges: Administrator
  Usecase: Destroy shadow copies to prevent file and system recovery, a technique
    commonly used by ransomware
Created: 2026-08-16
Description: Volume Shadow Copy Service administrative command-line tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/process_creation/proc_creation_win_susp_shadow_copies_deletion.yml
Full_Path:
- Path: C:\Windows\System32\vssadmin.exe
Name: Vssadmin.exe
Resources:
- Link: https://attack.mitre.org/techniques/T1490/
- Link: https://github.com/Neo23x0/Racc
mitre_data:
  technique_ids:
  - T1490
tags:
- lolbas/osbinaries
---

# Vssadmin.exe

Volume Shadow Copy Service administrative command-line tool

# Path(s)

- `C:\Windows\System32\vssadmin.exe`

# Tamper Commands

Delete all volume shadow copies on the host without prompting

```batch
vssadmin delete shadows /all /quiet
```

- **Usecase:** Destroy shadow copies to prevent file and system recovery, a technique commonly used by ransomware
- **Privileges Required:** Administrator
- **MitreID:** `T1490`
- **Operating System(s):** Windows 11, Windows 10, Windows Server



# Resource(s)

- https://attack.mitre.org/techniques/T1490/
- https://github.com/Neo23x0/Racc
# Acknowledgements

- mmadersbacher (Authored, 2026-08-16)