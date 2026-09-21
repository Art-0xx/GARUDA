---
type: detection_rule
title: "PowerShell Module File Created"
rule_id: e36941d0-c0f0-443f-bc6f-cb2952eb69ea
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
---

# PowerShell Module File Created

## Description
Detects the creation of a new PowerShell module ".psm1", ".psd1", ".dll", ".ps1", etc.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  TargetFilename|contains:
  - \WindowsPowerShell\Modules\
  - \PowerShell\7\Modules\
```

## False Positives
- Likely

## References
- Internal Research
- https://learn.microsoft.com/en-us/powershell/scripting/developer/module/understanding-a-windows-powershell-module?view=powershell-7.3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-09
- **Rule ID:** `e36941d0-c0f0-443f-bc6f-cb2952eb69ea`
- **Source file:** `windows/file/file_event/file_event_win_powershell_module_creation.yml`
