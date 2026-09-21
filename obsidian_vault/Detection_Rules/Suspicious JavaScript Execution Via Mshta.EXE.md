---
type: detection_rule
title: "Suspicious JavaScript Execution Via Mshta.EXE"
rule_id: 67f113fa-e23d-4271-befa-30113b3e08b1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.005]
---

# Suspicious JavaScript Execution Via Mshta.EXE

## Description
Detects execution of javascript code using "mshta.exe".

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: javascript
selection_img:
- Image|endswith: \mshta.exe
- OriginalFileName: MSHTA.EXE
```

## MITRE ATT&CK
- T1218.005

## False Positives
- Unknown

## References
- https://eqllib.readthedocs.io/en/latest/analytics/6bc283c4-21f2-4aed-a05c-a9a3ffa95dd4.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218.005/T1218.005.md

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `67f113fa-e23d-4271-befa-30113b3e08b1`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_javascript.yml`
