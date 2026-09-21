---
type: detection_rule
title: "Clear PowerShell History - PowerShell"
rule_id: 26b692dc-1722-49b2-b496-a8258aa6371d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# Clear PowerShell History - PowerShell

## Description
Detects keywords that could indicate clearing PowerShell history

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* or all of selection1*
selection1a:
  ScriptBlockText|contains:
  - del
  - Remove-Item
  - rm
selection1b:
  ScriptBlockText|contains: (Get-PSReadlineOption).HistorySavePath
selection_2:
  ScriptBlockText|contains|all:
  - Set-PSReadlineOption
  - "\u2013HistorySaveStyle"
  - SaveNothing
selection_3:
  ScriptBlockText|contains|all:
  - Set-PSReadlineOption
  - -HistorySaveStyle
  - SaveNothing
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Legitimate PowerShell scripts

## References
- https://gist.github.com/hook-s3c/7363a856c3cdbadeb71085147f042c1a

## Metadata
- **Author:** Ilyas Ochkov, Jonhnathan Ribeiro, Daniil Yugoslavskiy, oscd.community
- **Date:** 2022-01-25
- **Rule ID:** `26b692dc-1722-49b2-b496-a8258aa6371d`
- **Source file:** `windows/powershell/powershell_script/posh_ps_clear_powershell_history.yml`
