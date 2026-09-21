---
type: detection_rule
title: "PowerShell Module File Created By Non-PowerShell Process"
rule_id: e3845023-ca9a-4024-b2b2-5422156d5527
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# PowerShell Module File Created By Non-PowerShell Process

## Description
Detects the creation of a new PowerShell module ".psm1", ".psd1", ".dll", ".ps1", etc. by a non-PowerShell process

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_msiexec:
  Image:
  - C:\Windows\System32\msiexec.exe
  - C:\Windows\SysWOW64\msiexec.exe
filter_main_pwsh:
  Image|endswith:
  - :\Program Files\PowerShell\7-preview\pwsh.exe
  - :\Program Files\PowerShell\7\pwsh.exe
  - :\Windows\System32\poqexec.exe
  - :\Windows\System32\WindowsPowerShell\v1.0\powershell_ise.exe
  - :\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
  - :\Windows\SysWOW64\poqexec.exe
  - :\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell_ise.exe
  - :\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
selection:
  TargetFilename|contains:
  - \WindowsPowerShell\Modules\
  - \PowerShell\7\Modules\
```

## False Positives
- Unknown

## References
- Internal Research
- https://learn.microsoft.com/en-us/powershell/scripting/developer/module/understanding-a-windows-powershell-module?view=powershell-7.3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-09
- **Rule ID:** `e3845023-ca9a-4024-b2b2-5422156d5527`
- **Source file:** `windows/file/file_event/file_event_win_powershell_module_uncommon_creation.yml`
