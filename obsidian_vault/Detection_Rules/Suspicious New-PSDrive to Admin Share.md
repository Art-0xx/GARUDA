---
type: detection_rule
title: "Suspicious New-PSDrive to Admin Share"
rule_id: 1c563233-030e-4a07-af8c-ee0490a66d3a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.002]
---

# Suspicious New-PSDrive to Admin Share

## Description
Adversaries may use to interact with a remote network share using Server Message Block (SMB). The adversary may then perform actions as the logged-on user.

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
  - New-PSDrive
  - '-psprovider '
  - filesystem
  - '-root '
  - \\\\
  - $
```

## MITRE ATT&CK
- T1021.002

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.002/T1021.002.md#atomic-test-2---map-admin-share-powershell
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-psdrive?view=powershell-7.2

## Metadata
- **Author:** frack113
- **Date:** 2022-08-13
- **Rule ID:** `1c563233-030e-4a07-af8c-ee0490a66d3a`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_new_psdrive.yml`
