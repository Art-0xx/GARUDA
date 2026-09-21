---
type: detection_rule
title: "Mstsc.EXE Execution From Uncommon Parent"
rule_id: ff3b6b39-e765-42f9-bb2c-ea6761e0e0f6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Mstsc.EXE Execution From Uncommon Parent

## Description
Detects potential RDP connection via Mstsc using a local ".rdp" file located in suspicious locations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: \mstsc.exe
- OriginalFileName: mstsc.exe
selection_parent:
  ParentImage|endswith:
  - \brave.exe
  - \CCleanerBrowser.exe
  - \chrome.exe
  - \chromium.exe
  - \firefox.exe
  - \iexplore.exe
  - \microsoftedge.exe
  - \msedge.exe
  - \opera.exe
  - \vivaldi.exe
  - \whale.exe
  - \outlook.exe
```

## False Positives
- Unlikely

## References
- https://www.blackhillsinfosec.com/rogue-rdp-revisiting-initial-access-methods/
- https://web.archive.org/web/20230726144748/https://blog.thickmints.dev/mintsights/detecting-rogue-rdp/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-18
- **Rule ID:** `ff3b6b39-e765-42f9-bb2c-ea6761e0e0f6`
- **Source file:** `windows/process_creation/proc_creation_win_mstsc_run_local_rpd_file_susp_parent.yml`
