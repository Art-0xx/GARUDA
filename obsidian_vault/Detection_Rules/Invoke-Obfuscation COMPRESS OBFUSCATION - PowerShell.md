---
type: detection_rule
title: "Invoke-Obfuscation COMPRESS OBFUSCATION - PowerShell"
rule_id: 20e5497e-331c-4cd5-8d36-935f6e2a9a07
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation COMPRESS OBFUSCATION - PowerShell

## Description
Detects Obfuscated Powershell via COMPRESS OBFUSCATION

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
  ScriptBlockText|contains:
  - system.io.compression.deflatestream
  - system.io.streamreader
  ScriptBlockText|contains|all:
  - new-object
  - text.encoding]::ascii
  ScriptBlockText|endswith: readtoend
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-18
- **Rule ID:** `20e5497e-331c-4cd5-8d36-935f6e2a9a07`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_compress.yml`
