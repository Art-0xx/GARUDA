---
type: detection_rule
title: "Suspicious Process Parents"
rule_id: cbec226f-63d9-4eca-9f52-dfb6652f24df
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Suspicious Process Parents

## Description
Detects suspicious parent processes that should not have any children or should only have a single possible child program

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection or ( selection_special and not 1 of filter_* )
filter_null:
  Image: null
filter_special:
  Image|endswith:
  - \WerFault.exe
  - \wermgr.exe
  - \conhost.exe
  - \mmc.exe
  - \win32calc.exe
  - \notepad.exe
selection:
  ParentImage|endswith:
  - \minesweeper.exe
  - \winver.exe
  - \bitsadmin.exe
selection_special:
  ParentImage|endswith:
  - \csrss.exe
  - \certutil.exe
  - \eventvwr.exe
  - \calc.exe
  - \notepad.exe
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://twitter.com/x86matthew/status/1505476263464607744?s=12
- https://svch0st.medium.com/stats-from-hunting-cobalt-strike-beacons-c17e56255f9b

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-21
- **Rule ID:** `cbec226f-63d9-4eca-9f52-dfb6652f24df`
- **Source file:** `windows/process_creation/proc_creation_win_susp_parents.yml`
