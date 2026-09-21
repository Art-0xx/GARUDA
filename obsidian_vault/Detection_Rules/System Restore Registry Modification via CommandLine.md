---
type: detection_rule
title: "System Restore Registry Modification via CommandLine"
rule_id: 7c06ab9b-b1d2-4ba9-b06e-09491ded20d9
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# System Restore Registry Modification via CommandLine

## Description
Detects system restore registry modification via command line, which can be used by adversaries to disable system restore on the computer.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_action:
  CommandLine|contains:
  - ' add '
  - Set-ItemProperty
  - New-ItemProperty
selection_cli_reg_key:
  CommandLine|contains:
  - DisableConfig
  - DisableSR
selection_cli_reg_root:
  CommandLine|contains:
  - \SOFTWARE\Policies\Microsoft\Windows NT\SystemRestore
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\SystemRestore
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - powershell.exe
  - pwsh.dll
  - reg.exe
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-9---disable-system-restore-through-registry

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-03-11
- **Rule ID:** `7c06ab9b-b1d2-4ba9-b06e-09491ded20d9`
- **Source file:** `windows/process_creation/proc_creation_win_reg_system_restore_modification.yml`
