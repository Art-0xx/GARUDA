---
type: detection_rule
title: "Execute Code with Pester.bat as Parent"
rule_id: 18988e1b-9087-4f8a-82fe-0414dce49878
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1216]
---

# Execute Code with Pester.bat as Parent

## Description
Detects code execution via Pester.bat (Pester - Powershell Modulte for testing)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  ParentCommandLine|contains:
  - '{ Invoke-Pester -EnableExit ;'
  - '{ Get-Help "'
selection_module:
  ParentCommandLine|contains: \WindowsPowerShell\Modules\Pester\
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001
- T1216

## False Positives
- Legitimate use of Pester for writing tests for Powershell scripts and modules

## References
- https://twitter.com/Oddvarmoe/status/993383596244258816
- https://twitter.com/_st0pp3r_/status/1560072680887525378

## Metadata
- **Author:** frack113, Nasreddine Bencherchali
- **Date:** 2022-08-20
- **Rule ID:** `18988e1b-9087-4f8a-82fe-0414dce49878`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pester.yml`
