---
type: detection_rule
title: "Windows Firewall Disabled via PowerShell"
rule_id: 12f6b752-042d-483e-bf9c-915a6d06ad75
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Firewall Disabled via PowerShell

## Description
Detects attempts to disable the Windows Firewall using PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_args:
  CommandLine|contains|all:
  - 'Set-NetFirewallProfile '
  - ' -Enabled '
  - ' False'
selection_name:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \powershell_ise.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_opt:
  CommandLine|contains:
  - ' -All '
  - Public
  - Domain
  - Private
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/windows-firewall-disabled-via-powershell.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-14
- **Rule ID:** `12f6b752-042d-483e-bf9c-915a6d06ad75`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_disable_firewall.yml`
