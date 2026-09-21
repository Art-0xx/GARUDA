---
type: detection_rule
title: "PowerShell PSAttack"
rule_id: b7ec41a4-042c-4f31-a5db-d0fcde9fa5c5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell PSAttack

## Description
Detects the use of PSAttack PowerShell hack tool

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
  ScriptBlockText|contains: PS ATTACK!!!
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://adsecurity.org/?p=2921

## Metadata
- **Author:** Sean Metcalf (source), Florian Roth (Nextron Systems)
- **Date:** 2017-03-05
- **Rule ID:** `b7ec41a4-042c-4f31-a5db-d0fcde9fa5c5`
- **Source file:** `windows/powershell/powershell_script/posh_ps_psattack.yml`
