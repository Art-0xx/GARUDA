---
type: detection_rule
title: "CobaltStrike Load by Rundll32"
rule_id: ae9c6a7c-9521-42a6-915e-5aaa8689d529
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# CobaltStrike Load by Rundll32

## Description
Rundll32 can be use by Cobalt Strike with StartW function to load DLLs from the command line.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_params:
  CommandLine|contains: .dll
  CommandLine|endswith:
  - ' StartW'
  - ',StartW'
selection_rundll:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
- CommandLine|contains:
  - rundll32.exe
  - 'rundll32 '
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://www.cobaltstrike.com/help-windows-executable
- https://redcanary.com/threat-detection-report/
- https://thedfirreport.com/2020/10/18/ryuk-in-5-hours/

## Metadata
- **Author:** Wojciech Lesicki
- **Date:** 2021-06-01
- **Rule ID:** `ae9c6a7c-9521-42a6-915e-5aaa8689d529`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_cobaltstrike_load_by_rundll32.yml`
