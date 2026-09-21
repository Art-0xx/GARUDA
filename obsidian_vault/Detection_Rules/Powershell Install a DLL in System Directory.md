---
type: detection_rule
title: "Powershell Install a DLL in System Directory"
rule_id: 63bf8794-9917-45bc-88dd-e1b5abc0ecfd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1556.002]
---

# Powershell Install a DLL in System Directory

## Description
Uses PowerShell to install/copy a file into a system directory such as "System32" or "SysWOW64"

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|re: (Copy-Item|cpi) .{2,128} -Destination .{1,32}\\Windows\\(System32|SysWOW64)
```

## MITRE ATT&CK
- T1556.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1556.002/T1556.002.md#atomic-test-1---install-and-register-password-filter-dll

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-27
- **Rule ID:** `63bf8794-9917-45bc-88dd-e1b5abc0ecfd`
- **Source file:** `windows/powershell/powershell_script/posh_ps_copy_item_system_directory.yml`
