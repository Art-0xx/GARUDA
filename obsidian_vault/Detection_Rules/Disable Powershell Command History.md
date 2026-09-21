---
type: detection_rule
title: "Disable Powershell Command History"
rule_id: 602f5669-6927-4688-84db-0d4b7afb2150
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# Disable Powershell Command History

## Description
Detects scripts or commands that disabled the Powershell command history by removing psreadline module

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
  - Remove-Module
  - psreadline
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Legitimate script that disables the command history

## References
- https://twitter.com/DissectMalware/status/1062879286749773824

## Metadata
- **Author:** Ali Alwashali
- **Date:** 2022-08-21
- **Rule ID:** `602f5669-6927-4688-84db-0d4b7afb2150`
- **Source file:** `windows/powershell/powershell_script/posh_ps_disable_psreadline_command_history.yml`
