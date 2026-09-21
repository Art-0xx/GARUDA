---
type: detection_rule
title: "Potential Cookies Session Hijacking"
rule_id: 5a6e1e16-07de-48d8-8aae-faa766c05e88
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Cookies Session Hijacking

## Description
Detects execution of "curl.exe" with the "-c" flag in order to save cookie data.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|re: \s-c\s
- CommandLine|contains: --cookie-jar
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
- **Rule ID:** `5a6e1e16-07de-48d8-8aae-faa766c05e88`
- **Source file:** `windows/process_creation/proc_creation_win_curl_cookie_hijacking.yml`
