---
type: detection_rule
title: "Invoke-Obfuscation Via Use Clip - PowerShell Module"
rule_id: ebdf49d8-b89c-46c9-8fdf-2c308406f6bd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Clip - PowerShell Module

## Description
Detects Obfuscated Powershell via use Clip.exe in Scripts

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|re: (?i)echo.*clip.*&&.*(Clipboard|i`?n`?v`?o`?k`?e`?)
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
- **Date:** 2020-10-09
- **Rule ID:** `ebdf49d8-b89c-46c9-8fdf-2c308406f6bd`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_use_clip.yml`
