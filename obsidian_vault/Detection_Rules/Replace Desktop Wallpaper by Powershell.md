---
type: detection_rule
title: "Replace Desktop Wallpaper by Powershell"
rule_id: c5ac6a1e-9407-45f5-a0ce-ca9a0806a287
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1491.001]
---

# Replace Desktop Wallpaper by Powershell

## Description
An adversary may deface systems internal to an organization in an attempt to intimidate or mislead users.
This may take the form of modifications to internal websites, or directly to user systems with the replacement of the desktop wallpaper

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  ScriptBlockText|contains|all:
  - Get-ItemProperty
  - 'Registry::'
  - HKEY_CURRENT_USER\Control Panel\Desktop\
  - WallPaper
selection_2:
  ScriptBlockText|contains: SystemParametersInfo(20,0,*,3)
```

## MITRE ATT&CK
- T1491.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1491.001/T1491.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-26
- **Rule ID:** `c5ac6a1e-9407-45f5-a0ce-ca9a0806a287`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_wallpaper.yml`
