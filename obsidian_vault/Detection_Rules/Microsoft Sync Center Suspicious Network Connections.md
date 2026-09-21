---
type: detection_rule
title: "Microsoft Sync Center Suspicious Network Connections"
rule_id: 9f2cc74d-78af-4eb2-bb64-9cd1d292b87b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055, attack.t1218]
---

# Microsoft Sync Center Suspicious Network Connections

## Description
Detects suspicious connections from Microsoft Sync Center to non-private IPs.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_local_ranges:
  DestinationIp|cidr:
  - 127.0.0.0/8
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
  - ::1/128
  - fe80::/10
  - fc00::/7
selection:
  Image|endswith: \mobsync.exe
```

## MITRE ATT&CK
- T1055
- T1218

## False Positives
- Unknown

## References
- https://redcanary.com/blog/intelligence-insights-november-2021/

## Metadata
- **Author:** elhoim
- **Date:** 2022-04-28
- **Rule ID:** `9f2cc74d-78af-4eb2-bb64-9cd1d292b87b`
- **Source file:** `windows/network_connection/net_connection_win_susp_outbound_mobsync_connection.yml`
