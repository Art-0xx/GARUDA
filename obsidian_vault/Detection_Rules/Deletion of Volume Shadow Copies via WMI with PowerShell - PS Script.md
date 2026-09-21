---
type: detection_rule
title: "Deletion of Volume Shadow Copies via WMI with PowerShell - PS Script"
rule_id: c1337eb8-921a-4b59-855b-4ba188ddcc42
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Deletion of Volume Shadow Copies via WMI with PowerShell - PS Script

## Description
Detects deletion of Windows Volume Shadow Copies with PowerShell code and Get-WMIObject. This technique is used by numerous ransomware families such as Sodinokibi/REvil

## Log Source
```yaml
category: ps_script
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_delete:
  ScriptBlockText|contains:
  - .Delete()
  - Remove-WmiObject
  - rwmi
  - Remove-CimInstance
  - rcim
selection_get:
  ScriptBlockText|contains:
  - Get-WmiObject
  - gwmi
  - Get-CimInstance
  - gcim
selection_shadowcopy:
  ScriptBlockText|contains: Win32_ShadowCopy
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-5---windows---delete-volume-shadow-copies-via-wmi-with-powershell
- https://www.elastic.co/guide/en/security/current/volume-shadow-copy-deletion-via-powershell.html

## Metadata
- **Author:** Tim Rauch, frack113
- **Date:** 2022-09-20
- **Rule ID:** `c1337eb8-921a-4b59-855b-4ba188ddcc42`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_win32_shadowcopy_deletion.yml`
