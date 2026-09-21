---
type: detection_rule
title: "Suspicious Wordpad Outbound Connections"
rule_id: 786cdae8-fefb-4eb2-9227-04e34060db01
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Wordpad Outbound Connections

## Description
Detects a network connection initiated by "wordpad.exe" over uncommon destination ports.
This might indicate potential process injection activity from a beacon or similar mechanisms.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_ports:
  DestinationPort:
  - 80
  - 139
  - 443
  - 445
  - 465
  - 587
  - 993
  - 995
selection:
  Image|endswith: \wordpad.exe
  Initiated: 'true'
```

## False Positives
- Other ports can be used, apply additional filters accordingly

## References
- https://blogs.blackberry.com/en/2023/07/romcom-targets-ukraine-nato-membership-talks-at-nato-summit

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-12
- **Rule ID:** `786cdae8-fefb-4eb2-9227-04e34060db01`
- **Source file:** `windows/network_connection/net_connection_win_wordpad_uncommon_ports.yml`
