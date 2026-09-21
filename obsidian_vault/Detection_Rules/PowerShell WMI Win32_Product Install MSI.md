---
type: detection_rule
title: "PowerShell WMI Win32_Product Install MSI"
rule_id: 91109523-17f0-4248-a800-f81d9e7c081d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.007]
---

# PowerShell WMI Win32_Product Install MSI

## Description
Detects the execution of an MSI file using PowerShell and the WMI Win32_Product class

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
  ScriptBlockText|contains|all:
  - 'Invoke-CimMethod '
  - '-ClassName '
  - 'Win32_Product '
  - '-MethodName '
  - .msi
```

## MITRE ATT&CK
- T1218.007

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.007/T1218.007.md

## Metadata
- **Author:** frack113
- **Date:** 2022-04-24
- **Rule ID:** `91109523-17f0-4248-a800-f81d9e7c081d`
- **Source file:** `windows/powershell/powershell_script/posh_ps_win32_product_install_msi.yml`
