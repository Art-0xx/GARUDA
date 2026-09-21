---
type: detection_rule
title: "UtilityFunctions.ps1 Proxy Dll"
rule_id: 0403d67d-6227-4ea8-8145-4e72db7da120
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# UtilityFunctions.ps1 Proxy Dll

## Description
Detects the use of a Microsoft signed script executing a managed DLL with PowerShell.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - UtilityFunctions.ps1
  - 'RegSnapin '
```

## MITRE ATT&CK
- T1216

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Scripts/UtilityFunctions/

## Metadata
- **Author:** frack113
- **Date:** 2022-05-28
- **Rule ID:** `0403d67d-6227-4ea8-8145-4e72db7da120`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_utilityfunctions.yml`
