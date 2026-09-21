---
type: detection_rule
title: "PowerShell Create Local User"
rule_id: 243de76f-4725-4f2e-8225-a8a69b15ad61
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1136.001]
---

# PowerShell Create Local User

## Description
Detects creation of a local user via PowerShell

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
  ScriptBlockText|contains: New-LocalUser
```

## MITRE ATT&CK
- T1059.001
- T1136.001

## False Positives
- Legitimate user creation

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1136.001/T1136.001.md

## Metadata
- **Author:** @ROxPinTeddy
- **Date:** 2020-04-11
- **Rule ID:** `243de76f-4725-4f2e-8225-a8a69b15ad61`
- **Source file:** `windows/powershell/powershell_script/posh_ps_create_local_user.yml`
