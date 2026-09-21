---
type: detection_rule
title: "Execute Code with Pester.bat"
rule_id: 59e938ff-0d6d-4dc3-b13f-36cc28734d4e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1216]
---

# Execute Code with Pester.bat

## Description
Detects code execution via Pester.bat (Pester - Powershell Modulte for testing)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
cmd_execution:
  CommandLine|contains|all:
  - pester
  - ;
  Image|endswith: \cmd.exe
condition: powershell_module or (cmd_execution and get_help)
get_help:
  CommandLine|contains:
  - help
  - \?
powershell_module:
  CommandLine|contains|all:
  - Pester
  - Get-Help
  Image|endswith:
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
- https://github.com/api0cradle/LOLBAS/blob/d148d278f5f205ce67cfaf49afdfb68071c7252a/OSScripts/pester.md

## Metadata
- **Author:** Julia Fomina, oscd.community
- **Date:** 2020-10-08
- **Rule ID:** `59e938ff-0d6d-4dc3-b13f-36cc28734d4e`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pester_1.yml`
