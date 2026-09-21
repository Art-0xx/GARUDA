---
type: detection_rule
title: "Potential SentinelOne Shell Context Menu Scan Command Tampering"
rule_id: 6c304b02-06e6-402d-8be4-d5833cdf8198
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential SentinelOne Shell Context Menu Scan Command Tampering

## Description
Detects potentially suspicious changes to the SentinelOne context menu scan command by a process other than SentinelOne.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_sentinelone_binary:
  Image|endswith:
  - C:\Program Files\SentinelOne\
  - C:\Program Files (x86)\SentinelOne\
filter_main_sentinelone_default_scan_binary:
  Details|contains: \SentinelScanFromContextMenu.exe
  Details|startswith:
  - C:\Program Files\SentinelOne\Sentinel Agent
  - C:\Program Files (x86)\SentinelOne\Sentinel Agent
selection:
  TargetObject|contains: \shell\SentinelOneScan\command\
```

## False Positives
- Unknown

## References
- https://mrd0x.com/sentinelone-persistence-via-menu-context/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-03-06
- **Rule ID:** `6c304b02-06e6-402d-8be4-d5833cdf8198`
- **Source file:** `windows/registry/registry_set/registry_set_sentinelone_shell_context_tampering.yml`
