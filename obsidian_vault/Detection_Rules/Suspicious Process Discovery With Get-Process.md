---
type: detection_rule
title: "Suspicious Process Discovery With Get-Process"
rule_id: af4c87ce-bdda-4215-b998-15220772e993
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1057]
---

# Suspicious Process Discovery With Get-Process

## Description
Get the processes that are running on the local computer.

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
  ScriptBlockText|contains: Get-Process
```

## MITRE ATT&CK
- T1057

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1057/T1057.md#atomic-test-3---process-discovery---get-process
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process?view=powershell-7.4

## Metadata
- **Author:** frack113
- **Date:** 2022-03-17
- **Rule ID:** `af4c87ce-bdda-4215-b998-15220772e993`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_get_process.yml`
