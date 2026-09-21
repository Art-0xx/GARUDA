---
type: detection_rule
title: "Control Panel Items"
rule_id: 0ba863e6-def5-4e50-9cea-4dd8c7dc46a4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.002, attack.t1546]
---

# Control Panel Items

## Description
Detects the malicious use of a control panel item

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_reg_* or (selection_cpl and not 1 of filter_cpl_*)
filter_cpl_igfx:
  CommandLine|contains|all:
  - 'regsvr32 '
  - ' /s '
  - igfxCPL.cpl
filter_cpl_sys:
  CommandLine|contains:
  - \System32\
  - '%System%'
  - '|C:\Windows\system32|'
selection_cpl:
  CommandLine|endswith: .cpl
selection_reg_cli:
  CommandLine|contains|all:
  - add
  - CurrentVersion\Control Panel\CPLs
selection_reg_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1218.002
- T1546

## False Positives
- Unknown

## References
- https://ired.team/offensive-security/code-execution/code-execution-through-control-panel-add-ins

## Metadata
- **Author:** Kyaw Min Thein, Furkan Caliskan (@caliskanfurkan_)
- **Date:** 2020-06-22
- **Rule ID:** `0ba863e6-def5-4e50-9cea-4dd8c7dc46a4`
- **Source file:** `windows/process_creation/proc_creation_win_control_panel_item.yml`
