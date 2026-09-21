---
type: detection_rule
title: "Deletion of Volume Shadow Copies via WMI with PowerShell"
rule_id: 21ff4ca9-f13a-41ad-b828-0077b2af2e40
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Deletion of Volume Shadow Copies via WMI with PowerShell

## Description
Detects deletion of Windows Volume Shadow Copies with PowerShell code and Get-WMIObject. This technique is used by numerous ransomware families such as Sodinokibi/REvil

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_delete:
  CommandLine|contains:
  - .Delete()
  - Remove-WmiObject
  - rwmi
  - Remove-CimInstance
  - rcim
selection_get:
  CommandLine|contains:
  - Get-WmiObject
  - gwmi
  - Get-CimInstance
  - gcim
selection_shadowcopy:
  CommandLine|contains: Win32_ShadowCopy
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-5---windows---delete-volume-shadow-copies-via-wmi-with-powershell
- https://www.elastic.co/guide/en/security/current/volume-shadow-copy-deletion-via-powershell.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-20
- **Rule ID:** `21ff4ca9-f13a-41ad-b828-0077b2af2e40`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_shadowcopy_deletion.yml`
