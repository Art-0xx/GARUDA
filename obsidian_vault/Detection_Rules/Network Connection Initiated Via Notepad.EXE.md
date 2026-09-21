---
type: detection_rule
title: "Network Connection Initiated Via Notepad.EXE"
rule_id: e81528db-fc02-45e8-8e98-4e84aba1f10b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Network Connection Initiated Via Notepad.EXE

## Description
Detects a network connection that is initiated by the "notepad.exe" process.
This might be a sign of process injection from a beacon process or something similar.
Notepad rarely initiates a network communication except when printing documents for example.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_printing:
  DestinationPort: 9100
selection:
  Image|endswith: \notepad.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Printing documents via notepad might cause communication with the printer via port 9100 or similar.

## References
- https://web.archive.org/web/20200219102749/https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1492186586.pdf
- https://www.cobaltstrike.com/blog/why-is-notepad-exe-connecting-to-the-internet

## Metadata
- **Author:** EagleEye Team
- **Date:** 2020-05-14
- **Rule ID:** `e81528db-fc02-45e8-8e98-4e84aba1f10b`
- **Source file:** `windows/network_connection/net_connection_win_notepad.yml`
