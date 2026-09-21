---
type: detection_rule
title: "Invoke-Obfuscation CLIP+ Launcher - PowerShell"
rule_id: 73e67340-0d25-11eb-adc1-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation CLIP+ Launcher - PowerShell

## Description
Detects Obfuscated use of Clip.exe to execute PowerShell

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
  ScriptBlockText|re: cmd.{0,5}(?:/c|/r).+clip(?:\.exe)?.{0,4}&&.+clipboard]::\(\s\\"\{\d\}.+-f.+"
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `73e67340-0d25-11eb-adc1-0242ac120002`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_clip.yml`
