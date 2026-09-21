---
type: detection_rule
title: "Network Connection Initiated By AddinUtil.EXE"
rule_id: 5205613d-2a63-4412-a895-3a2458b587b3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Network Connection Initiated By AddinUtil.EXE

## Description
Detects a network connection initiated by the Add-In deployment cache updating utility "AddInutil.exe".
This could indicate a potential command and control communication as this tool doesn't usually initiate network activity.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \addinutil.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://www.blue-prints.blog/content/blog/posts/lolbin/addinutil-lolbas.html

## Metadata
- **Author:** Michael McKinley (@McKinleyMike), Tony Latteri (@TheLatteri)
- **Date:** 2023-09-18
- **Rule ID:** `5205613d-2a63-4412-a895-3a2458b587b3`
- **Source file:** `windows/network_connection/net_connection_win_addinutil_initiated.yml`
