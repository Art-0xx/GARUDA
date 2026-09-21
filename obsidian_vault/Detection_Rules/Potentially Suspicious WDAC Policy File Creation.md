---
type: detection_rule
title: "Potentially Suspicious WDAC Policy File Creation"
rule_id: 1d2de8a6-4803-4fde-b85b-f58f3aa7a705
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
---

# Potentially Suspicious WDAC Policy File Creation

## Description
Detects suspicious Windows Defender Application Control (WDAC) policy file creation from abnormal processes that could be abused by attacker to block EDR/AV components while allowing their own malicious code to run on the system.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection_target and not 1 of filter_main_*
filter_main_cli:
- CommandLine|contains|all:
  - ConvertFrom-CIPolicy -XmlFilePath
  - '-BinaryFilePath '
- CommandLine|contains: CiTool --update-policy
- CommandLine|contains|all:
  - Copy-Item -Path
  - -Destination
filter_main_images:
  Image|endswith:
  - \Microsoft.ConfigurationManagement.exe
  - \WDAC Wizard.exe
  - C:\Program Files\PowerShell\7-preview\pwsh.exe
  - C:\Program Files\PowerShell\7\pwsh.exe
  - C:\Windows\System32\dllhost.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell_ise.exe
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
  - C:\Windows\SysWOW64\dllhost.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell_ise.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
filter_main_system:
  Image: System
filter_main_wuauclt:
  Image: C:\Windows\System32\wuauclt.exe
filter_main_wuaucltcore:
  Image:
  - C:\Windows\UUS\arm64\wuaucltcore.exe
  - C:\Windows\UUS\Packages\Preview\arm64\wuaucltcore.exe
selection_target:
  TargetFilename|contains: \Windows\System32\CodeIntegrity\
```

## False Positives
- Administrators and security vendors could leverage WDAC, apply additional filters as needed.

## References
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/deployment/deploy-appcontrol-policies-using-group-policy
- https://beierle.win/2024-12-20-Weaponizing-WDAC-Killing-the-Dreams-of-EDR/
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/deployment/appcontrol-deployment-guide
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/deployment/deploy-appcontrol-policies-with-script
- https://learn.microsoft.com/en-us/windows/security/application-security/application-control/app-control-for-business/deployment/deploy-appcontrol-policies-with-memcm

## Metadata
- **Author:** X__Junior
- **Date:** 2025-02-07
- **Rule ID:** `1d2de8a6-4803-4fde-b85b-f58f3aa7a705`
- **Source file:** `windows/file/file_event/file_event_win_susp_wdac_policy_creation.yml`
