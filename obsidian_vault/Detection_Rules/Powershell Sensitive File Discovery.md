---
type: detection_rule
title: "Powershell Sensitive File Discovery"
rule_id: 7d416556-6502-45b2-9bad-9d2f05f38997
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1083]
---

# Powershell Sensitive File Discovery

## Description
Detect adversaries enumerate sensitive files

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_action:
  ScriptBlockText|contains:
  - ls
  - get-childitem
  - gci
selection_file:
  ScriptBlockText|contains:
  - .pass
  - .kdbx
  - .kdb
selection_recurse:
  ScriptBlockText|contains: -recurse
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://twitter.com/malmoeb/status/1570814999370801158

## Metadata
- **Author:** frack113
- **Date:** 2022-09-16
- **Rule ID:** `7d416556-6502-45b2-9bad-9d2f05f38997`
- **Source file:** `windows/powershell/powershell_script/posh_ps_sensitive_file_discovery.yml`
