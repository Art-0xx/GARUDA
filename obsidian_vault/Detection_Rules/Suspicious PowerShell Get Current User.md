---
type: detection_rule
title: "Suspicious PowerShell Get Current User"
rule_id: 4096a49c-7de4-4da0-a230-c66ccd56ea5a
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# Suspicious PowerShell Get Current User

## Description
Detects the use of PowerShell to identify the current logged user.

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
  - '[System.Environment]::UserName'
  - $env:UserName
  - '[System.Security.Principal.WindowsIdentity]::GetCurrent()'
```

## MITRE ATT&CK
- T1033

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1033/T1033.md#atomic-test-4---user-discovery-with-env-vars-powershell-script
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1033/T1033.md#atomic-test-5---getcurrent-user-with-powershell-script

## Metadata
- **Author:** frack113
- **Date:** 2022-04-04
- **Rule ID:** `4096a49c-7de4-4da0-a230-c66ccd56ea5a`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_get_current_user.yml`
