---
type: detection_rule
title: "Execution via stordiag.exe"
rule_id: 961e0abb-1b1e-4c84-a453-aafe56ad0d34
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Execution via stordiag.exe

## Description
Detects the use of stordiag.exe to execute schtasks.exe systeminfo.exe and fltmc.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentImage|startswith:
  - c:\windows\system32\
  - c:\windows\syswow64\
selection:
  Image|endswith:
  - \schtasks.exe
  - \systeminfo.exe
  - \fltmc.exe
  ParentImage|endswith: \stordiag.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate usage of stordiag.exe.

## References
- https://strontic.github.io/xcyclopedia/library/stordiag.exe-1F08FC87C373673944F6A7E8B18CD845.html
- https://twitter.com/eral4m/status/1451112385041911809

## Metadata
- **Author:** Austin Songer (@austinsonger)
- **Date:** 2021-10-21
- **Rule ID:** `961e0abb-1b1e-4c84-a453-aafe56ad0d34`
- **Source file:** `windows/process_creation/proc_creation_win_stordiag_susp_child_process.yml`
