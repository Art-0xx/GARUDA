---
type: detection_rule
title: "Renamed MegaSync Execution"
rule_id: 643bdcac-8b82-49f4-9fd9-25a90b929f3b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Renamed MegaSync Execution

## Description
Detects the execution of a renamed MegaSync.exe as seen used by ransomware families like Nefilim, Sodinokibi, Pysa, and Conti.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \megasync.exe
selection:
  OriginalFileName: megasync.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Software that illegally integrates MegaSync in a renamed form
- Administrators that have renamed MegaSync

## References
- https://redcanary.com/blog/rclone-mega-extortion/

## Metadata
- **Author:** Sittikorn S
- **Date:** 2021-06-22
- **Rule ID:** `643bdcac-8b82-49f4-9fd9-25a90b929f3b`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_megasync.yml`
