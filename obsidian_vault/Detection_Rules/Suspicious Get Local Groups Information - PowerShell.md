---
type: detection_rule
title: "Suspicious Get Local Groups Information - PowerShell"
rule_id: fa6a5a45-3ee2-4529-aa14-ee5edc9e29cb
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Suspicious Get Local Groups Information - PowerShell

## Description
Detects the use of PowerShell modules and cmdlets to gather local group information.
Adversaries may use local system permission groups to determine which groups exist and which users belong to a particular group such as the local administrators group.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_localgroup or all of selection_wmi_*
selection_localgroup:
  ScriptBlockText|contains:
  - 'get-localgroup '
  - 'get-localgroupmember '
selection_wmi_class:
  ScriptBlockText|contains: win32_group
selection_wmi_module:
  ScriptBlockText|contains:
  - 'get-wmiobject '
  - 'gwmi '
  - 'get-ciminstance '
  - 'gcim '
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Inventory scripts or admin tasks

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.001/T1069.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-12
- **Rule ID:** `fa6a5a45-3ee2-4529-aa14-ee5edc9e29cb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_local_group_reco.yml`
