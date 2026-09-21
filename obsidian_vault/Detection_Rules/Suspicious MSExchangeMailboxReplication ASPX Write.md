---
type: detection_rule
title: "Suspicious MSExchangeMailboxReplication ASPX Write"
rule_id: 7280c9f3-a5af-45d0-916a-bc01cb4151c9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1190, attack.t1505.003]
---

# Suspicious MSExchangeMailboxReplication ASPX Write

## Description
Detects suspicious activity in which the MSExchangeMailboxReplication process writes .asp and .apsx files to disk, which could be a sign of ProxyShell exploitation

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \MSExchangeMailboxReplication.exe
  TargetFilename|endswith:
  - .aspx
  - .asp
```

## MITRE ATT&CK
- T1190
- T1505.003

## False Positives
- Unknown

## References
- https://redcanary.com/blog/blackbyte-ransomware/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-02-25
- **Rule ID:** `7280c9f3-a5af-45d0-916a-bc01cb4151c9`
- **Source file:** `windows/file/file_event/file_event_win_susp_exchange_aspx_write.yml`
