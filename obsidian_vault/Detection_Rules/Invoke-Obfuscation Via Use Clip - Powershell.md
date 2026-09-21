---
type: detection_rule
title: "Invoke-Obfuscation Via Use Clip - Powershell"
rule_id: db92dd33-a3ad-49cf-8c2c-608c3e30ace0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Clip - Powershell

## Description
Detects Obfuscated Powershell via use Clip.exe in Scripts

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
  ScriptBlockText|re: (?i)echo.*clip.*&&.*(Clipboard|i`?n`?v`?o`?k`?e`?)
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
- **Rule ID:** `db92dd33-a3ad-49cf-8c2c-608c3e30ace0`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_use_clip.yml`
