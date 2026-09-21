---
type: detection_rule
title: "PowerShell Get-Process LSASS in ScriptBlock"
rule_id: 84c174ab-d3ef-481f-9c86-a50d0b8e3edb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# PowerShell Get-Process LSASS in ScriptBlock

## Description
Detects a Get-Process command on lsass process, which is in almost all cases a sign of malicious activity

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
  ScriptBlockText|contains: Get-Process lsass
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Legitimate certificate exports invoked by administrators or users (depends on processes in the environment - filter if unusable)

## References
- https://web.archive.org/web/20220205033028/https://twitter.com/PythonResponder/status/1385064506049630211

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-04-23
- **Rule ID:** `84c174ab-d3ef-481f-9c86-a50d0b8e3edb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_getprocess_lsass.yml`
