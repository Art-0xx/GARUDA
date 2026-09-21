---
type: detection_rule
title: "Suspicious Start-Process PassThru"
rule_id: 0718cd72-f316-4aa2-988f-838ea8533277
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Suspicious Start-Process PassThru

## Description
Powershell use PassThru option to start in background

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  ScriptBlockText|contains:
  - 'Start-Process '
  - 'saps '
selection_param:
  ScriptBlockText|contains|all:
  - '-PassThru '
  - '-FilePath '
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1036.003/T1036.003.md
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process?view=powershell-7.6

## Metadata
- **Author:** frack113
- **Date:** 2022-01-15
- **Rule ID:** `0718cd72-f316-4aa2-988f-838ea8533277`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_start_process.yml`
