---
Acknowledgement:
- Person: Nasreddine Bencherch
Author: Nasreddine Bencherchali
Commands:
- Category: Execute
  Command: wt.exe {CMD}
  Description: Execute a command via Windows Terminal.
  MitreID: T1202
  OperatingSystem: Windows 11
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Use wt.exe as a proxy binary to evade defensive counter-measures
Created: 2022-07-27
Description: Windows Terminal
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_windows_terminal_susp_children.yml
Full_Path:
- Path: C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_<version_packageid>\wt.exe
Name: wt.exe
Resources:
- Link: https://twitter.com/nas_bench/status/1552100271668469761
mitre_data:
  technique_ids:
  - T1202
tags:
- lolbas/osbinaries
---

# wt.exe

Windows Terminal

# Path(s)

- `C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_<version_packageid>\wt.exe`

# Execute Commands

Execute a command via Windows Terminal.

```batch
wt.exe {CMD}
```

- **Usecase:** Use wt.exe as a proxy binary to evade defensive counter-measures
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows 11



# Resource(s)

- https://twitter.com/nas_bench/status/1552100271668469761
# Acknowledgements

- Nasreddine Bencherchali (Authored, 2022-07-27)
- Nasreddine Bencherch