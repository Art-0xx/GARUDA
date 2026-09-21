---
type: detection_rule
title: "Execution Of Non-Existing File"
rule_id: 71158e3f-df67-472b-930e-7d287acaa3e1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Execution Of Non-Existing File

## Description
Detects process creation events where the Image field lacks an absolute path,
which occurs when the backing file no longer exists on disk at the time of
logging - commonly caused by Process Ghosting or other unorthodox process creation techniques.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_image_absolute_path:
  Image|contains: \
filter_optional_4688:
- Image:
  - MemCompression
  - Registry
  - System
  - vmmem
  - vmmemWSL
- CommandLine:
  - MemCompression
  - Registry
  - vmmem
  - vmmemWSL
filter_optional_empty:
  Image:
  - '-'
  - ''
filter_optional_null:
  Image: null
```

## MITRE ATT&CK
- T1055

## False Positives
- Unknown

## References
- https://pentestlaboratories.com/2021/12/08/process-ghosting/
- https://www.elastic.co/blog/process-ghosting-a-new-executable-image-tampering-attack

## Metadata
- **Author:** Max Altgelt (Nextron Systems)
- **Date:** 2021-12-09
- **Rule ID:** `71158e3f-df67-472b-930e-7d287acaa3e1`
- **Source file:** `windows/process_creation/proc_creation_win_susp_image_missing.yml`
