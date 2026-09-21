---
type: detection_rule
title: "Network Connection Initiated By Regsvr32.EXE"
rule_id: c7e91a02-d771-4a6d-a700-42587e0b1095
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1559.001, attack.t1218.010]
---

# Network Connection Initiated By Regsvr32.EXE

## Description
Detects a network connection initiated by "Regsvr32.exe"

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \regsvr32.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1559.001
- T1218.010

## False Positives
- Unknown

## References
- https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
- https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/

## Metadata
- **Author:** Dmitriy Lifanov, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `c7e91a02-d771-4a6d-a700-42587e0b1095`
- **Source file:** `windows/network_connection/net_connection_win_regsvr32_network_activity.yml`
