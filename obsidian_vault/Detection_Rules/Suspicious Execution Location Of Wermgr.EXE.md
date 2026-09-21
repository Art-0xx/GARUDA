---
type: detection_rule
title: "Suspicious Execution Location Of Wermgr.EXE"
rule_id: 5394fcc7-aeb2-43b5-9a09-cac9fc5edcd5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Execution Location Of Wermgr.EXE

## Description
Detects suspicious Windows Error Reporting manager (wermgr.exe) execution location.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_location:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\WinSxS\
selection:
  Image|endswith: \wermgr.exe
```

## False Positives
- Unknown

## References
- https://www.trendmicro.com/en_us/research/22/j/black-basta-infiltrates-networks-via-qakbot-brute-ratel-and-coba.html
- https://www.echotrail.io/insights/search/wermgr.exe
- https://github.com/binderlabs/DirCreate2System

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-10-14
- **Rule ID:** `5394fcc7-aeb2-43b5-9a09-cac9fc5edcd5`
- **Source file:** `windows/process_creation/proc_creation_win_wermgr_susp_exec_location.yml`
