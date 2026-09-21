---
type: detection_rule
title: "LSASS Process Reconnaissance Via Findstr.EXE"
rule_id: fe63010f-8823-4864-a96b-a7b4a0f7b929
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.006]
---

# LSASS Process Reconnaissance Via Findstr.EXE

## Description
Detects findstring commands that include the keyword lsass, which indicates recon actviity for the LSASS process PID

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_findstr_* or selection_special
selection_findstr_cli:
  CommandLine|contains: lsass
selection_findstr_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
selection_special:
  CommandLine|contains|windash:
  - ' /i "lsass'
  - ' /i lsass.exe'
  - findstr "lsass
  - findstr lsass
  - findstr.exe "lsass
  - findstr.exe lsass
```

## MITRE ATT&CK
- T1552.006

## False Positives
- Unknown

## References
- https://blog.talosintelligence.com/2022/08/recent-cyber-attack.html?m=1

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-12
- **Rule ID:** `fe63010f-8823-4864-a96b-a7b4a0f7b929`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_lsass.yml`
