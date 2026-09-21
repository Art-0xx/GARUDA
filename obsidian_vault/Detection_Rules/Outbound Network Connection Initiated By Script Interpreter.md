---
type: detection_rule
title: "Outbound Network Connection Initiated By Script Interpreter"
rule_id: 992a6cae-db6a-43c8-9cec-76d7195c96fc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Outbound Network Connection Initiated By Script Interpreter

## Description
Detects a script interpreter wscript/cscript opening a network connection to a non-local network. Adversaries may use script to download malicious payloads.

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
filter_main_ms_ranges:
  DestinationIp|cidr: 20.0.0.0/11
selection:
  Image|endswith:
  - \wscript.exe
  - \cscript.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1105

## False Positives
- Legitimate scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/28d190330fe44de6ff4767fc400cc10fa7cd6540/atomics/T1105/T1105.md

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems)
- **Date:** 2022-08-28
- **Rule ID:** `992a6cae-db6a-43c8-9cec-76d7195c96fc`
- **Source file:** `windows/network_connection/net_connection_win_wscript_cscript_outbound_connection.yml`
