---
type: detection_rule
title: "Potential PowerShell Obfuscation Using Character Join"
rule_id: e8314f79-564d-4f79-bc13-fbc0bf2660d8
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Potential PowerShell Obfuscation Using Character Join

## Description
Detects specific techniques often seen used inside of PowerShell scripts to obfscuate Alias creation

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
  - -Alias
  - ' -Value (-join('
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-09
- **Rule ID:** `e8314f79-564d-4f79-bc13-fbc0bf2660d8`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_alias_obfscuation.yml`
