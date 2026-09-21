---
type: detection_rule
title: "Created Files by Microsoft Sync Center"
rule_id: 409f8a98-4496-4aaa-818a-c931c0a8b832
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055, attack.t1218]
---

# Created Files by Microsoft Sync Center

## Description
This rule detects suspicious files created by Microsoft Sync Center (mobsync)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection_mobsync and filter_created_file
filter_created_file:
  TargetFilename|endswith:
  - .dll
  - .exe
selection_mobsync:
  Image|endswith: \mobsync.exe
```

## MITRE ATT&CK
- T1055
- T1218

## False Positives
- Unknown

## References
- https://redcanary.com/blog/intelligence-insights-november-2021/

## Metadata
- **Author:** elhoim
- **Date:** 2022-04-28
- **Rule ID:** `409f8a98-4496-4aaa-818a-c931c0a8b832`
- **Source file:** `windows/file/file_event/file_event_win_susp_creation_by_mobsync.yml`
