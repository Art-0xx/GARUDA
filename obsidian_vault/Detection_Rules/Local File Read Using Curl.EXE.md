---
type: detection_rule
title: "Local File Read Using Curl.EXE"
rule_id: aa6f6ea6-0676-40dd-b510-6e46f02d8867
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Local File Read Using Curl.EXE

## Description
Detects execution of "curl.exe" with the "file://" protocol handler in order to read local files.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: file:///
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
```

## False Positives
- Unknown

## References
- https://curl.se/docs/manpage.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-27
- **Rule ID:** `aa6f6ea6-0676-40dd-b510-6e46f02d8867`
- **Source file:** `windows/process_creation/proc_creation_win_curl_local_file_read.yml`
