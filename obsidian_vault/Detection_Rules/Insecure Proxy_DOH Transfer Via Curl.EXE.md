---
type: detection_rule
title: "Insecure Proxy/DOH Transfer Via Curl.EXE"
rule_id: 2c1486f5-02e8-4f86-9099-b97f2da4ed77
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Insecure Proxy/DOH Transfer Via Curl.EXE

## Description
Detects execution of "curl.exe" with the "insecure" flag over proxy or DOH.

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
  - --doh-insecure
  - --proxy-insecure
selection_img:
- Image|endswith: \curl.exe
- OriginalFileName: curl.exe
```

## False Positives
- Access to badly maintained internal or development systems

## References
- https://curl.se/docs/manpage.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-27
- **Rule ID:** `2c1486f5-02e8-4f86-9099-b97f2da4ed77`
- **Source file:** `windows/process_creation/proc_creation_win_curl_insecure_proxy_or_doh.yml`
