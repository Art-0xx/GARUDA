---
type: detection_rule
title: "RunDLL32 Spawning Explorer"
rule_id: caa06de8-fdef-4c91-826a-7f9e163eef4b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# RunDLL32 Spawning Explorer

## Description
Detects RunDLL32.exe spawning explorer.exe as child, which is very uncommon, often observes Gamarue spawning the explorer.exe process in an unusual way

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentCommandLine|contains: \shell32.dll,Control_RunDLL
selection:
  Image|endswith: \explorer.exe
  ParentImage|endswith: \rundll32.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://redcanary.com/blog/intelligence-insights-november-2021/

## Metadata
- **Author:** elhoim, CD_ROM_
- **Date:** 2022-04-27
- **Rule ID:** `caa06de8-fdef-4c91-826a-7f9e163eef4b`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_spawn_explorer.yml`
