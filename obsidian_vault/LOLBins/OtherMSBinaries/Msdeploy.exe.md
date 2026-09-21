---
Acknowledgement:
- Handle: '@pabraeken'
  Person: Pierre-Alexandre Braeken
- Person: Avihay El
Author: Oddvar Moe
Commands:
- Category: Execute
  Command: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="{PATH_ABSOLUTE:.bat}"
  Description: Launch .bat file via msdeploy.exe.
  MitreID: T1218
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows
    Server
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Local execution of batch file using msdeploy.exe.
- Category: AWL Bypass
  Command: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="{PATH_ABSOLUTE:.bat}"
  Description: Launch .bat file via msdeploy.exe.
  MitreID: T1218
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows
    Server
  Privileges: User
  Tags:
  - Execute: CMD
  Usecase: Local execution of batch file using msdeploy.exe.
- Category: Copy
  Command: msdeploy.exe -verb:sync -source:filePath={PATH_ABSOLUTE:.source.ext} -dest:filePath={PATH_ABSOLUTE:.dest.ext}
  Description: Copy file from source to destination.
  MitreID: T1105
  OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows
    Server
  Privileges: User
  Usecase: Copy file.
Created: 2018-05-25
Description: Microsoft tool used to deploy Web Applications.
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_msdeploy.yml
Full_Path:
- Path: C:\Program Files\IIS\Microsoft Web Deploy V2\msdeploy.exe
- Path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V2\msdeploy.exe
- Path: C:\Program Files\IIS\Microsoft Web Deploy V3\msdeploy.exe
- Path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe
- Path: C:\Program Files\IIS\Microsoft Web Deploy V4\msdeploy.exe
- Path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V4\msdeploy.exe
- Path: C:\Program Files\IIS\Microsoft Web Deploy V5\msdeploy.exe
- Path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V5\msdeploy.exe
Name: Msdeploy.exe
Resources:
- Link: https://twitter.com/pabraeken/status/995837734379032576
- Link: https://twitter.com/pabraeken/status/999090532839313408
mitre_data:
  technique_ids:
  - T1218
  - T1105
tags:
- lolbas/othermsbinaries
---

# Msdeploy.exe

Microsoft tool used to deploy Web Applications.

# Path(s)

- `C:\Program Files\IIS\Microsoft Web Deploy V2\msdeploy.exe`
- `C:\Program Files (x86)\IIS\Microsoft Web Deploy V2\msdeploy.exe`
- `C:\Program Files\IIS\Microsoft Web Deploy V3\msdeploy.exe`
- `C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe`
- `C:\Program Files\IIS\Microsoft Web Deploy V4\msdeploy.exe`
- `C:\Program Files (x86)\IIS\Microsoft Web Deploy V4\msdeploy.exe`
- `C:\Program Files\IIS\Microsoft Web Deploy V5\msdeploy.exe`
- `C:\Program Files (x86)\IIS\Microsoft Web Deploy V5\msdeploy.exe`

# Copy Commands

Copy file from source to destination.

```batch
msdeploy.exe -verb:sync -source:filePath={PATH_ABSOLUTE:.source.ext} -dest:filePath={PATH_ABSOLUTE:.dest.ext}
```

- **Usecase:** Copy file.
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows Server



# AWL Bypass Commands

Launch .bat file via msdeploy.exe.

```batch
msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="{PATH_ABSOLUTE:.bat}"
```

- **Usecase:** Local execution of batch file using msdeploy.exe.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows Server



# Execute Commands

Launch .bat file via msdeploy.exe.

```batch
msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="{PATH_ABSOLUTE:.bat}"
```

- **Usecase:** Local execution of batch file using msdeploy.exe.
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows Server



# Resource(s)

- https://twitter.com/pabraeken/status/995837734379032576
- https://twitter.com/pabraeken/status/999090532839313408
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Pierre-Alexandre Braeken (@pabraeken)
- Avihay El