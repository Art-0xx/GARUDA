---
type: detection_rule
title: "AADInternals PowerShell Cmdlets Execution - PsScript"
rule_id: 91e69562-2426-42ce-a647-711b8152ced6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# AADInternals PowerShell Cmdlets Execution - PsScript

## Description
Detects ADDInternals Cmdlet execution. A tool for administering Azure AD and Office 365. Which can be abused by threat actors to attack Azure AD or Office 365.

## Log Source
```yaml
category: ps_script
definition: Script Block Logging must be enable
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
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
```

## False Positives
- Legitimate use of the library for administrative activity

## References
- https://o365blog.com/aadinternals/
- https://github.com/Gerenios/AADInternals

## Metadata
- **Author:** Austin Songer (@austinsonger), Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2022-12-23
- **Rule ID:** `91e69562-2426-42ce-a647-711b8152ced6`
- **Source file:** `windows/powershell/powershell_script/posh_ps_aadinternals_cmdlets_execution.yml`
