---
type: detection_rule
title: "Alternate PowerShell Hosts - PowerShell Module"
rule_id: 64e8e417-c19a-475a-8d19-98ea705394cc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Alternate PowerShell Hosts - PowerShell Module

## Description
Detects alternate PowerShell hosts potentially bypassing detections looking for powershell.exe

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_adace:
  ContextInfo|contains: C:\Windows\system32\dsac.exe
filter_citrix:
  ContextInfo|contains: ConfigSyncRun.exe
filter_help_update:
  Payload|contains:
  - Update-Help
  - Failed to update Help for the module
filter_powershell:
  ContextInfo|contains:
  - = powershell
  - = C:\Windows\System32\WindowsPowerShell\v1.0\powershell
  - = C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell
  - = C:/Windows/System32/WindowsPowerShell/v1.0/powershell
  - = C:/Windows/SysWOW64/WindowsPowerShell/v1.0/powershell
  - = \\\?\?\C:Windows\System32\WindowsPowerShell\v1.0\powershell
  - = \\\?\?\C:Windows\SysWOW64\WindowsPowerShell\v1.0\powershell
filter_sdiagnhost:
  ContextInfo|contains: = C:\WINDOWS\System32\sdiagnhost.exe -Embedding
filter_winrm:
  ContextInfo|contains: C:\Windows\system32\wsmprovhost.exe -Embedding
selection:
  ContextInfo|contains: '*'
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Programs using PowerShell directly without invocation of a dedicated interpreter
- MSP Detection Searcher
- Citrix ConfigSync.ps1

## References
- https://threathunterplaybook.com/hunts/windows/190610-PwshAlternateHosts/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-08-11
- **Rule ID:** `64e8e417-c19a-475a-8d19-98ea705394cc`
- **Source file:** `windows/powershell/powershell_module/posh_pm_alternate_powershell_hosts.yml`
