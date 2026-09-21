---
type: detection_rule
title: "Clear PowerShell History - PowerShell Module"
rule_id: f99276ad-d122-4989-a09a-d00904a5f9d2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# Clear PowerShell History - PowerShell Module

## Description
Detects keywords that could indicate clearing PowerShell history

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_payload_* or all of selection_1*
selection_1a_payload:
  Payload|contains:
  - del
  - Remove-Item
  - rm
selection_1b_payload:
  Payload|contains: (Get-PSReadlineOption).HistorySavePath
selection_payload_2:
  Payload|contains|all:
  - Set-PSReadlineOption
  - "\u2013HistorySaveStyle"
  - SaveNothing
selection_payload_3:
  Payload|contains|all:
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
- **Date:** 2019-10-25
- **Rule ID:** `f99276ad-d122-4989-a09a-d00904a5f9d2`
- **Source file:** `windows/powershell/powershell_module/posh_pm_clear_powershell_history.yml`
