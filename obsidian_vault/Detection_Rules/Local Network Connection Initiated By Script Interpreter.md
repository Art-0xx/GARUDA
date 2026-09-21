---
type: detection_rule
title: "Local Network Connection Initiated By Script Interpreter"
rule_id: 08249dc0-a28d-4555-8ba5-9255a198e08c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Local Network Connection Initiated By Script Interpreter

## Description
Detects a script interpreter (Wscript/Cscript) initiating a local network connection to download or execute a script hosted on a shared folder.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationIp|cidr:
  - 127.0.0.0/8
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
  - ::1/128
  - fe80::/10
  - fc00::/7
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
- **Author:** frack113
- **Date:** 2022-08-28
- **Rule ID:** `08249dc0-a28d-4555-8ba5-9255a198e08c`
- **Source file:** `windows/network_connection/net_connection_win_wscript_cscript_local_connection.yml`
