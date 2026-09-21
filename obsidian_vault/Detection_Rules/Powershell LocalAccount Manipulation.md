---
type: detection_rule
title: "Powershell LocalAccount Manipulation"
rule_id: 4fdc44df-bfe9-4fcc-b041-68f5a2d3031c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1098]
---

# Powershell LocalAccount Manipulation

## Description
Adversaries may manipulate accounts to maintain access to victim systems.
Account manipulation may consist of any action that preserves adversary access to a compromised account, such as modifying credentials or permission groups

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
  ScriptBlockText|contains:
  - Disable-LocalUser
  - Enable-LocalUser
  - Get-LocalUser
  - Set-LocalUser
  - New-LocalUser
  - Rename-LocalUser
  - Remove-LocalUser
```

## MITRE ATT&CK
- T1098

## False Positives
- Legitimate administrative script

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1098/T1098.md#atomic-test-1---admin-account-manipulate
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/?view=powershell-5.1

## Metadata
- **Author:** frack113
- **Date:** 2021-12-28
- **Rule ID:** `4fdc44df-bfe9-4fcc-b041-68f5a2d3031c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_localuser.yml`
