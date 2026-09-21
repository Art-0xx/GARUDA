---
type: detection_rule
title: "Invoke-Obfuscation Via Use MSHTA - PowerShell"
rule_id: e55a5195-4724-480e-a77e-3ebe64bd3759
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use MSHTA - PowerShell

## Description
Detects Obfuscated Powershell via use MSHTA in Scripts

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_4104
selection_4104:
  ScriptBlockText|contains|all:
  - set
  - '&&'
  - mshta
  - vbscript:createobject
  - .run
  - (window.close)
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-08
- **Rule ID:** `e55a5195-4724-480e-a77e-3ebe64bd3759`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_use_mhsta.yml`
