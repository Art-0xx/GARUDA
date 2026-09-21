---
type: detection_rule
title: "Uncommon Network Connection Initiated By Certutil.EXE"
rule_id: 0dba975d-a193-4ed1-a067-424df57570d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Uncommon Network Connection Initiated By Certutil.EXE

## Description
Detects a network connection initiated by the certutil.exe utility.
Attackers can abuse the utility in order to download malware or additional payloads.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationPort:
  - 80
  - 135
  - 443
  - 445
  Image|endswith: \certutil.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/certutil

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems)
- **Date:** 2022-09-02
- **Rule ID:** `0dba975d-a193-4ed1-a067-424df57570d1`
- **Source file:** `windows/network_connection/net_connection_win_certutil_initiated_connection.yml`
