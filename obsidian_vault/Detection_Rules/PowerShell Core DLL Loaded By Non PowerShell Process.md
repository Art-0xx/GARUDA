---
type: detection_rule
title: "PowerShell Core DLL Loaded By Non PowerShell Process"
rule_id: 092bc4b9-3d1d-43b4-a6b4-8c8acd83522f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Core DLL Loaded By Non PowerShell Process

## Description
Detects loading of essential DLLs used by PowerShell by non-PowerShell process.
Detects behavior similar to meterpreter's "load powershell" extension.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_dotnet:
  Image|endswith: \mscorsvw.exe
  Image|startswith:
  - C:\Windows\Microsoft.NET\Framework\
  - C:\Windows\Microsoft.NET\FrameworkArm\
  - C:\Windows\Microsoft.NET\FrameworkArm64\
  - C:\Windows\Microsoft.NET\Framework64\
filter_main_generic:
  Image:
  - C:\Windows\System32\dsac.exe
  - C:\WINDOWS\System32\RemoteFXvGPUDisablement.exe
  - C:\Windows\System32\runscripthelper.exe
  - C:\WINDOWS\System32\sdiagnhost.exe
  - C:\Windows\System32\ServerManager.exe
  - C:\Windows\System32\SyncAppvPublishingServer.exe
  - C:\Windows\System32\winrshost.exe
  - C:\Windows\System32\wsmprovhost.exe
  - C:\Windows\SysWOW64\winrshost.exe
  - C:\Windows\SysWOW64\wsmprovhost.exe
filter_main_powershell:
  Image:
  - C:\Program Files\PowerShell\7-preview\pwsh.exe
  - C:\Program Files\PowerShell\7\pwsh.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell_ise.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell_ise.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
filter_main_pwsh_preview:
  Image|contains:
  - C:\Program Files\WindowsApps\Microsoft.PowerShellPreview
  - \AppData\Local\Microsoft\WindowsApps\Microsoft.PowerShellPreview
  Image|endswith: \pwsh.exe
filter_optional_aurora:
  Image: null
filter_optional_chocolatey:
  Image|startswith: C:\ProgramData\chocolatey\choco.exe
filter_optional_citrix:
  Image|endswith: \Citrix\ConfigSync\ConfigSyncRun.exe
filter_optional_gethelp:
  Image|endswith: \GetHelp.exe
  Image|startswith: C:\Program Files\WindowsApps\Microsoft.GetHelp_
filter_optional_nextron:
  Image|endswith:
  - \thor64.exe
  - \thor.exe
  Image|startswith: C:\Windows\Temp\asgard2-agent\
filter_optional_sql_server_mgmt:
  Image|endswith: \IDE\Ssms.exe
  Image|startswith:
  - C:\Program Files (x86)\Microsoft SQL Server Management Studio
  - C:\Program Files\Microsoft SQL Server Management Studio
filter_optional_sql_server_tools:
  Image|endswith: \Tools\Binn\SQLPS.exe
  Image|startswith:
  - C:\Program Files (x86)\Microsoft SQL Server\
  - C:\Program Files\Microsoft SQL Server\
filter_optional_vs:
  Image|startswith:
  - C:\Program Files (x86)\Microsoft Visual Studio\
  - C:\Program Files\Microsoft Visual Studio\
selection:
- Description: System.Management.Automation
- OriginalFileName: System.Management.Automation.dll
- ImageLoaded|endswith:
  - \System.Management.Automation.dll
  - \System.Management.Automation.ni.dll
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Used by some .NET binaries, minimal on user workstation.
- Used by Microsoft SQL Server Management Studio

## References
- https://adsecurity.org/?p=2921
- https://github.com/p3nt4/PowerShdll

## Metadata
- **Author:** Tom Kern, oscd.community, Natalia Shornikova, Tim Shelton, Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2019-11-14
- **Rule ID:** `092bc4b9-3d1d-43b4-a6b4-8c8acd83522f`
- **Source file:** `windows/image_load/image_load_dll_system_management_automation_susp_load.yml`
