---
type: detection_rule
title: "Service Startup Type Change Via Wmic.EXE"
rule_id: c0514f28-fdae-42df-b886-06e2b2bc5b37
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1685]
---

# Service Startup Type Change Via Wmic.EXE

## Description
Detects changes to service startup type to 'disabled' or 'manual' using the WMIC command-line utility.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - Manual
  - Disabled
  CommandLine|contains|all:
  - ' service '
  - ChangeStartMode
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1685

## False Positives
- Legitimate administrative changes to service startup types using WMIC, investigate accordingly.

## References
- https://blog.talosintelligence.com/uncovering-qilin-attack-methods-exposed-through-multiple-cases/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-04-27
- **Rule ID:** `c0514f28-fdae-42df-b886-06e2b2bc5b37`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_service_startup_change.yml`
