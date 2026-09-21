---
type: detection_rule
title: "PowerShell Get-Process LSASS"
rule_id: b2815d0d-7481-4bf0-9b6c-a4c48a94b349
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.004]
---

# PowerShell Get-Process LSASS

## Description
Detects a "Get-Process" cmdlet and it's aliases on lsass process, which is in almost all cases a sign of malicious activity

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
  - Get-Process lsas
  - ps lsas
  - gps lsas
```

## MITRE ATT&CK
- T1552.004

## False Positives
- Unknown

## References
- https://web.archive.org/web/20220205033028/https://twitter.com/PythonResponder/status/1385064506049630211

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-04-23
- **Rule ID:** `b2815d0d-7481-4bf0-9b6c-a4c48a94b349`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_getprocess_lsass.yml`
