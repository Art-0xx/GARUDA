---
type: detection_rule
title: "Insecure Transfer Via Curl.EXE"
rule_id: cb9cc1d1-e84e-4bdc-b7ad-c31b1b7908ec
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Insecure Transfer Via Curl.EXE

## Description
Detects execution of "curl.exe" with the "--insecure" flag.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|re: \s-k\s
- CommandLine|contains: --insecure
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
```

## False Positives
- Access to badly maintained internal or development systems

## References
- https://curl.se/docs/manpage.html

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-06-30
- **Rule ID:** `cb9cc1d1-e84e-4bdc-b7ad-c31b1b7908ec`
- **Source file:** `windows/process_creation/proc_creation_win_curl_insecure_connection.yml`
