---
type: detection_rule
title: "Path To Screensaver Binary Modified"
rule_id: 67a6c006-3fbe-46a7-9074-2ba3b82c3000
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.002]
---

# Path To Screensaver Binary Modified

## Description
Detects value modification of registry key containing path to binary used as screensaver.

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith:
  - \rundll32.exe
  - \explorer.exe
selection:
  TargetObject|endswith: \Control Panel\Desktop\SCRNSAVE.EXE
```

## MITRE ATT&CK
- T1546.002

## False Positives
- Legitimate modification of screensaver

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.002/T1546.002.md
- https://www.welivesecurity.com/wp-content/uploads/2017/08/eset-gazer.pdf

## Metadata
- **Author:** Bartlomiej Czyz @bczyz1, oscd.community
- **Date:** 2020-10-11
- **Rule ID:** `67a6c006-3fbe-46a7-9074-2ba3b82c3000`
- **Source file:** `windows/registry/registry_event/registry_event_modify_screensaver_binary_path.yml`
