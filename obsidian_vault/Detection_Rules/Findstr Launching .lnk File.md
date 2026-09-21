---
type: detection_rule
title: "Findstr Launching .lnk File"
rule_id: 33339be3-148b-4e16-af56-ad16ec6c7e7b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1202, attack.t1027.003]
---

# Findstr Launching .lnk File

## Description
Detects usage of findstr to identify and execute a lnk file as seen within the HHS redirect attack

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|endswith:
  - .lnk
  - .lnk"
  - .lnk'
selection_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
```

## MITRE ATT&CK
- T1036
- T1202
- T1027.003

## False Positives
- Unknown

## References
- https://www.bleepingcomputer.com/news/security/hhsgov-open-redirect-used-by-coronavirus-phishing-to-spread-malware/

## Metadata
- **Author:** Trent Liffick
- **Date:** 2020-05-01
- **Rule ID:** `33339be3-148b-4e16-af56-ad16ec6c7e7b`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_lnk.yml`
