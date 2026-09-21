---
type: detection_rule
title: "Suspicious IO.FileStream"
rule_id: 70ad982f-67c8-40e0-a955-b920c2fa05cb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# Suspicious IO.FileStream

## Description
Open a handle on the drive volume via the \\.\ DOS device path specifier and perform direct access read of the first few bytes of the volume.

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
  - New-Object
  - IO.FileStream
  - \\\\.\\
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1006/T1006.md

## Metadata
- **Author:** frack113
- **Date:** 2022-01-09
- **Rule ID:** `70ad982f-67c8-40e0-a955-b920c2fa05cb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_iofilestream.yml`
