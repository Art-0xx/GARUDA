---
type: detection_rule
title: "Recon Information for Export with PowerShell"
rule_id: a9723fcc-881c-424c-8709-fd61442ab3c3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1119]
---

# Recon Information for Export with PowerShell

## Description
Once established within a system or network, an adversary may use automated techniques for collecting internal data

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_action:
  ScriptBlockText|contains:
  - 'Get-Service '
  - 'Get-ChildItem '
  - 'Get-Process '
selection_redirect:
  ScriptBlockText|contains: '> $env:TEMP\'
```

## MITRE ATT&CK
- T1119

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1119/T1119.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-30
- **Rule ID:** `a9723fcc-881c-424c-8709-fd61442ab3c3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_recon_export.yml`
