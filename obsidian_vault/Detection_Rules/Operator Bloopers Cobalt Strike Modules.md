---
type: detection_rule
title: "Operator Bloopers Cobalt Strike Modules"
rule_id: 4f154fb6-27d1-4813-a759-78b93e0b9c48
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.003]
---

# Operator Bloopers Cobalt Strike Modules

## Description
Detects Cobalt Strike module/commands accidentally entered in CMD shell

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
  - Invoke-UserHunter
  - Invoke-ShareFinder
  - Invoke-Kerberoast
  - Invoke-SMBAutoBrute
  - Invoke-Nightmare
  - zerologon
  - av_query
selection_img:
- OriginalFileName: Cmd.Exe
- Image|endswith: \cmd.exe
```

## MITRE ATT&CK
- T1059.003

## False Positives
- Unknown

## References
- https://hstechdocs.helpsystems.com/manuals/cobaltstrike/current/userguide/content/cobalt-4-5-user-guide.pdf
- https://thedfirreport.com/2021/10/04/bazarloader-and-the-conti-leaks/
- https://thedfirreport.com/2022/06/16/sans-ransomware-summit-2022-can-you-detect-this/

## Metadata
- **Author:** _pete_0, TheDFIRReport
- **Date:** 2022-05-06
- **Rule ID:** `4f154fb6-27d1-4813-a759-78b93e0b9c48`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_cobaltstrike_bloopers_modules.yml`
