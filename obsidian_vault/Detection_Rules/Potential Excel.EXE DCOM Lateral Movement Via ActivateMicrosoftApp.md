---
type: detection_rule
title: "Potential Excel.EXE DCOM Lateral Movement Via ActivateMicrosoftApp"
rule_id: 551d9c1f-816c-445b-a7a6-7a3864720d60
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.003]
---

# Potential Excel.EXE DCOM Lateral Movement Via ActivateMicrosoftApp

## Description
Detects suspicious child processes of Excel which could be an indicator of lateral movement leveraging the "ActivateMicrosoftApp" Excel DCOM object.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- OriginalFileName:
  - foxprow.exe
  - schdplus.exe
  - winproj.exe
- Image|endswith:
  - \foxprow.exe
  - \schdplus.exe
  - \winproj.exe
selection_parent:
  ParentImage|endswith: \excel.exe
```

## MITRE ATT&CK
- T1021.003

## False Positives
- Unknown

## References
- https://posts.specterops.io/lateral-movement-abuse-the-power-of-dcom-excel-application-3c016d0d9922
- https://github.com/grayhatkiller/SharpExShell
- https://learn.microsoft.com/en-us/office/vba/api/excel.xlmsapplication

## Metadata
- **Author:** Aaron Stratton
- **Date:** 2023-11-13
- **Rule ID:** `551d9c1f-816c-445b-a7a6-7a3864720d60`
- **Source file:** `windows/process_creation/proc_creation_win_office_excel_dcom_lateral_movement.yml`
