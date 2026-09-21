---
type: detection_rule
title: "Invoke-Obfuscation Via Stdin - Powershell"
rule_id: 86b896ba-ffa1-4fea-83e3-ee28a4c915c7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Stdin - Powershell

## Description
Detects Obfuscated Powershell via Stdin in Scripts

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
  ScriptBlockText|re: (?i)(set).*&&\s?set.*(environment|invoke|\$\{?input).*&&.*"
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
- **Date:** 2020-10-12
- **Rule ID:** `86b896ba-ffa1-4fea-83e3-ee28a4c915c7`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_stdin.yml`
