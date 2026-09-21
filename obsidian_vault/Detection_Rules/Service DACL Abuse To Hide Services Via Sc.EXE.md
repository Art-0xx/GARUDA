---
type: detection_rule
title: "Service DACL Abuse To Hide Services Via Sc.EXE"
rule_id: a537cfc3-4297-4789-92b5-345bfd845ad0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Service DACL Abuse To Hide Services Via Sc.EXE

## Description
Detects usage of the "sc.exe" utility adding a new service with special permission seen used by threat actors which makes the service hidden and unremovable.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - sdset
  - DCLCWPDTSD
selection_img:
- Image|endswith: \sc.exe
- OriginalFileName: sc.exe
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Unknown

## References
- https://blog.talosintelligence.com/2021/10/threat-hunting-in-large-datasets-by.html
- https://www.sans.org/blog/red-team-tactics-hiding-windows-services/
- https://twitter.com/Alh4zr3d/status/1580925761996828672
- https://itconnect.uw.edu/tools-services-support/it-systems-infrastructure/msinf/other-help/understanding-sddl-syntax/

## Metadata
- **Author:** Andreas Hunkeler (@Karneades)
- **Date:** 2021-12-20
- **Rule ID:** `a537cfc3-4297-4789-92b5-345bfd845ad0`
- **Source file:** `windows/process_creation/proc_creation_win_sc_sdset_hide_sevices.yml`
