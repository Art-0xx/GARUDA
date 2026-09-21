---
type: detection_rule
title: "Enable Windows Remote Management"
rule_id: 991a9744-f2f0-44f2-bd33-9092eba17dc3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.006]
---

# Enable Windows Remote Management

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
  ScriptBlockText|contains: 'Enable-PSRemoting '
```

## MITRE ATT&CK
- T1021.006

## False Positives
- Legitimate script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.006/T1021.006.md#atomic-test-1---enable-windows-remote-management
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/enable-psremoting?view=powershell-7.2

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `991a9744-f2f0-44f2-bd33-9092eba17dc3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_enable_psremoting.yml`
