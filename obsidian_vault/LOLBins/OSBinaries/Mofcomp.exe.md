---
Acknowledgement:
- Handle: '@gott_cyber'
  Person: Daniel Gott
- Handle: '@TheDFIRReport'
  Person: The DFIR Report
- Person: Nasreddine Bencherch
Author: Daniel Gott
Commands:
- Category: Execute
  Command: mofcomp.exe {PATH_ABSOLUTE:.mof}
  Description: Abuse of mofcomp.exe to parse a file which contains MOF statements
    in order create new classes as part of the WMI repository
  MitreID: T1047
  OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11, Windows Server 2008+
  Privileges: User
  Tags:
  - Execute: MOF
  Usecase: Threat actors can use mofcomp.exe to register a malicious MOF file as a
    new class in the WMI repository
Created: 2022-07-19
Description: Compiler that parses a file containing MOF statements and adds the classes
  and class instances defined in the file to the WMI repository. Threat actors can
  leverage this binary to install malicious MOF scripts
Detection:
- IOC: strange parent processes spawning mofcomp.exe like cmd.exe or powershell.exe
- Sigma: https://github.com/The-DFIR-Report/Sigma-Rules/blob/75260568a7ffe61b2458ca05f6f25914efb44337/win_mofcomp_execution.yml
Full_Path:
- Path: C:\Windows\System32\wbem\mofcomp.exe
- Path: C:\Windows\SysWOW64\wbem\mofcomp.exe
Name: Mofcomp.exe
Resources:
- Link: https://docs.microsoft.com/en-us/windows/win32/wmisdk/mofcomp
- Link: https://docs.microsoft.com/en-us/windows/win32/wmisdk/managed-object-format--mof-
- Link: https://thedfirreport.com/2022/07/11/select-xmrig-from-sqlserver/
- Link: https://in.security/2019/04/03/an-intro-into-abusing-and-identifying-wmi-event-subscriptions-for-persistence/
- Link: https://medium.com/threatpunter/detecting-removing-wmi-persistence-60ccbb7dff96
mitre_data:
  technique_ids:
  - T1047
tags:
- lolbas/osbinaries
---

# Mofcomp.exe

Compiler that parses a file containing MOF statements and adds the classes and class instances defined in the file to the WMI repository. Threat actors can leverage this binary to install malicious MOF scripts

# Path(s)

- `C:\Windows\System32\wbem\mofcomp.exe`
- `C:\Windows\SysWOW64\wbem\mofcomp.exe`

# Execute Commands

Abuse of mofcomp.exe to parse a file which contains MOF statements in order create new classes as part of the WMI repository

```batch
mofcomp.exe {PATH_ABSOLUTE:.mof}
```

- **Usecase:** Threat actors can use mofcomp.exe to register a malicious MOF file as a new class in the WMI repository
- **Privileges Required:** User
- **MitreID:** `T1047`
- **Operating System(s):** Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11, Windows Server 2008+



# Resource(s)

- https://docs.microsoft.com/en-us/windows/win32/wmisdk/mofcomp
- https://docs.microsoft.com/en-us/windows/win32/wmisdk/managed-object-format--mof-
- https://thedfirreport.com/2022/07/11/select-xmrig-from-sqlserver/
- https://in.security/2019/04/03/an-intro-into-abusing-and-identifying-wmi-event-subscriptions-for-persistence/
- https://medium.com/threatpunter/detecting-removing-wmi-persistence-60ccbb7dff96
# Acknowledgements

- Daniel Gott (Authored, 2022-07-19)
- Daniel Gott (@gott_cyber)
- The DFIR Report (@TheDFIRReport)
- Nasreddine Bencherch