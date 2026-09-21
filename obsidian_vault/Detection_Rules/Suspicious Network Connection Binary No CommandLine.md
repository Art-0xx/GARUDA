---
type: detection_rule
title: "Suspicious Network Connection Binary No CommandLine"
rule_id: 20384606-a124-4fec-acbb-8bd373728613
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Network Connection Binary No CommandLine

## Description
Detects suspicious network connections made by a well-known Windows binary run with no command line parameters

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter*
filter_no_cmdline:
  CommandLine: ''
filter_null:
  CommandLine: null
selection:
  CommandLine|endswith:
  - \regsvr32.exe
  - \rundll32.exe
  - \dllhost.exe
  Image|endswith:
  - \regsvr32.exe
  - \rundll32.exe
  - \dllhost.exe
  Initiated: 'true'
```

## False Positives
- Unknown

## References
- https://redcanary.com/blog/raspberry-robin/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-03
- **Rule ID:** `20384606-a124-4fec-acbb-8bd373728613`
- **Source file:** `windows/network_connection/net_connection_win_susp_binary_no_cmdline.yml`
