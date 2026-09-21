---
type: detection_rule
title: "Code Execution via Pcwutl.dll"
rule_id: 9386d78a-7207-4048-9c9f-a93a7c2d1c05
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Code Execution via Pcwutl.dll

## Description
Detects launch of executable by calling the LaunchApplication function from pcwutl.dll library.

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
  - pcwutl
  - LaunchApplication
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Use of Program Compatibility Troubleshooter Helper

## References
- https://lolbas-project.github.io/lolbas/Libraries/Pcwutl/
- https://twitter.com/harr0ey/status/989617817849876488

## Metadata
- **Author:** Julia Fomina, oscd.community
- **Date:** 2020-10-05
- **Rule ID:** `9386d78a-7207-4048-9c9f-a93a7c2d1c05`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_pcwutl.yml`
