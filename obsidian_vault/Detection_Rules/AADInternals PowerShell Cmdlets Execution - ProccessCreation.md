---
type: detection_rule
title: "AADInternals PowerShell Cmdlets Execution - ProccessCreation"
rule_id: c86500e9-a645-4680-98d7-f882c70c1ea3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# AADInternals PowerShell Cmdlets Execution - ProccessCreation

## Description
Detects ADDInternals Cmdlet execution. A tool for administering Azure AD and Office 365. Which can be abused by threat actors to attack Azure AD or Office 365.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - Add-AADInt
  - ConvertTo-AADInt
  - Disable-AADInt
  - Enable-AADInt
  - Export-AADInt
  - Find-AADInt
  - Get-AADInt
  - Grant-AADInt
  - Initialize-AADInt
  - Install-AADInt
  - Invoke-AADInt
  - Join-AADInt
  - New-AADInt
  - Open-AADInt
  - Read-AADInt
  - Register-AADInt
  - Remove-AADInt
  - Reset-AADInt
  - Resolve-AADInt
  - Restore-AADInt
  - Save-AADInt
  - Search-AADInt
  - Send-AADInt
  - Set-AADInt
  - Start-AADInt
  - Unprotect-AADInt
  - Update-AADInt
selection_img:
- Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.Exe
  - pwsh.dll
```

## False Positives
- Legitimate use of the library for administrative activity

## References
- https://o365blog.com/aadinternals/
- https://github.com/Gerenios/AADInternals

## Metadata
- **Author:** Austin Songer (@austinsonger), Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2022-12-23
- **Rule ID:** `c86500e9-a645-4680-98d7-f882c70c1ea3`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_aadinternals_cmdlets_execution.yml`
