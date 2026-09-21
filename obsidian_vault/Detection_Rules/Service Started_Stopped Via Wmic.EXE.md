---
type: detection_rule
title: "Service Started/Stopped Via Wmic.EXE"
rule_id: 0b7163dc-7eee-4960-af17-c0cd517f92da
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Service Started/Stopped Via Wmic.EXE

## Description
Detects usage of wmic to start or stop a service

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - stopservice
  - startservice
  CommandLine|contains|all:
  - ' service '
  - ' call '
selection_img:
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://sushant747.gitbooks.io/total-oscp-guide/content/privilege_escalation_windows.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `0b7163dc-7eee-4960-af17-c0cd517f92da`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_service_manipulation.yml`
