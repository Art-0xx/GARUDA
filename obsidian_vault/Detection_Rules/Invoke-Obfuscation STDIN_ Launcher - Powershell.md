---
type: detection_rule
title: "Invoke-Obfuscation STDIN+ Launcher - Powershell"
rule_id: 779c8c12-0eb1-11eb-adc1-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation STDIN+ Launcher - Powershell

## Description
Detects Obfuscated use of stdin to execute PowerShell

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
  ScriptBlockText|re: cmd.{0,5}(?:/c|/r).+powershell.+(?:\$?\{?input\}?|noexit).+"
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
- **Date:** 2020-10-15
- **Rule ID:** `779c8c12-0eb1-11eb-adc1-0242ac120002`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_stdin.yml`
