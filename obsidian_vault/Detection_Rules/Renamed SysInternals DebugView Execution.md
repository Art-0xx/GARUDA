---
type: detection_rule
title: "Renamed SysInternals DebugView Execution"
rule_id: cd764533-2e07-40d6-a718-cfeec7f2da7f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1588.002]
---

# Renamed SysInternals DebugView Execution

## Description
Detects suspicious renamed SysInternals DebugView execution

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \Dbgview.exe
  OriginalFileName: Dbgview.exe
selection:
  Product: Sysinternals DebugView
```

## MITRE ATT&CK
- T1588.002

## False Positives
- Unknown

## References
- https://www.epicturla.com/blog/sysinturla

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-05-28
- **Rule ID:** `cd764533-2e07-40d6-a718-cfeec7f2da7f`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_sysinternals_debugview.yml`
