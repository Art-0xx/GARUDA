---
type: detection_rule
title: "Rundll32 Spawned Via Explorer.EXE"
rule_id: 1723e720-616d-4ddc-ab02-f7e3685a4713
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Rundll32 Spawned Via Explorer.EXE

## Description
Detects execution of "rundll32.exe" with a parent process of Explorer.exe. This has been observed by variants of Raspberry Robin, as first reported by Red Canary.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_generic:
- CommandLine|contains: ' C:\Windows\System32\'
- CommandLine|endswith: ' -localserver 22d8c27b-47a1-48d1-ad08-7da7abd79617'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
selection_parent:
  ParentImage|endswith: \explorer.exe
```

## False Positives
- Unknown

## References
- https://redcanary.com/blog/raspberry-robin/
- https://thedfirreport.com/2022/09/26/bumblebee-round-two/

## Metadata
- **Author:** CD_ROM_
- **Date:** 2022-05-21
- **Rule ID:** `1723e720-616d-4ddc-ab02-f7e3685a4713`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_parent_explorer.yml`
