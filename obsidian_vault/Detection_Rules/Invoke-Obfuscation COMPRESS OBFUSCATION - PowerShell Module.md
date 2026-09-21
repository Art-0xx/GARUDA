---
type: detection_rule
title: "Invoke-Obfuscation COMPRESS OBFUSCATION - PowerShell Module"
rule_id: 7034cbbb-cc55-4dc2-8dad-36c0b942e8f1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation COMPRESS OBFUSCATION - PowerShell Module

## Description
Detects Obfuscated Powershell via COMPRESS OBFUSCATION

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
  Payload|contains:
  - system.io.compression.deflatestream
  - system.io.streamreader
  Payload|contains|all:
  - new-object
  - text.encoding]::ascii
  Payload|endswith: readtoend
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
- **Rule ID:** `7034cbbb-cc55-4dc2-8dad-36c0b942e8f1`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_compress.yml`
