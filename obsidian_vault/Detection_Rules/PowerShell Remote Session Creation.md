---
type: detection_rule
title: "PowerShell Remote Session Creation"
rule_id: a0edd39f-a0c6-4c17-8141-261f958e8d8f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Remote Session Creation

## Description
Adversaries may abuse PowerShell commands and scripts for execution.
PowerShell is a powerful interactive command-line interface and scripting environment included in the Windows operating system

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
  - New-PSSession
  - '-ComputerName '
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1059.001/T1059.001.md#atomic-test-10---powershell-invoke-downloadcradle
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/new-pssession?view=powershell-7.4

## Metadata
- **Author:** frack113
- **Date:** 2022-01-06
- **Rule ID:** `a0edd39f-a0c6-4c17-8141-261f958e8d8f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_remote_session_creation.yml`
