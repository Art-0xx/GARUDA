---
type: detection_rule
title: "Powershell Suspicious Win32_PnPEntity"
rule_id: b26647de-4feb-4283-af6b-6117661283c5
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1120]
---

# Powershell Suspicious Win32_PnPEntity

## Description
Adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system.

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
  ScriptBlockText|contains: Win32_PnPEntity
```

## MITRE ATT&CK
- T1120

## False Positives
- Admin script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1120/T1120.md

## Metadata
- **Author:** frack113
- **Date:** 2021-08-23
- **Rule ID:** `b26647de-4feb-4283-af6b-6117661283c5`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_win32_pnpentity.yml`
