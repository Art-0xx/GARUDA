---
type: detection_rule
title: "Renamed CURL.EXE Execution"
rule_id: 7530cd3d-7671-43e3-b209-976966f6ea48
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059, attack.t1202]
---

# Renamed CURL.EXE Execution

## Description
Detects the execution of a renamed "CURL.exe" binary based on the PE metadata fields

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_img:
  Image|contains: \curl
selection:
- OriginalFileName: curl.exe
- Description: The curl executable
```

## MITRE ATT&CK
- T1059
- T1202

## False Positives
- Unknown

## References
- https://twitter.com/Kostastsale/status/1700965142828290260

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-09-11
- **Rule ID:** `7530cd3d-7671-43e3-b209-976966f6ea48`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_curl.yml`
