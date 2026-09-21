---
type: detection_rule
title: "PowerShell Set-Acl On Windows Folder - PsScript"
rule_id: 3bf1d859-3a7e-44cb-8809-a99e066d3478
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1222]
---

# PowerShell Set-Acl On Windows Folder - PsScript

## Description
Detects PowerShell scripts to set the ACL to a file in the Windows folder

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  ScriptBlockText|contains|all:
  - 'Set-Acl '
  - '-AclObject '
selection_paths:
  ScriptBlockText|contains:
  - -Path "C:\Windows
  - -Path "C:/Windows
  - -Path 'C:\Windows
  - -Path 'C:/Windows
  - -Path C:\\Windows
  - -Path C:/Windows
  - -Path $env:windir
  - -Path "$env:windir
  - -Path '$env:windir
selection_permissions:
  ScriptBlockText|contains:
  - FullControl
  - Allow
```

## MITRE ATT&CK
- T1222

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/74438b0237d141ee9c99747976447dc884cb1a39/atomics/T1505.005/T1505.005.md
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-acl?view=powershell-5.1

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-18
- **Rule ID:** `3bf1d859-3a7e-44cb-8809-a99e066d3478`
- **Source file:** `windows/powershell/powershell_script/posh_ps_set_acl_susp_location.yml`
