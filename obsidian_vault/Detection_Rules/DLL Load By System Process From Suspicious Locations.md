---
type: detection_rule
title: "DLL Load By System Process From Suspicious Locations"
rule_id: 9e9a9002-56c4-40fd-9eff-e4b09bfa5f6c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070]
---

# DLL Load By System Process From Suspicious Locations

## Description
Detects when a system process (i.e. located in system32, syswow64, etc.) loads a DLL from a suspicious location or a location with permissive permissions such as "C:\Users\Public"

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|startswith:
  - C:\Users\Public\
  - C:\PerfLogs\
  Image|startswith: C:\Windows\
```

## MITRE ATT&CK
- T1070

## False Positives
- Unknown

## References
- https://github.com/hackerhouse-opensource/iscsicpl_bypassUAC (Idea)

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-17
- **Rule ID:** `9e9a9002-56c4-40fd-9eff-e4b09bfa5f6c`
- **Source file:** `windows/image_load/image_load_susp_dll_load_system_process.yml`
