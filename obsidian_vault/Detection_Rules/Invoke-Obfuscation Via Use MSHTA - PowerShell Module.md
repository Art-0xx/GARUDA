---
type: detection_rule
title: "Invoke-Obfuscation Via Use MSHTA - PowerShell Module"
rule_id: 07ad2ea8-6a55-4ac6-bf3e-91b8e59676eb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use MSHTA - PowerShell Module

## Description
Detects Obfuscated Powershell via use MSHTA in Scripts

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Payload|contains|all:
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
- **Rule ID:** `07ad2ea8-6a55-4ac6-bf3e-91b8e59676eb`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_use_mhsta.yml`
