---
type: detection_rule
title: "Suspicious Unblock-File"
rule_id: 5947497f-1aa4-41dd-9693-c9848d58727d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553.005]
---

# Suspicious Unblock-File

## Description
Remove the Zone.Identifier alternate data stream which identifies the file as downloaded from the internet.

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
  - 'Unblock-File '
  - '-Path '
```

## MITRE ATT&CK
- T1553.005

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1553.005/T1553.005.md#atomic-test-3---remove-the-zoneidentifier-alternate-data-stream
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/unblock-file?view=powershell-7.2

## Metadata
- **Author:** frack113
- **Date:** 2022-02-01
- **Rule ID:** `5947497f-1aa4-41dd-9693-c9848d58727d`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_unblock_file.yml`
