---
type: detection_rule
title: "Suspicious Files in Default GPO Folder"
rule_id: 5f87308a-0a5b-4623-ae15-d8fa1809bc60
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.005]
---

# Suspicious Files in Default GPO Folder

## Description
Detects the creation of copy of suspicious files (EXE/DLL) to the default GPO storage folder

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|contains: \Policies\{31B2F340-016D-11D2-945F-00C04FB984F9}\
  TargetFilename|endswith:
  - .dll
  - .exe
```

## MITRE ATT&CK
- T1036.005

## False Positives
- Unknown

## References
- https://redcanary.com/blog/intelligence-insights-november-2021/

## Metadata
- **Author:** elhoim
- **Date:** 2022-04-28
- **Rule ID:** `5f87308a-0a5b-4623-ae15-d8fa1809bc60`
- **Source file:** `windows/file/file_event/file_event_win_susp_default_gpo_dir_write.yml`
