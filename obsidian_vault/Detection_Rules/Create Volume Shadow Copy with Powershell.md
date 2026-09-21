---
type: detection_rule
title: "Create Volume Shadow Copy with Powershell"
rule_id: afd12fed-b0ec-45c9-a13d-aa86625dac81
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# Create Volume Shadow Copy with Powershell

## Description
Adversaries may attempt to access or create a copy of the Active Directory domain database in order to steal credential information

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
  - Win32_ShadowCopy
  - ).Create(
  - ClientAccessible
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Legitimate PowerShell scripts

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-wmiobject?view=powershell-5.1&viewFallbackFrom=powershell-7

## Metadata
- **Author:** frack113
- **Date:** 2022-01-12
- **Rule ID:** `afd12fed-b0ec-45c9-a13d-aa86625dac81`
- **Source file:** `windows/powershell/powershell_script/posh_ps_create_volume_shadow_copy.yml`
