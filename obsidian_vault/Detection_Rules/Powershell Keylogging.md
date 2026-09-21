---
type: detection_rule
title: "Powershell Keylogging"
rule_id: 34f90d3c-c297-49e9-b26d-911b05a4866c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1056.001]
---

# Powershell Keylogging

## Description
Adversaries may log user keystrokes to intercept credentials as the user types them.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_basic:
  ScriptBlockText|contains: Get-Keystrokes
selection_high:
  ScriptBlockText|contains|all:
  - Get-ProcAddress user32.dll GetAsyncKeyState
  - Get-ProcAddress user32.dll GetForegroundWindow
```

## MITRE ATT&CK
- T1056.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1056.001/src/Get-Keystrokes.ps1

## Metadata
- **Author:** frack113
- **Date:** 2021-07-30
- **Rule ID:** `34f90d3c-c297-49e9-b26d-911b05a4866c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_keylogging.yml`
