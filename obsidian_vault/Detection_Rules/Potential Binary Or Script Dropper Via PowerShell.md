---
type: detection_rule
title: "Potential Binary Or Script Dropper Via PowerShell"
rule_id: 7047d730-036f-4f40-b9d8-1c63e36d5e62
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Binary Or Script Dropper Via PowerShell

## Description
Detects PowerShell creating a binary executable or a script file.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_nuget:
  TargetFilename|endswith: \Microsoft.PackageManagement.NuGetProvider.dll
  TargetFilename|startswith: C:\Program Files\PackageManagement\ProviderAssemblies\nuget\
filter_main_other_temp:
  TargetFilename|endswith:
  - .dll
  - .exe
  TargetFilename|startswith:
  - C:\Windows\Temp\
  - C:\Windows\SystemTemp\
filter_main_powershell_module:
  TargetFilename|contains: \WindowsPowerShell\Modules\
  TargetFilename|endswith: .dll
  TargetFilename|startswith: C:\Users\
filter_main_user_temp:
  TargetFilename|contains: \AppData\Local\Temp\
  TargetFilename|endswith:
  - .dll
  - .exe
  TargetFilename|startswith: C:\Users\
selection:
  Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
  TargetFilename|endswith:
  - .bat
  - .chm
  - .cmd
  - .com
  - .dll
  - .exe
  - .hta
  - .jar
  - .js
  - .ocx
  - .scr
  - .sys
  - .vbe
  - .vbs
  - .wsf
```

## False Positives
- False positives will differ depending on the environment and scripts used. Apply additional filters accordingly.

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-17
- **Rule ID:** `7047d730-036f-4f40-b9d8-1c63e36d5e62`
- **Source file:** `windows/file/file_event/file_event_win_powershell_drop_binary_or_script.yml`
