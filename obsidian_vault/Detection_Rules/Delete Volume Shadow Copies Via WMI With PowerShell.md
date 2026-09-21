---
type: detection_rule
title: "Delete Volume Shadow Copies Via WMI With PowerShell"
rule_id: 87df9ee1-5416-453a-8a08-e8d4a51e9ce1
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Delete Volume Shadow Copies Via WMI With PowerShell

## Description
Shadow Copies deletion using operating systems utilities via PowerShell

## Log Source
```yaml
category: ps_classic_start
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
  - Delete()
  - Remove-WmiObject
  Data|contains|all:
  - Get-WmiObject
  - Win32_ShadowCopy
```

## MITRE ATT&CK
- T1490

## False Positives
- Legitimate Administrator deletes Shadow Copies using operating systems utilities for legitimate reason

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md
- https://www.fortinet.com/blog/threat-research/stomping-shadow-copies-a-second-look-into-deletion-methods

## Metadata
- **Author:** frack113
- **Date:** 2021-06-03
- **Rule ID:** `87df9ee1-5416-453a-8a08-e8d4a51e9ce1`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_delete_volume_shadow_copies.yml`
