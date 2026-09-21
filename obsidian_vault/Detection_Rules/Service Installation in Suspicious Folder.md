---
type: detection_rule
title: "Service Installation in Suspicious Folder"
rule_id: 5e993621-67d4-488a-b9ae-b420d08b96cb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Service Installation in Suspicious Folder

## Description
Detects service installation in suspicious folder appdata

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_zoom:
  ImagePath|contains: :\Program Files\Common Files\Zoom\Support\CptService.exe
  ServiceName: Zoom Sharing Service
selection:
  EventID: 7045
  ImagePath|contains:
  - \AppData\
  - \\\\127.0.0.1
  - \\\\localhost
  Provider_Name: Service Control Manager
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-03-18
- **Rule ID:** `5e993621-67d4-488a-b9ae-b420d08b96cb`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_susp_service_installation_folder.yml`
