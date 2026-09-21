---
type: detection_rule
title: "Powershell Inline Execution From A File"
rule_id: ee218c12-627a-4d27-9e30-d6fb2fe22ed2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Powershell Inline Execution From A File

## Description
Detects inline execution of PowerShell code from a file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_exec:
  CommandLine|contains:
  - 'iex '
  - 'Invoke-Expression '
  - 'Invoke-Command '
  - 'icm '
selection_raw:
  CommandLine|contains: ' -raw'
selection_read:
  CommandLine|contains:
  - 'cat '
  - 'get-content '
  - 'type '
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse?slide=50

## Metadata
- **Author:** frack113
- **Date:** 2022-12-25
- **Rule ID:** `ee218c12-627a-4d27-9e30-d6fb2fe22ed2`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_exec_data_file.yml`
