---
type: detection_rule
title: "PowerShell Set-Acl On Windows Folder"
rule_id: 0944e002-e3f6-4eb5-bf69-3a3067b53d73
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# PowerShell Set-Acl On Windows Folder

## Description
Detects PowerShell scripts to set the ACL to a file in the Windows folder

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  CommandLine|contains|all:
  - 'Set-Acl '
  - '-AclObject '
selection_img:
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_paths:
  CommandLine|contains:
  - -Path "C:\Windows
  - -Path 'C:\Windows
  - -Path %windir%
  - -Path $env:windir
selection_permissions:
  CommandLine|contains:
  - FullControl
  - Allow
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-acl?view=powershell-5.1
- https://github.com/redcanaryco/atomic-red-team/blob/74438b0237d141ee9c99747976447dc884cb1a39/atomics/T1505.005/T1505.005.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-18
- **Rule ID:** `0944e002-e3f6-4eb5-bf69-3a3067b53d73`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_set_acl_susp_location.yml`
