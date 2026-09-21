---
type: detection_rule
title: "Service Installation with Suspicious Folder Pattern"
rule_id: 1b2ae822-6fe1-43ba-aa7c-d1a3b3d1d5f2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Service Installation with Suspicious Folder Pattern

## Description
Detects service installation with suspicious folder patterns

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: all of selection_*
selection_eid:
  EventID: 7045
  Provider_Name: Service Control Manager
selection_img_paths:
- ImagePath|re: ^[Cc]:\\[Pp]rogram[Dd]ata\\.{1,9}\.exe
- ImagePath|re: ^[Cc]:\\.{1,9}\.exe
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
- **Rule ID:** `1b2ae822-6fe1-43ba-aa7c-d1a3b3d1d5f2`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_susp_service_installation_folder_pattern.yml`
