---
type: detection_rule
title: "Suspicious File Download From IP Via Wget.EXE - Paths"
rule_id: 40aa399c-7b02-4715-8e5f-73572b493f33
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Download From IP Via Wget.EXE - Paths

## Description
Detects potentially suspicious file downloads directly from IP addresses and stored in suspicious locations using Wget.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flag:
- CommandLine|re: \s-O\s
- CommandLine|contains: --output-document
selection_http:
  CommandLine|contains: http
selection_img:
- Image|endswith: \wget.exe
- OriginalFileName: wget.exe
selection_ip:
  CommandLine|re: ://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
selection_paths:
- CommandLine|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Users\Public\
  - :\Windows\Help\
  - :\Windows\Temp\
  - \Temporary Internet
- CommandLine|contains|all:
  - :\Users\
  - \Favorites\
- CommandLine|contains|all:
  - :\Users\
  - \Favourites\
- CommandLine|contains|all:
  - :\Users\
  - \Contacts\
- CommandLine|contains|all:
  - :\Users\
  - \Pictures\
```

## False Positives
- Unknown

## References
- https://www.gnu.org/software/wget/manual/wget.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-02-23
- **Rule ID:** `40aa399c-7b02-4715-8e5f-73572b493f33`
- **Source file:** `windows/process_creation/proc_creation_win_wget_download_susp_locations.yml`
