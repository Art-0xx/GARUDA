---
type: detection_rule
title: "PowerShell AppLocker Policy Discovery Via Get-AppLockerPolicy"
rule_id: f14b1e99-5e53-4598-98dc-6f20ad7b35e0
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518.001]
---

# PowerShell AppLocker Policy Discovery Via Get-AppLockerPolicy

## Description
Detects AppLocker policy enumeration attempts via PowerShell using the Get-AppLockerPolicy cmdlet and an policy scope of either Effective, LDAP, or Local.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  CommandLine|contains: Get-AppLockerPolicy
selection_flag:
  CommandLine|contains|windash:
  - ' -Effective'
  - ' -Ldap '
  - ' -Local'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1518.001

## False Positives
- PowerShell-based AppLocker auditing and policy troubleshooting by administrators.

## References
- https://learn.microsoft.com/en-us/powershell/module/applocker/get-applockerpolicy

## Metadata
- **Author:** Tom3306
- **Date:** 2026-08-19
- **Rule ID:** `f14b1e99-5e53-4598-98dc-6f20ad7b35e0`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_applocker_policy_discovery_via_get_applockerpolicy.yml`
