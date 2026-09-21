---
type: detection_rule
title: "Suspicious Workstation Locking via Rundll32"
rule_id: 3b5b0213-0460-4e3f-8937-3abf98ff7dcc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Workstation Locking via Rundll32

## Description
Detects a suspicious call to the user32.dll function that locks the user workstation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_call_cli:
  CommandLine|contains: user32.dll,
selection_call_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
selection_call_parent:
  ParentImage|endswith: \cmd.exe
selection_function:
  CommandLine|contains: LockWorkStation
```

## False Positives
- Scripts or links on the user desktop used to lock the workstation instead of Windows+L or the menu option

## References
- https://app.any.run/tasks/2aef9c63-f944-4763-b3ef-81eee209d128/

## Metadata
- **Author:** frack113
- **Date:** 2022-06-04
- **Rule ID:** `3b5b0213-0460-4e3f-8937-3abf98ff7dcc`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_user32_dll.yml`
