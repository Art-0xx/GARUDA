---
type: detection_rule
title: "Cab File Extraction Via Wusa.EXE From Potentially Suspicious Paths"
rule_id: c74c0390-3e20-41fd-a69a-128f0275a5ea
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Cab File Extraction Via Wusa.EXE From Potentially Suspicious Paths

## Description
Detects the execution of the "wusa.exe" (Windows Update Standalone Installer) utility to extract ".cab" files using the "/extract" argument from potentially suspicious paths.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_paths:
  CommandLine|contains:
  - :\PerfLogs\
  - :\Users\Public\
  - :\Windows\Temp\
  - \Appdata\Local\Temp\
selection_root:
  CommandLine|contains: '/extract:'
  Image|endswith: \wusa.exe
```

## False Positives
- Unknown

## References
- https://web.archive.org/web/20180331144337/https://www.fireeye.com/blog/threat-research/2018/03/sanny-malware-delivery-method-updated-in-recently-observed-attacks.html
- https://www.echotrail.io/insights/search/wusa.exe/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-05
- **Rule ID:** `c74c0390-3e20-41fd-a69a-128f0275a5ea`
- **Source file:** `windows/process_creation/proc_creation_win_wusa_cab_files_extraction_from_susp_paths.yml`
