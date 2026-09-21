---
type: detection_rule
title: "Code Executed Via Office Add-in XLL File"
rule_id: 36fbec91-fa1b-4d5d-8df1-8d8edcb632ad
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137.006]
---

# Code Executed Via Office Add-in XLL File

## Description
Adversaries may abuse Microsoft Office add-ins to obtain persistence on a compromised system.
Office add-ins can be used to add functionality to Office programs

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains|all:
  - 'new-object '
  - '-ComObject '
  - .application
  - .RegisterXLL
```

## MITRE ATT&CK
- T1137.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1137.006/T1137.006.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-28
- **Rule ID:** `36fbec91-fa1b-4d5d-8df1-8d8edcb632ad`
- **Source file:** `windows/powershell/powershell_script/posh_ps_office_comobject_registerxll.yml`
