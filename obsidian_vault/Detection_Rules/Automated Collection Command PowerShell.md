---
type: detection_rule
title: "Automated Collection Command PowerShell"
rule_id: c1dda054-d638-4c16-afc8-53e007f3fbc5
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1119]
---

# Automated Collection Command PowerShell

## Description
Once established within a system or network, an adversary may use automated techniques for collecting internal data.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cmd:
  ScriptBlockText|contains|all:
  - Get-ChildItem
  - ' -Recurse '
  - ' -Include '
selection_ext:
  ScriptBlockText|contains:
  - .doc
  - .docx
  - .xls
  - .xlsx
  - .ppt
  - .pptx
  - .rtf
  - .pdf
  - .txt
```

## MITRE ATT&CK
- T1119

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1119/T1119.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-28
- **Rule ID:** `c1dda054-d638-4c16-afc8-53e007f3fbc5`
- **Source file:** `windows/powershell/powershell_script/posh_ps_automated_collection.yml`
