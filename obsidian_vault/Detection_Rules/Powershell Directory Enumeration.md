---
type: detection_rule
title: "Powershell Directory Enumeration"
rule_id: 162e69a7-7981-4344-84a9-0f1c9a217a52
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1083]
---

# Powershell Directory Enumeration

## Description
Detects technique used by MAZE ransomware to enumerate directories using Powershell

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
  - foreach
  - Get-ChildItem
  - '-Path '
  - '-ErrorAction '
  - SilentlyContinue
  - 'Out-File '
  - -append
```

## MITRE ATT&CK
- T1083

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1083/T1083.md
- https://www.mandiant.com/resources/tactics-techniques-procedures-associated-with-maze-ransomware-incidents

## Metadata
- **Author:** frack113
- **Date:** 2022-03-17
- **Rule ID:** `162e69a7-7981-4344-84a9-0f1c9a217a52`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_directory_enum.yml`
