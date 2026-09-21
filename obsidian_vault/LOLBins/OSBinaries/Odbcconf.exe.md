---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Person: A
Author: Oddvar Moe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/58b5eb751379501aa237275f14381f0902e979a5/Archive-Old-Version/OSBinaries/Payload/file.rsp
Commands:
- Category: Execute
  Command: odbcconf /a {REGSVR {PATH_ABSOLUTE:.dll}}
  Description: Execute DllRegisterServer from DLL specified.
  MitreID: T1218.008
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute a DLL file using technique that can evade defensive counter measures
- Category: Execute
  Command: 'odbcconf INSTALLDRIVER "lolbas-project|Driver={PATH_ABSOLUTE:.dll}|APILevel=2"

    odbcconf configsysdsn "lolbas-project" "DSN=lolbas-project"

    '
  Description: Install a driver and load the DLL. Requires administrator privileges.
  MitreID: T1218.008
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL
  Usecase: Execute dll file using technique that can evade defensive counter measures
- Category: Execute
  Command: odbcconf -f {PATH:.rsp}
  Description: Load DLL specified in target .RSP file. See the Code Sample section
    for an example .RSP file.
  MitreID: T1218.008
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: Administrator
  Usecase: Execute dll file using technique that can evade defensive counter measures
Created: 2018-05-25
Description: Used in Windows for managing ODBC connections
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_odbcconf_response_file.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_odbcconf_response_file_susp.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Full_Path:
- Path: C:\Windows\System32\odbcconf.exe
- Path: C:\Windows\SysWOW64\odbcconf.exe
Name: Odbcconf.exe
Resources:
- Link: https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
- Link: https://github.com/woanware/application-restriction-bypasses
- Link: https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/
mitre_data:
  technique_ids:
  - T1218.008
tags:
- lolbas/osbinaries
---

# Odbcconf.exe

Used in Windows for managing ODBC connections

# Path(s)

- `C:\Windows\System32\odbcconf.exe`
- `C:\Windows\SysWOW64\odbcconf.exe`

# Execute Commands

Execute DllRegisterServer from DLL specified.

```batch
odbcconf /a {REGSVR {PATH_ABSOLUTE:.dll}}
```

- **Usecase:** Execute a DLL file using technique that can evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218.008`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Install a driver and load the DLL. Requires administrator privileges.

```batch
odbcconf INSTALLDRIVER "lolbas-project|Driver={PATH_ABSOLUTE:.dll}|APILevel=2"
odbcconf configsysdsn "lolbas-project" "DSN=lolbas-project"

```

- **Usecase:** Execute dll file using technique that can evade defensive counter measures
- **Privileges Required:** User
- **MitreID:** `T1218.008`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Load DLL specified in target .RSP file. See the Code Sample section for an example .RSP file.

```batch
odbcconf -f {PATH:.rsp}
```

- **Usecase:** Execute dll file using technique that can evade defensive counter measures
- **Privileges Required:** Administrator
- **MitreID:** `T1218.008`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
- https://github.com/woanware/application-restriction-bypasses
- https://www.hexacorn.com/blog/2020/08/23/odbcconf-lolbin-trifecta/
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- A