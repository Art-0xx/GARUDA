---
type: detection_rule
title: "HackTool - PurpleSharp Execution"
rule_id: ff23ffbc-3378-435e-992f-0624dcf93ab4
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1587]
---

# HackTool - PurpleSharp Execution

## Description
Detects the execution of the PurpleSharp adversary simulation tool

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cli:
  CommandLine|contains:
  - xyz123456.exe
  - PurpleSharp
selection_img:
- Image|contains: \purplesharp
- OriginalFileName: PurpleSharp.exe
```

## MITRE ATT&CK
- T1587

## False Positives
- Unlikely

## References
- https://github.com/mvelazc0/PurpleSharp

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-06-18
- **Rule ID:** `ff23ffbc-3378-435e-992f-0624dcf93ab4`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_purplesharp_indicators.yml`
