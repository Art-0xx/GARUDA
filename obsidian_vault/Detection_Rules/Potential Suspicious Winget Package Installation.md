---
type: detection_rule
title: "Potential Suspicious Winget Package Installation"
rule_id: a3f5c081-e75b-43a0-9f5b-51f26fe5dba2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Suspicious Winget Package Installation

## Description
Detects potential suspicious winget package installation from a suspicious source.

## Log Source
```yaml
category: create_stream_hash
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Contents|contains:
  - ://1
  - ://2
  - ://3
  - ://4
  - ://5
  - ://6
  - ://7
  - ://8
  - ://9
  Contents|startswith: '[ZoneTransfer]  ZoneId=3'
  TargetFilename|contains: \AppData\Local\Temp\WinGet\
  TargetFilename|endswith: :Zone.Identifier
```

## False Positives
- Unknown

## References
- https://github.com/nasbench/Misc-Research/tree/b9596e8109dcdb16ec353f316678927e507a5b8d/LOLBINs/Winget

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-18
- **Rule ID:** `a3f5c081-e75b-43a0-9f5b-51f26fe5dba2`
- **Source file:** `windows/create_stream_hash/create_stream_hash_winget_susp_package_source.yml`
