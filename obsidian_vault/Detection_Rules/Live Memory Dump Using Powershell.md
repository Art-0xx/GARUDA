---
type: detection_rule
title: "Live Memory Dump Using Powershell"
rule_id: cd185561-4760-45d6-a63e-a51325112cae
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Live Memory Dump Using Powershell

## Description
Detects usage of a PowerShell command to dump the live memory of a Windows machine

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
  - Get-StorageDiagnosticInfo
  - -IncludeLiveDump
```

## MITRE ATT&CK
- T1003

## False Positives
- Diagnostics

## References
- https://learn.microsoft.com/en-us/powershell/module/storage/get-storagediagnosticinfo?view=windowsserver2022-ps

## Metadata
- **Author:** Max Altgelt (Nextron Systems)
- **Date:** 2021-09-21
- **Rule ID:** `cd185561-4760-45d6-a63e-a51325112cae`
- **Source file:** `windows/powershell/powershell_script/posh_ps_memorydump_getstoragediagnosticinfo.yml`
