---
type: detection_rule
title: "PowerShell Deleted Mounted Share"
rule_id: 66a4d409-451b-4151-94f4-a55d559c49b0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.005]
---

# PowerShell Deleted Mounted Share

## Description
Detects when when a mounted share is removed. Adversaries may remove share connections that are no longer useful in order to clean up traces of their operation

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_module_load:
  ScriptBlockText|contains|all:
  - FileShare.cdxml
  - Microsoft.PowerShell.Core\Export-ModuleMember
  - ROOT/Microsoft/Windows/Storage/MSFT_FileShare
  - ObjectModelWrapper
  - Cmdletization.MethodParameter
selection:
  ScriptBlockText|contains:
  - Remove-SmbShare
  - Remove-FileShare
```

## MITRE ATT&CK
- T1070.005

## False Positives
- Administrators or Power users may remove their shares via cmd line

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.005/T1070.005.md

## Metadata
- **Author:** oscd.community, @redcanary, Zach Stanford @svch0st
- **Date:** 2020-10-08
- **Rule ID:** `66a4d409-451b-4151-94f4-a55d559c49b0`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_mounted_share_deletion.yml`
