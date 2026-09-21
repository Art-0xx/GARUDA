---
type: detection_rule
title: "Uncommon FileSystem Load Attempt By Format.com"
rule_id: 9fb6b26e-7f9e-4517-a48b-8cac4a1b6c60
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Uncommon FileSystem Load Attempt By Format.com

## Description
Detects the execution of format.com with an uncommon filesystem selection that could indicate a defense evasion activity in which "format.com" is used to load malicious DLL files or other programs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_known_fs:
  CommandLine|contains:
  - /fs:exFAT
  - /fs:FAT
  - /fs:NTFS
  - /fs:ReFS
  - /fs:UDF
selection:
  CommandLine|contains: '/fs:'
  Image|endswith: \format.com
```

## False Positives
- Unknown

## References
- https://twitter.com/0gtweet/status/1477925112561209344
- https://twitter.com/wdormann/status/1478011052130459653?s=20

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-04
- **Rule ID:** `9fb6b26e-7f9e-4517-a48b-8cac4a1b6c60`
- **Source file:** `windows/process_creation/proc_creation_win_format_uncommon_filesystem_load.yml`
