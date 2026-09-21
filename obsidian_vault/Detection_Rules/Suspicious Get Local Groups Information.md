---
type: detection_rule
title: "Suspicious Get Local Groups Information"
rule_id: cef24b90-dddc-4ae1-a09a-8764872f69fc
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Suspicious Get Local Groups Information

## Description
Detects the use of PowerShell modules and cmdlets to gather local group information.
Adversaries may use local system permission groups to determine which groups exist and which users belong to a particular group such as the local administrators group.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_localgroup or all of selection_wmi_*
selection_localgroup:
- Payload|contains:
  - 'get-localgroup '
  - 'get-localgroupmember '
- ContextInfo|contains:
  - 'get-localgroup '
  - 'get-localgroupmember '
selection_wmi_class:
- Payload|contains: win32_group
- ContextInfo|contains: win32_group
selection_wmi_module:
- Payload|contains:
  - 'get-wmiobject '
  - 'gwmi '
  - 'get-ciminstance '
  - 'gcim '
- ContextInfo|contains|all:
  - 'get-wmiobject '
  - 'gwmi '
  - 'get-ciminstance '
  - 'gcim '
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Administrator script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.001/T1069.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-12
- **Rule ID:** `cef24b90-dddc-4ae1-a09a-8764872f69fc`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_local_group_reco.yml`
