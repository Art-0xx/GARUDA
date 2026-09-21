---
type: detection_rule
title: "Suspicious WSMAN Provider Image Loads"
rule_id: ad1f4bb9-8dfb-4765-adb6-2a7cfb6c0f94
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.003]
---

# Suspicious WSMAN Provider Image Loads

## Description
Detects signs of potential use of the WSMAN provider from uncommon processes locally and remote execution.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
commandline_null:
  CommandLine: null
condition: ( request_client or respond_server ) and not 1 of filter* and not ( svchost
  and commandline_null )
filter_citrix:
  Image|startswith: C:\Program Files\Citrix\
filter_general:
  Image:
  - C:\Program Files (x86)\PowerShell\6\pwsh.exe
  - C:\Program Files (x86)\PowerShell\7\pwsh.exe
  - C:\Program Files\PowerShell\6\pwsh.exe
  - C:\Program Files\PowerShell\7\pwsh.exe
  - C:\Windows\System32\sdiagnhost.exe
  - C:\Windows\System32\services.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell_ise.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
filter_gethelp:
  Image|endswith: \GetHelp.exe
  Image|startswith: C:\Program Files\WindowsApps\Microsoft.GetHelp_
filter_mmc:
  Image|endswith: \mmc.exe
filter_mscorsvw:
  Image|endswith: \mscorsvw.exe
  Image|startswith:
  - C:\Windows\Microsoft.NET\Framework64\v
  - C:\Windows\Microsoft.NET\Framework\v
  - C:\Windows\Microsoft.NET\FrameworkArm\v
  - C:\Windows\Microsoft.NET\FrameworkArm64\v
filter_nextron:
  Image|startswith: C:\Windows\Temp\asgard2-agent\
filter_svchost:
  CommandLine|contains:
  - svchost.exe -k netsvcs -p -s BITS
  - svchost.exe -k GraphicsPerfSvcGroup -s GraphicsPerfSvc
  - svchost.exe -k NetworkService -p -s Wecsvc
  - svchost.exe -k netsvcs
filter_svr_2019:
  Image:
  - C:\Windows\System32\Configure-SMRemoting.exe
  - C:\Windows\System32\ServerManager.exe
filter_upgrade:
  Image|startswith: C:\$WINDOWS.~BT\Sources\
request_client:
- ImageLoaded|endswith:
  - \WsmSvc.dll
  - \WsmAuto.dll
  - \Microsoft.WSMan.Management.ni.dll
- OriginalFileName:
  - WsmSvc.dll
  - WSMANAUTOMATION.DLL
  - Microsoft.WSMan.Management.dll
respond_server:
  Image|endswith: \svchost.exe
  OriginalFileName: WsmWmiPl.dll
svchost:
  Image|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1059.001
- T1021.003

## False Positives
- Unknown

## References
- https://twitter.com/chadtilbury/status/1275851297770610688
- https://bohops.com/2020/05/12/ws-management-com-another-approach-for-winrm-lateral-movement/
- https://learn.microsoft.com/en-us/windows/win32/winrm/windows-remote-management-architecture
- https://github.com/bohops/WSMan-WinRM

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-06-24
- **Rule ID:** `ad1f4bb9-8dfb-4765-adb6-2a7cfb6c0f94`
- **Source file:** `windows/image_load/image_load_wsman_provider_image_load.yml`
