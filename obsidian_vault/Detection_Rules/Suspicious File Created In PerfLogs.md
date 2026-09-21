---
type: detection_rule
title: "Suspicious File Created In PerfLogs"
rule_id: bbb7e38c-0b41-4a11-b306-d2a457b7ac2b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Suspicious File Created In PerfLogs

## Description
Detects suspicious file based on their extension being created in "C:\PerfLogs\". Note that this directory mostly contains ".etl" files

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - .7z
  - .bat
  - .bin
  - .chm
  - .dll
  - .exe
  - .hta
  - .lnk
  - .ps1
  - .psm1
  - .py
  - .scr
  - .sys
  - .vbe
  - .vbs
  - .zip
  TargetFilename|startswith: C:\PerfLogs\
```

## MITRE ATT&CK
- T1059

## False Positives
- Unlikely

## References
- Internal Research
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-05
- **Rule ID:** `bbb7e38c-0b41-4a11-b306-d2a457b7ac2b`
- **Source file:** `windows/file/file_event/file_event_win_perflogs_susp_files.yml`
