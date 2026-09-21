---
type: detection_rule
title: "ScreenSaver Registry Key Set"
rule_id: 40b6e656-4e11-4c0c-8772-c1cc6dae34ce
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# ScreenSaver Registry Key Set

## Description
Detects registry key established after masqueraded .scr file execution using Rundll32 through desk.cpl

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and registry and not filter
filter:
  Details|contains:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
registry:
  Details|endswith: .scr
  TargetObject|contains: \Control Panel\Desktop\SCRNSAVE.EXE
selection:
  Image|endswith: \rundll32.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Legitimate use of screen saver

## References
- https://twitter.com/VakninHai/status/1517027824984547329
- https://twitter.com/pabraeken/status/998627081360695297
- https://jstnk9.github.io/jstnk9/research/InstallScreenSaver-SCR-files

## Metadata
- **Author:** Jose Luis Sanchez Martinez (@Joseliyo_Jstnk)
- **Date:** 2022-05-04
- **Rule ID:** `40b6e656-4e11-4c0c-8772-c1cc6dae34ce`
- **Source file:** `windows/registry/registry_set/registry_set_scr_file_executed_by_rundll32.yml`
