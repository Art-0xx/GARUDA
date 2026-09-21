---
type: detection_rule
title: "Execute Invoke-command on Remote Host"
rule_id: 7b836d7f-179c-4ba4-90a7-a7e60afb48e6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.006]
---

# Execute Invoke-command on Remote Host

## Description
Adversaries may use Valid Accounts to interact with remote systems using Windows Remote Management (WinRM). The adversary may then perform actions as the logged-on user.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_cmdlet
selection_cmdlet:
  ScriptBlockText|contains|all:
  - 'invoke-command '
  - ' -ComputerName '
```

## MITRE ATT&CK
- T1021.006

## False Positives
- Legitimate script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.006/T1021.006.md#atomic-test-2---invoke-command
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/invoke-command?view=powershell-7.4

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `7b836d7f-179c-4ba4-90a7-a7e60afb48e6`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_command_remote.yml`
